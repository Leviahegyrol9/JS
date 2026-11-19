import { useEffect, useState } from "react";
import type { Bike } from "../types/Bike";
import apiClient from "../api/apiClient";
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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [bikes, setBikes] = useState<Array<Bike>>([]);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") ?? "null");

  if (user) {
    navigate(`/logged/${user.id}`);
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
            <Card.Subtitle className="mb-3">{bike.year}</Card.Subtitle>
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
          <Card.Footer className="text-warning text-end fs-5 fw-bold">
            {bike.price.toLocaleString("hu-HU")} Ft
          </Card.Footer>
        </Card>
      </Col>
    );
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
          onClick={() => navigate("/login")}
          variant="outline-light"
          className="fw-bold"
        >
          Bejelentkezés
        </Button>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikes.map(generateCard)}
      </Row>
      {error && <Alert variant="danger">{error}</Alert>}
    </Container>
  );
};
export default Home;
