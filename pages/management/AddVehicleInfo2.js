import react, { CSSProperties, forwardRef } from "react";
import { Row, Col, Card, Form, FormCheck } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faForward,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const model = [
  { value: "Add new device", label: "Add new device" },
  { value: "6109798923", label: "6109798923" },
  { value: "6109798924", label: "6109798924" },
  { value: "6109798925", label: "6109798925" },
];
const AddDeviceInformation = () => {
  return (
    <>
      <Row>
        <Card>
          <Card.Body>
            <Row className=" d-flex justify-content-center mb-5">
              <Col lg="6">
                <Form className="mt-5">
                  <Row className="p-3 mb-3">
                    <Col md="12">
                      <h4>Select exist Device</h4>
                      <div className="my-3">
                        <Form.Group className="form-group">
                          <Form.Label>Select a Device</Form.Label>
                          <Select options={model} />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md="12" className="mt-3">
                      <h4>Add new Device</h4>
                      <div className="my-3">
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="SerialNumber">
                            Serial Number
                          </Form.Label>
                          <Form.Control type="number" id="SerialNumber" />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col md="12">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Label>Device Type</Form.Label>
                          <Select options={model} />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
                </Form>

                <div className="mt-5 d-flex justify-content-end">
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faArrowLeft}
                      size="sm"
                    />
                    Back
                  </button>
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faArrowRight}
                      size="sm"
                    />
                    Next
                  </button>
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faForward}
                      size="sm"
                    />
                    Skip
                  </button>
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faTimes}
                      size="sm"
                    />
                    Cancel
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};
export default AddDeviceInformation;
