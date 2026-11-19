import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./style/Home.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logged from "./pages/Logged";
import ModifyBike from "./pages/ModifyBike";
import { Slide, ToastContainer } from "react-toastify";
import Container from "react-bootstrap/esm/Container";
import AddBike from "./pages/AddBike";
import Registration from "./pages/Registration";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/b/:id/" element={<ModifyBike />} />
        <Route path="/b/new/u/:userId" element={<AddBike />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logged/:userId" element={<Logged />} />
        <Route
          path="/*"
          element={
            <Container className="text-white py-5 text-center">
              <h1>Az oldal nem található!</h1>
              <Link to="/" className="text-warning">
                Vissza a főoldalra
              </Link>
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
