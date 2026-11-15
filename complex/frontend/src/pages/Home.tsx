import { useEffect, useState } from "react";
import type { Bike } from "../types/Bike";
import apiClient from "../api/apiClient";
import "../style/Home.css";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [bikes, setBikes] = useState<Array<Bike>>([]);

  useEffect(() => {
    apiClient
      .get("/bikes")
      .then((res) => setBikes(res.data))
      .catch((err) => console.error(err));
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
              {bike.year} · {bike.color}
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
        <Link to="/login" className="fw-bold btn btn-warning">
          Bejelentkezés
        </Link>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikes.map(generateCard)}
      </Row>
    </Container>
  );
};
export default Home;
