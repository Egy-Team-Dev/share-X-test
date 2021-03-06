import react, { CSSProperties, forwardRef } from "react";
import { Row, Col, Card, Form, FormCheck } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const model = [
  { value: "options 001", label: "options 001" },
  { value: "options 002", label: "options 002" },
  { value: "options 003", label: "options 003" },
  { value: "options 004", label: "options 004" },
];
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const AccountWizard = () => {
  const { t } = useTranslation("Management");
  return (
    <>
      <Row>
        <Card>
          <Card.Body>
            <Row className=" d-flex justify-content-center">
              <Col md="8">
                <Form className="mt-5">
                  <Row className="p-3 mb-3">
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="AccountName">
                          {t("Account_Name")}
                        </Form.Label>
                        <Form.Control type="text" id="AccountName" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Label>{t("Parent_Account")}</Form.Label>
                          <Select options={model} />
                        </Form.Group>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Check className=" form-check-inline">
                            <FormCheck.Input
                              type="checkbox"
                              className="form-check-input"
                              id="reseller"
                            />
                            <FormCheck.Label
                              className="form-check-label px-3 fs-5"
                              htmlFor="reseller"
                            >
                              {t("Reseller")}
                            </FormCheck.Label>
                          </Form.Check>
                        </Form.Group>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Label>{t("Account_Type")}</Form.Label>
                          <Select options={model} />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-3 mb-3">
                    <Col lg="6">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Label>{t("Billing_Period")}</Form.Label>
                          <Select options={model} />
                        </Form.Group>
                      </div>
                    </Col>

                    <Col lg="6">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="billingDate">
                            {t("Billing_Started_On")}
                          </Form.Label>
                          <Form.Control
                            type="date"
                            id="billingDate"
                            defaultValue="2021-10-17"
                          />
                        </Form.Group>
                      </div>
                    </Col>

                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="AccountTag">
                          {t("Account_Tag")}{" "}
                        </Form.Label>
                        <Form.Control type="text" id="AccountTag" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Label htmlFor="nextBillingDate">
                            {t("Next_Billing_Date")}
                          </Form.Label>
                          <Form.Control
                            type="date"
                            id="nextBillingDate"
                            defaultValue="2021-10-17"
                          />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
                  <Row className="p-3 mb-3">
                    <h4 className="card-title mb-5 mt-3">
                      {t("WASL_Integration_(Optional)")}
                    </h4>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="identity">
                          {t("Identity_Number")}
                        </Form.Label>
                        <Form.Control type="NUMBER" id="identity" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="Commercial">
                          {t("Commercial_Record_Number")}
                        </Form.Label>
                        <Form.Control type="number" id="Commercial" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="HijriDate">
                          {t("Record_Issue_Date_Hijri")}
                        </Form.Label>
                        <Form.Control type="text" id="HijriDate" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="phoneNum">
                          {t("Phone_Number")}
                        </Form.Label>
                        <Form.Control type="number" id="phoneNum" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="extensionNum">
                          {t("Extension_Number")}
                        </Form.Label>
                        <Form.Control type="number" id="extensionNum" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="emailAddress">
                          {t("Email_Address")}
                        </Form.Label>
                        <Form.Control type="email" id="emailAddress" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="managerName">
                          {t("Manager_Name")}
                        </Form.Label>
                        <Form.Control type="text" id="managerName" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="managerPhoneNum">
                          {t("Manager_Phone_Number")}
                        </Form.Label>
                        <Form.Control type="number" id="managerPhoneNum" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="ManagerMobile">
                          {t("Manager_Mobile_Number")}
                        </Form.Label>
                        <Form.Control type="number" id="ManagerMobile" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>

                <div className="mt-5 d-flex justify-content-end">
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faArrowRight}
                      size="sm"
                    />
                    {t("Next")}
                  </button>
                  <button className="btn btn-primary px-3 py-2 ms-3">
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faTimes}
                      size="sm"
                    />
                    {t("Cancel")}
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
export default AccountWizard;

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Management", "main"])),
    },
  };
}
// translation ##################################
