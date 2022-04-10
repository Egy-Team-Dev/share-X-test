import {
  Button,
  Card,
  Col,
  Form,
  FormLabel,
  Row,
  Spinner,
} from "react-bootstrap";
import Image from "next/image";
import { Formik } from "formik";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/client";

const loginSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

const initialValues = {
  username: "",
  password: "",
  remember_me: false,
};

const Signin = () => {
  const router = useRouter();
  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                  <Card.Body>
                    <div className="navbar-brand d-flex align-items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        viewBox="0 0 150 55.56"
                      >
                        <linearGradient
                          id="linear-gradient"
                          x1="3.28"
                          y1="26.49"
                          x2="19.74"
                          y2="-2.03"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#0994b8" />
                          <stop offset="0.27" stopColor="#0d97b9" />
                          <stop offset="0.53" stopColor="#189fbe" />
                          <stop offset="0.78" stopColor="#2bacc5" />
                          <stop offset="1" stopColor="#42bccd" />
                        </linearGradient>
                        <path
                          fill="url(#linear-gradient)"
                          d="M21.81,8.27c.8,0,1.47,0,1.89.06l-.06.33-1.81,9.42c-1.11,5.83-7.37,10-13.3,10C4.81,28.12.66,25.45,0,22c13.44,0,22.46-6.8,20.8-8.9a6.13,6.13,0,0,0-2.44-1.53c-.82-.32-1.67-.59-2.34-.81l-.35-.13c-1-.41-1.35-.92-.29-1.39A17.22,17.22,0,0,1,21.81,8.27ZM22.68,0H5.46A2.16,2.16,0,0,0,3.34,1.75L.5,16.6l0,.07c11.06.88,13.55-2.61,11.44-3.29-.62-.2-1.18-.4-1.66-.6-3.07-1.28-3.08-2.55.7-3.95,4.11-1.52,11.4-1.51,12.93-1.49l.91-4.77A2.15,2.15,0,0,0,22.68,0Z"
                        />
                        <path
                          fill="#272727"
                          d="M30.4,40.7a6.24,6.24,0,0,1-2,5.06,8.67,8.67,0,0,1-5.73,1.68,22.47,22.47,0,0,1-3.11-.24,10.84,10.84,0,0,1-2.83-.73l1-3.28a14.46,14.46,0,0,0,2.14.58,13.54,13.54,0,0,0,2.65.27,5.77,5.77,0,0,0,2.83-.52,2,2,0,0,0,.88-1.93,1.79,1.79,0,0,0-.69-1.44A9.1,9.1,0,0,0,22.51,39a6.37,6.37,0,0,1-3-1.54,4.11,4.11,0,0,1-.94-2.94,6.13,6.13,0,0,1,2.11-4.86,8.16,8.16,0,0,1,5.56-1.84,19.07,19.07,0,0,1,5.29.68l-.95,3.34a16,16,0,0,0-4.36-.62,4.79,4.79,0,0,0-2.65.6,2.17,2.17,0,0,0-.9,2A1.58,1.58,0,0,0,23.32,35a8.68,8.68,0,0,0,2.81,1.07,7.15,7.15,0,0,1,3.29,1.67A4.16,4.16,0,0,1,30.4,40.7Z"
                        />
                        <path
                          fill="#272727"
                          d="M33.34,40,34,35.66a8.88,8.88,0,0,1,3.11-5.82,9.78,9.78,0,0,1,6.34-2.06,17.14,17.14,0,0,1,7.36,1.37L48.14,47.06H44.48l.06-1.92a15.71,15.71,0,0,1-3,1.68,7.82,7.82,0,0,1-3.06.62,4.86,4.86,0,0,1-3.18-1,5.43,5.43,0,0,1-1.8-2.65A8.5,8.5,0,0,1,33.34,40ZM40.4,43.7a6.89,6.89,0,0,0,4.16-1.56L46.08,32a10.31,10.31,0,0,0-3.23-.53,4.52,4.52,0,0,0-3,1,5,5,0,0,0-1.55,3.26l-.59,3.8Q37.12,43.69,40.4,43.7Z"
                        />
                        <path
                          fill="#272727"
                          d="M53.21,31.56l.49-3.4h2.62l.36-2.43A7.66,7.66,0,0,1,59,21a6.64,6.64,0,0,1,4.69-1.73,12.25,12.25,0,0,1,3.38.42l-1,3.45A14.18,14.18,0,0,0,64,22.91a2.79,2.79,0,0,0-2,.73,4.27,4.27,0,0,0-1,2.45l-.3,2.07h4.46l-.51,3.4H60.12l-3.59,24H52.22l3.59-24Z"
                        />
                        <path
                          fill="#272727"
                          d="M64.56,39.66l.6-4A11.35,11.35,0,0,1,66,32.88a8,8,0,0,1,1.72-2.52,9.13,9.13,0,0,1,2.77-1.85,9.35,9.35,0,0,1,3.77-.73A7.37,7.37,0,0,1,79,29.22a4.73,4.73,0,0,1,1.8,3.87,6.79,6.79,0,0,1-.7,3.17,5.19,5.19,0,0,1-2.54,2.23,13.13,13.13,0,0,1-5.41.87,22.12,22.12,0,0,1-3.25-.25l-.09.61a3.44,3.44,0,0,0,.67,3,4.15,4.15,0,0,0,3.16,1.05A24.29,24.29,0,0,0,78.28,43l-.14,3.47a23,23,0,0,1-6.5.95,9.67,9.67,0,0,1-3.22-.51A6.23,6.23,0,0,1,66,45.42,5.45,5.45,0,0,1,64.67,43,8.32,8.32,0,0,1,64.56,39.66Zm4.87-4.27-.15,1a16.62,16.62,0,0,0,2.77.26A6.81,6.81,0,0,0,75.4,36a2.57,2.57,0,0,0,1.11-2.42,2.08,2.08,0,0,0-.73-1.69,3.3,3.3,0,0,0-2.13-.61C71.26,31.27,69.85,32.65,69.43,35.39Z"
                        />
                        <path
                          fill="#272727"
                          d="M85.56,28.16h1.67l-.3,3.3A15.72,15.72,0,0,1,90.45,29a9.5,9.5,0,0,1,3.65-1.21l-.28,2A9.87,9.87,0,0,0,90.32,31a15.83,15.83,0,0,0-3.51,2.42l-2,13.68h-2Z"
                        />
                        <path
                          fill="#272727"
                          d="M94.61,40.19,95.37,35a10,10,0,0,1,.77-2.51,7.75,7.75,0,0,1,1.65-2.33,9,9,0,0,1,2.63-1.73,8.63,8.63,0,0,1,3.47-.68,8,8,0,0,1,2.81.49,5.72,5.72,0,0,1,2.16,1.43A5.37,5.37,0,0,1,110.11,32a7.63,7.63,0,0,1,.12,3l-.76,5.16a9.62,9.62,0,0,1-.77,2.51A7.41,7.41,0,0,1,107.05,45a8.9,8.9,0,0,1-2.63,1.73,8.59,8.59,0,0,1-3.47.68A8,8,0,0,1,98.14,47,5.72,5.72,0,0,1,96,45.52a5.25,5.25,0,0,1-1.24-2.29A7.44,7.44,0,0,1,94.61,40.19Zm2.79-5L96.66,40a5,5,0,0,0,.89,4.06,4.55,4.55,0,0,0,3.69,1.5,6,6,0,0,0,4.11-1.5A6.55,6.55,0,0,0,107.46,40l.72-4.86a4.93,4.93,0,0,0-.88-4.06,4.55,4.55,0,0,0-3.69-1.5,6,6,0,0,0-4.13,1.5A6.51,6.51,0,0,0,97.4,35.18Z"
                        />
                        <path
                          fill="#272727"
                          d="M113.66,40.06l.73-4.88a8.46,8.46,0,0,1,2.88-5.39,8.6,8.6,0,0,1,5.75-2,14.69,14.69,0,0,1,3.6.42,10.13,10.13,0,0,1,2.77,1.08l-2.65,17.78H125l.23-2.43a13,13,0,0,1-3.14,2,8,8,0,0,1-3.33.78,4.83,4.83,0,0,1-4.18-2A7.21,7.21,0,0,1,113.66,40.06Zm5.85,5.5a7,7,0,0,0,3-.8,10.4,10.4,0,0,0,2.79-1.93l1.86-12.33a11.1,11.1,0,0,0-4.46-.88,6,6,0,0,0-4.28,1.55,6.82,6.82,0,0,0-2,4.14l-.69,4.6a6,6,0,0,0,.55,4.14A3.54,3.54,0,0,0,119.51,45.56Z"
                        />
                        <path
                          fill="#272727"
                          d="M145.9,47.06h-1.71l.21-2.28a13.77,13.77,0,0,1-3.15,1.92,8.2,8.2,0,0,1-3.3.74,4.81,4.81,0,0,1-4.17-2,7.16,7.16,0,0,1-.95-5.37l.72-4.88a8.46,8.46,0,0,1,2.88-5.39,8.6,8.6,0,0,1,5.75-2,15.17,15.17,0,0,1,2.13.19,9.5,9.5,0,0,1,2.33.68l1.37-9h2Zm-7.23-1.5a7.18,7.18,0,0,0,3-.76,9.89,9.89,0,0,0,2.8-1.88l1.86-12.37a10.78,10.78,0,0,0-4.44-.93,6,6,0,0,0-4.29,1.55,6.93,6.93,0,0,0-2.05,4.14l-.68,4.6a6,6,0,0,0,.55,4.14A3.51,3.51,0,0,0,138.67,45.56Z"
                        />
                      </svg>
                    </div>
                    <h2 className="mb-4 text-center">Sign In</h2>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={loginSchema}
                      onSubmit={(
                        { username, password, remember_me },
                        { setSubmitting }
                      ) => {
                        // dispatch(login({username, password}));
                        console.log(username, password, "data");
                        setSubmitting(true);
                        /* fetch("/api/sessions", {
                                                     method: "POST",
                                                     headers: {"Content-Type": "application/json"},
                                                     body: JSON.stringify({username, password, remember_me})
                                                 }).then(response => {
                                                     const data = response.json();
                                                     if (response.ok && response.status === 200 && data) {
                                                         router.push("/");
                                                         dispatch(getUser(data))
                                                     } else if (response.statusText === "Unauthorized") {
                                                         toast.error("Unauthorized!");
                                                     }
                                                     setSubmitting(false);
                                                 }).catch(error => {
                                                     console.error('An unexpected error happened:', error)
                                                 });*/

                        signIn("credentials", {
                          username,
                          password,
                          // callbackUrl: `${window.location.origin}/`,
                          redirect: false,
                        })
                          .then((value) => {
                            console.log(value, "yryre");
                            if (value.ok && value.status === 200) {
                              router.push("/").catch(console.error);
                              setTimeout((_) => {
                                location.reload();
                              }, 1000);
                            } else {
                              toast.error("Unauthorized!");
                              console.error(value);
                            }
                            setSubmitting(false);
                          })
                          .catch((error) => {
                            setSubmitting(false);
                            console.error(error);
                          });
                      }}
                    >
                      {({
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        touched,
                        isSubmitting,
                      }) => (
                        <Form onSubmit={handleSubmit} noValidate>
                          <Row>
                            <Col lg="12">
                              <Form.Group className="form-group">
                                <FormLabel htmlFor="username" className="">
                                  Username
                                </FormLabel>
                                <Form.Control
                                  type="text"
                                  id="username"
                                  name="username"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.username}
                                  aria-describedby="username"
                                  isInvalid={
                                    errors.username && touched.username
                                  }
                                  placeholder=" "
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.username && touched.username}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col lg="12">
                              <Form.Group className="form-group">
                                <FormLabel htmlFor="password">
                                  Password
                                </FormLabel>
                                <Form.Control
                                  type="password"
                                  id="password"
                                  name="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                  aria-describedby="password"
                                  isInvalid={
                                    errors.password && touched.password
                                  }
                                  placeholder=" "
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.password && touched.password}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col
                              lg="12"
                              className="d-flex justify-content-between"
                            >
                              <Form.Check className="form-check mb-3">
                                <Form.Check.Input
                                  type="checkbox"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                  name="remember_me"
                                  id="customCheck1"
                                />
                                <Form.Check.Label htmlFor="customCheck1">
                                  Remember Me
                                </Form.Check.Label>
                              </Form.Check>
                            </Col>
                          </Row>
                          <div className="d-flex justify-content-center">
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              variant="d-flex justify-content-center align-items-end btn btn-primary px-4 py-2 mt-4"
                            >
                              <span>Sign In</span>
                              {isSubmitting && (
                                <Spinner
                                  as="span"
                                  role="status"
                                  style={{ verticalAlign: "sub" }}
                                  className="mx-1"
                                  aria-hidden="true"
                                  size="sm"
                                  animation="border"
                                />
                              )}
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="sign-bg">
              <svg
                width="280"
                height="230"
                viewBox="0 0 431 398"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <rect
                    x="-157.085"
                    y="193.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -157.085 193.773)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="7.46875"
                    y="358.327"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 7.46875 358.327)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="61.9355"
                    y="138.545"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 61.9355 138.545)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="62.3154"
                    y="-190.173"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 62.3154 -190.173)"
                    fill="#3B8AFF"
                  />
                </g>
              </svg>
            </div>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden position-relative"
          >
            <Image
              src="/assets/images/signinbg.png"
              layout="fill"
              sizes="100%"
              quality={100}
              objectFit="cover"
              alt="sign in background"
            />
          </Col>
        </Row>
      </section>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
