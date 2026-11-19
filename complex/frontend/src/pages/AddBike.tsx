import { useEffect, useRef, useState } from "react";
import type { Bike } from "../types/Bike";
import apiClient from "../api/apiClient";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AddBike = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const brand = useRef<HTMLInputElement>(null);
  const model = useRef<HTMLInputElement>(null);
  const category = useRef<HTMLSelectElement>(null);
  const year = useRef<HTMLInputElement>(null);
  const displacement = useRef<HTMLInputElement>(null);
  const power = useRef<HTMLInputElement>(null);
  const topSpeed = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const image = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  const user = JSON.parse(localStorage.getItem("user") ?? "null");

  if (!user || user.id !== Number(userId)) {
    return (
      <Container className="text-white py-5 text-center">
        <h1>Hozzáférés megtagadva</h1>
        <p>Nincs jogosultságod a motor hozzáadásához.</p>
        <Link to="/" className="text-warning">
          Vissza a főoldalra
        </Link>
      </Container>
    );
  }

  const clickBtn = () => {
    if (
      brand.current?.value === "" ||
      model.current?.value === "" ||
      year.current?.value === "" ||
      displacement.current?.value === "" ||
      power.current?.value === "" ||
      topSpeed.current?.value === "" ||
      price.current?.value === "" ||
      image.current?.value === "" ||
      description.current?.value === ""
    ) {
      toast.error("Minden mezőt ki kell tölteni.");
      return;
    }

    const newBike: Bike = {
      owner: user.name,
      userId: Number(userId),
      brand: String(brand.current?.value),
      model: String(model.current?.value),
      category: String(category.current?.value),
      year: Number(year.current?.value),
      displacement: Number(displacement.current?.value),
      power: Number(power.current?.value),
      topSpeed: Number(topSpeed.current?.value),
      price: Number(price.current?.value),
      image: String(image.current?.value),
      description: String(description.current?.value),
    };

    apiClient
      .post(`/bikes`, newBike)
      .then(() => {
        navigate(-1);
        toast.success("Sikeres hozzáadás.");
      })
      .catch(() => toast.error("Sikertelen hozzáadás."));
  };

  return (
    <Container className="py-4" style={{ maxWidth: "800px" }}>
      <Card bg="dark" text="white">
        <Card.Header className="fw-bold fs-5">Motor hozzáadása</Card.Header>
        <Card.Body>
          <Form>
            <Row className="g-3">
              <Form.Group as={Col} md={6}>
                <Form.Label>Márka</Form.Label>
                <Form.Control ref={brand} />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Modell</Form.Label>
                <Form.Control ref={model} />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Kategória</Form.Label>
                <Form.Select ref={category}>
                  <option value="Sportmotor">Sportmotor</option>
                  <option value="Sporttúra">Sporttúra</option>
                  <option value="Naked">Naked</option>
                  <option value="Túraenduro">Túraenduro</option>
                  <option value="Cruiser">Cruiser</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Évjárat</Form.Label>
                <Form.Control type="number" ref={year} />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Hengerűrtartalom (cm³)</Form.Label>
                <Form.Control type="number" ref={displacement} />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Teljesítmény (LE)</Form.Label>
                <Form.Control type="number" ref={power} />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Végsebesség (km/h)</Form.Label>
                <Form.Control type="number" ref={topSpeed} />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Tulajsonos</Form.Label>
                <Form.Control defaultValue={user.name} disabled />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Ár (Ft)</Form.Label>
                <Form.Control type="number" ref={price} />
              </Form.Group>

              <Form.Group as={Col} xs={12}>
                <Form.Label>Kép URL</Form.Label>
                <Form.Control ref={image} />
              </Form.Group>

              <Form.Group as={Col} xs={12}>
                <Form.Label>Leírás</Form.Label>
                <Form.Control as="textarea" rows={3} ref={description} />
              </Form.Group>
            </Row>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button
                variant="secondary"
                className="fw-bold"
                onClick={() => navigate(-1)}
              >
                Mégse
              </Button>
              <Button onClick={clickBtn} variant="warning" className="fw-bold">
                Mentés
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default AddBike;
