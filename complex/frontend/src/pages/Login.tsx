import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";

const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    apiClient
      .post("/login", {
        email: email.current?.value,
        password: password.current?.value,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
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

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail cím</Form.Label>
              <Form.Control
                type="email"
                ref={email}
                autoComplete="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Jelszó</Form.Label>
              <Form.Control
                type="password"
                ref={password}
                autoComplete="current-password"
                required
              />
            </Form.Group>
            <Button type="submit" variant="warning" className="w-100">
              Bejelentkezés
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/" className="text-warning">
              Vissza a motorokhoz
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
