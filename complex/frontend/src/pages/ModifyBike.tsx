import { useEffect, useRef, useState } from "react";
import type { Bike } from "../types/Bike";
import apiClient from "../api/apiClient";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ModifyBike = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState<Bike>();

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

  useEffect(() => {
    apiClient
      .get(`/bikes/${id}`)
      .then((res) => setBike(res.data))
      .catch(() => toast.error("Nem sikerült betölteni a motort."));
  }, [id]);

  const clickBtn = () => {
    if (!bike) return;

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
      ...bike,
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
      .put(`/bikes/${id}`, newBike)
      .then(() => {
        navigate(-1);
        toast.success("Sikeres módosítás.");
      })
      .catch(() => toast.error("Sikertelen módosítás."));
  };

  if (!user || user.id !== bike?.userId) {
    return (
      <Container className="text-white py-5 text-center">
        <h1>Hozzáférés megtagadva</h1>
        <p>Nincs jogosultságod a motor módosításához.</p>
        <Link to="/" className="text-warning">
          Vissza a főoldalra
        </Link>
      </Container>
    );
  }

  if (!bike) return null;

  return (
    <Container className="py-4" style={{ maxWidth: "800px" }}>
      <Card bg="dark" text="white">
        <Card.Header className="fw-bold fs-5">Motor módosítása</Card.Header>
        <Card.Body>
          <Form>
            <Row className="g-3">
              <Form.Group as={Col} md={6}>
                <Form.Label>Márka</Form.Label>
                <Form.Control defaultValue={bike.brand} ref={brand} />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Modell</Form.Label>
                <Form.Control defaultValue={bike.model} ref={model} />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Kategória</Form.Label>
                <Form.Select defaultValue={bike.category} ref={category}>
                  <option value="Sportmotor">Sportmotor</option>
                  <option value="Sporttúra">Sporttúra</option>
                  <option value="Naked">Naked</option>
                  <option value="Túraenduro">Túraenduro</option>
                  <option value="Cruiser">Cruiser</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Évjárat</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={bike.year}
                  ref={year}
                />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Hengerűrtartalom (cm³)</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={bike.displacement}
                  ref={displacement}
                />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Teljesítmény (LE)</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={bike.power}
                  ref={power}
                />
              </Form.Group>

              <Form.Group as={Col} md={4}>
                <Form.Label>Végsebesség (km/h)</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={bike.topSpeed}
                  ref={topSpeed}
                />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Tulajdonos</Form.Label>
                <Form.Control defaultValue={bike.owner} disabled />
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Ár (Ft)</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={bike.price}
                  ref={price}
                />
              </Form.Group>

              <Form.Group as={Col} xs={12}>
                <Form.Label>Kép URL</Form.Label>
                <Form.Control defaultValue={bike.image} ref={image} />
              </Form.Group>

              <Form.Group as={Col} xs={12}>
                <Form.Label>Leírás</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={bike.description}
                  ref={description}
                />
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
export default ModifyBike;
