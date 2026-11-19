import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";
import type { Bike } from "../types/Bike";
import { toast } from "react-toastify";

const Logged = () => {
  const [bikes, setBikes] = useState<Array<Bike>>([]);
  const [error, setError] = useState<string>("");
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") ?? "null");

  if (!user || user.id !== Number(userId)) {
    return (
      <Container className="text-white py-5 text-center">
        <h1>Hozzáférés megtagadva</h1>
        <p>Nem vagy bejelentkezve.</p>
        <Link to="/" className="text-warning">
          Vissza a főoldalra
        </Link>
      </Container>
    );
  }

  useEffect(() => {
    apiClient
      .get("/bikes")
      .then((res) => setBikes(res.data))
      .catch((err) => {
        console.error(err);
        setError("Nem sikerült betölteni a motorokat.");
      });
  }, []);

  const generateCard = (bike: Bike) => {
    return (
      <Col key={bike.id}>
        <Card bg="dark" text="white" className="h-100">
          <Card.Img src={bike.image} alt={`${bike.brand} ${bike.model}`} />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start gap-2">
              <Card.Title className="mb-1">
                {bike.brand} {bike.model}
              </Card.Title>
              <Badge bg="warning text-dark">{bike.category}</Badge>
            </div>
            <Card.Subtitle className="mb-3">
              {bike.year} · <b>{bike.owner}</b>
            </Card.Subtitle>
            <Card.Text>{bike.description}</Card.Text>
          </Card.Body>
          <ListGroup>
            <ListGroup.Item
              variant="dark"
              className="d-flex justify-content-between active"
            >
              <span>Hengerűrtartalom</span>
              <b>{bike.displacement} cm³</b>
            </ListGroup.Item>
            <ListGroup.Item
              variant="dark"
              className="d-flex justify-content-between active"
            >
              <span>Teljesítmény</span>
              <b>{bike.power} LE</b>
            </ListGroup.Item>
            <ListGroup.Item
              variant="dark"
              className="d-flex justify-content-between active"
            >
              <span>Végsebesség</span>
              <b>{bike.topSpeed} km/h</b>
            </ListGroup.Item>
          </ListGroup>
          {bike.userId === Number(userId) && (
            <div className="d-flex justify-content-between p-3">
              <Button
                className="btn-light fw-bold"
                onClick={() => navigate(`/b/${bike.id}`)}
              >
                Módosítás
              </Button>
              <Button
                className="btn-danger fw-bold"
                onClick={() => deleteBtn(bike.id)}
              >
                Törlés
              </Button>
            </div>
          )}
          <Card.Footer className="text-warning text-end fs-5 fw-bold">
            {bike.price.toLocaleString("hu-HU")} Ft
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  const logout = () => {
    localStorage.removeItem("user");
    toast.success("Sikeres kijelentkezés!");
    navigate("/");
  };

  const deleteBtn = (id?: number) => {
    if (!id) {
      toast.error("Hiba történt a motor törlése közben.");
      return;
    }
    apiClient
      .delete(`/bikes/${id}`)
      .then(() => {
        setBikes(bikes.filter((bike) => bike.id !== id));
        toast.success("Sikeres törlés.");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Hiba történt a motor törlése közben.");
      });
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 className="mb-1 text-white">Motorkínálat</h1>
          <p className="text-white mb-0">
            <b className="text-warning">{bikes.length}</b> motor a garázsban
          </p>
        </div>
        <Button
          variant="outline-warning"
          className="fw-bold"
          onClick={() => navigate(`/b/new/u/${userId}`)}
        >
          Motor hozzáadása
        </Button>
        <Button variant="outline-light" className="fw-bold" onClick={logout}>
          Kijelentkezés
        </Button>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikes.map(generateCard)}
      </Row>
      {error && <Alert variant="danger">{error}</Alert>}
    </Container>
  );
};
export default Logged;
