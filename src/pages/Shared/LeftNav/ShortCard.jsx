import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendarAlt } from "react-icons/fa";

const ShortCard = () => {
  return (
    <Row xs={1} md={1} className="g-4 mt-5">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>
              The Earth, Our First Home. Let's Save Our Home Together
            </Card.Title>
            <Card.Text className="mt-5 gap-4 d-flex align-items-center">
              <p>Culture</p>
              <p className="text-secondary">
                <FaCalendarAlt /> <small className="ms-2">Apr 8, 2023</small>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>
              Know the 21st Century's Family Plan and Happiness Secret
            </Card.Title>
            <Card.Text className="mt-5 gap-4 d-flex align-items-center">
              <p>Entertainment</p>
              <p className="text-secondary">
                <FaCalendarAlt /> <small className="ms-2">Jan 13, 2022</small>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Card.Title>
            <Card.Text className="mt-5 gap-4 d-flex align-items-center">
              <p>Sports</p>
              <p className="text-secondary">
                <FaCalendarAlt /> <small className="ms-2">Dec 4, 2022</small>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ShortCard;
