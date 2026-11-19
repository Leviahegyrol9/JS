import { useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const Registration = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const clickBtn = () => {
    setError("");

    if (
      !name.current?.value ||
      !email.current?.value ||
      !password.current?.value
    ) {
      toast.error("Minden mezőt ki kell tölteni.");
      return;
    }

    apiClient
      .post("/registration", {
        name: name.current?.value,
        email: email.current?.value,
        password: password.current?.value,
      })
      .then(() => {
        toast.success("Sikeres regisztráció!");
        navigate("/login");
      })
      .catch((err) => {
        switch (err.response?.status) {
          case 400:
            setError("Hibás adatok, ellenőrizd az e-mail címet.");
            break;
          case 409:
            setError("Ehhez az email címhez már van társítva fiók.");
            break;
          default:
            setError("Nem sikerült elérni a szervert, próbáld újra később.");
        }
      });
  };

  return (
    <Container className="py-5" style={{ maxWidth: "420px" }}>
      <Card bg="dark" text="white">
        <Card.Body className="p-4">
          <h1 className="h3 mb-4 text-center">Regisztráció</h1>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Felhasználónév</Form.Label>
              <Form.Control type="text" ref={name} />
            </Form.Group>

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
              Regisztráció
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/login" className="text-white">
              Van már fiókod?
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

export default Registration;
