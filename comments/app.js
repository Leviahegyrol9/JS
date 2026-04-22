import express from "express";
import * as db from "./data/db.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/comments", (req, res) => {
  const comments = db.getAllComments();
  res.status(200).json(comments);
});

app.get("/comments/:id", (req, res) => {
  const comment = db.getCommentById(+req.params.id);
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }
  res.status(200).json(comment);
});

app.post("/comments", (req, res) => {
  const { author, message } = req.body;
  if (!author || !message) {
    return res.status(400).json({ message: "Author and message are required" });
  }
  const newComment = db.saveComment(author, message);
  const comment = db.getCommentById(newComment.lastInsertRowid);
  res.status(201).json({ message: "Comment saved successfully", comment });
});

app.put("/comments/:id", (req, res) => {
  const id = +req.params.id;
  const { author, message } = req.body;
  if (!author || !message) {
    return res.status(400).json({ message: "Author and message are required" });
  }
  const comment = db.getCommentById(id);
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }
  comment.author = author;
  comment.message = message;
  db.updateComment(comment.id, comment.author, comment.message);
  return res
    .status(200)
    .json({ message: "Comment updated successfully", comment });
});

app.delete("/comments/:id", (req, res) => {
  const id = +req.params.id;
  const comment = db.getCommentById(id);
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }
  db.deleteComment(id);
  return res.status(204).json({ message: "Comment deleted successfully" });
});

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
