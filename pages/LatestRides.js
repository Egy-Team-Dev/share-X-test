import React from "react";
import { Card, Col, Row } from "react-bootstrap";
const { name, bookingDate, returnDate, from, to, status } = {
  name: "Ahmed Gabr",
  bookingDate: "22/3/2022 10:04AM",
  returnDate: "28/3/2022 11:30PM",
  from: "Riyadh",
  to: "Jeddah",
  status: "running",
};

const LatestRides = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="text-secondary mb-3 fw-normal">Latest Booking rides</h4>

        <div style={{ height: "300px", overflowY: "scroll" }}>
          {new Array(8).fill(
            <Card className="bg-soft-info m-1">
              <Card.Body>
                <Row>
                  <Col md="2">{name}</Col>
                  <Col md="2">{bookingDate}</Col>
                  <Col md="2">{returnDate}</Col>
                  <Col md="2">{from}</Col>
                  <Col md="2">{to}</Col>
                  <Col md="2">
                    {" "}
                    <span
                      className="bg-info text-light px-3 py-1"
                      style={{ borderRadius: "15px" }}
                    >
                      {status}
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default LatestRides;
