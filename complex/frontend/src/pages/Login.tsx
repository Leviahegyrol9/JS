import { useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const clickBtn = () => {
    if (!email.current?.value || !password.current?.value) {
      toast.error("Minden mezőt ki kell tölteni.");
      return;
    }
    apiClient
      .post("/login", {
        email: email.current?.value,
        password: password.current?.value,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Sikeres bejelentkezés!");
        navigate(`/logged/${res.data.user.id}`);
      })
      .catch((err) =>
        setError(
          err.response?.status === 401
            ? "Hibás e-mail cím vagy jelszó."
            : "Nem sikerült elérni a szervert, próbáld újra később.",
        ),
      );
  };

  return (
    <Container className="py-5" style={{ maxWidth: "420px" }}>
      <Card bg="dark" text="white">
        <Card.Body className="p-4">
          <h1 className="h3 mb-4 text-center">Bejelentkezés</h1>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>E-mail cím</Form.Label>
              <Form.Control type="email" ref={email} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Jelszó</Form.Label>
              <Form.Control type="password" ref={password} />
            </Form.Group>
            <Button
              onClick={clickBtn}
              variant="warning"
              className="w-100 fw-bold"
            >
              Bejelentkezés
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/registration" className="text-white">
              Nincs fiókod?
            </Link>
            <br />
            <Link to="/" className="text-warning">
              Vissza a főoldalra
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
