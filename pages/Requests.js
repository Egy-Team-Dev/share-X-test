import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../lib/slices/vehicleProcessStatus";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/loader";

export default function Requests() {
  const { t } = useTranslation("main");
  const dispatch = useDispatch();
  const [Data, setData] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://sharex-saferoad.herokuapp.com/bookings/pending",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJBYmR1YWxsYWhAZ21haWwuY29tIiwicGhvbmUiOiIwMTIwNDQ4NDQzNiIsInVzZXJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgwMzkxMzMsImV4cCI6MTY1MDYzMTEzM30.pHgq9NlsKL6BAYauV-PWs1a3BnneHqbC0rp5Ezz-rUA`,
          },
        }
      );

      if (response.status === 200 && response.data?.penBooks.length > 0) {
        const result = response?.data?.penBooks;
        setData(result);
      } else {
        dispatch(Loading(false));
      }
    };
    //console.log(Data, "pow");
    fetchData();
  }, [dispatch, Data, load]);

  const acceptHandler = (item) => {
    const data = {
      BookingID: item.BookingID,
      VehicleID: item.VehicleID,
      StrDate: item.StrDate,
      StrMilage: item.StrMilage,
      StrGasLevel: item.StrGasLevel,
      StrLat: item.StrLat,
      StrLng: item.StrLng,
      EndDate: item.EndDate,
      EndMilage: item.EndMilage,
      EndGasLevel: item.EndGasLevel,
      EndLat: item.EndLat,
      EndLng: item.EndLng,
      Status: "booked",
      Details: item.Details,
      CreateDate: item.CreateDate,
    };
    setLoad(true);
    const acceptData = async () => {
      const response = await axios.put(
        `https://sharex-saferoad.herokuapp.com/bookings/${item.BookingID}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJBYmR1YWxsYWhAZ21haWwuY29tIiwicGhvbmUiOiIwMTIwNDQ4NDQzNiIsInVzZXJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgwMzkxMzMsImV4cCI6MTY1MDYzMTEzM30.pHgq9NlsKL6BAYauV-PWs1a3BnneHqbC0rp5Ezz-rUA`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response);
        setLoad(false);
        toast("This Vehicel booked succefully", {
          autoClose: 2000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          type: "success",
          position: "top-center",
        });
        setData(Data.filter((i) => i.BookingID !== item.BookingID));
      } else {
        dispatch(Loading(false));
      }
    };
    const data2 = {
      body: `${item.UserName} , Your Booking from ${item.StrDate.replace(
        "T",
        " "
      ).replace(".000Z", "")} to ${item.EndDate.replace("T", " ").replace(
        ".000Z",
        ""
      )} has been Accepted`,
      title: "Booking Response",
    };

    const sendMassage = async () => {
      const response = await axios.post(
        `https://sharex-saferoad.herokuapp.com/notify/${item?.UserID}`,
        data2,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJBYmR1YWxsYWhAZ21haWwuY29tIiwicGhvbmUiOiIwMTIwNDQ4NDQzNiIsInVzZXJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgwMzkxMzMsImV4cCI6MTY1MDYzMTEzM30.pHgq9NlsKL6BAYauV-PWs1a3BnneHqbC0rp5Ezz-rUA`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response, "send");
        // toast("This massage sent succefully", {
        //   autoClose: 2000,
        //   pauseOnFocusLoss: false,
        //   pauseOnHover: false,
        //   type: "success",
        //   position: "top-center",
        // });
        // setOpen(!open);
        // setTitle("");
        // setBody("");
      } else {
        dispatch(Loading(false));
      }
    };
    acceptData();
    sendMassage();
  };

  const rejectHandler = (item) => {
    const data = {
      BookingID: item.BookingID,
      VehicleID: item.VehicleID,
      StrDate: item.StrDate,
      StrMilage: item.StrMilage,
      StrGasLevel: item.StrGasLevel,
      StrLat: item.StrLat,
      StrLng: item.StrLng,
      EndDate: item.EndDate,
      EndMilage: item.EndMilage,
      EndGasLevel: item.EndGasLevel,
      EndLat: item.EndLat,
      EndLng: item.EndLng,
      Status: "canceled",
      Details: item.Details,
      CreateDate: item.CreateDate,
    };
    setLoad(true);
    const rejectData = async () => {
      const response = await axios.put(
        `https://sharex-saferoad.herokuapp.com/bookings/${item.BookingID}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJBYmR1YWxsYWhAZ21haWwuY29tIiwicGhvbmUiOiIwMTIwNDQ4NDQzNiIsInVzZXJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgwMzkxMzMsImV4cCI6MTY1MDYzMTEzM30.pHgq9NlsKL6BAYauV-PWs1a3BnneHqbC0rp5Ezz-rUA`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response);
        setLoad(false);
        toast("This Vehicel canceled succefully", {
          autoClose: 2000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          type: "success",
          position: "top-center",
        });
        setData(Data.filter((i) => i.BookingID !== item.BookingID));
      } else {
        dispatch(Loading(false));
      }
    };
    const data2 = {
      body: `${item.UserName} , Your Booking from ${item.StrDate.replace(
        "T",
        " "
      ).replace(".000Z", "")} to ${item.EndDate.replace("T", " ").replace(
        ".000Z",
        ""
      )} has been Rejected`,
      title: "Booking Response",
    };

    const sendMassage = async () => {
      const response = await axios.post(
        `https://sharex-saferoad.herokuapp.com/notify/${item?.UserID}`,
        data2,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJBYmR1YWxsYWhAZ21haWwuY29tIiwicGhvbmUiOiIwMTIwNDQ4NDQzNiIsInVzZXJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgwMzkxMzMsImV4cCI6MTY1MDYzMTEzM30.pHgq9NlsKL6BAYauV-PWs1a3BnneHqbC0rp5Ezz-rUA`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response, "send");
        // toast("This massage sent succefully", {
        //   autoClose: 2000,
        //   pauseOnFocusLoss: false,
        //   pauseOnHover: false,
        //   type: "success",
        //   position: "top-center",
        // });
        // setOpen(!open);
        // setTitle("");
        // setBody("");
      } else {
        dispatch(Loading(false));
      }
    };

    rejectData();
    sendMassage();
  };

  return (
    <>
      <Row>
        <Col sm="12" className="mb-5">
          <Card className="h-100 min-vh-100">
            <Card.Body>
              <h4 className="text-secondary mb-3 fw-normal">Requests</h4>

              <div>
                {!load
                  ? Data?.map((client, i) => (
                      <Card
                        key={client.BookingID}
                        className="bg-soft-danger m-1"
                      >
                        <Card.Body>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <img width={35} src="assets/images/cars/0.png" />
                            </div>
                            <div
                              style={{
                                width: "100px",
                                fontSize: "0.7rem",
                              }}
                            >
                              {client.UserName}
                            </div>

                            <div>{client.VehicleID}</div>

                            <div
                              style={{
                                width: "100px",
                                fontSize: "0.7rem",
                              }}
                            >
                              {client.StrDate.replace("T", " ").replace(
                                ".000Z",
                                ""
                              )}
                            </div>

                            <div
                              style={{
                                width: "100px",
                                fontSize: "0.7rem",
                              }}
                            >
                              {client.EndDate.replace("T", " ").replace(
                                ".000Z",
                                ""
                              )}
                            </div>

                            <div
                              style={{
                                width: "150px",
                                fontSize: "0.7rem",
                              }}
                            >
                              {client.strAddress}
                            </div>

                            <div
                              style={{
                                width: "150px",
                                fontSize: "0.7rem",
                              }}
                            >
                              {client.endAddress}
                            </div>

                            <div>
                              {" "}
                              <span
                                className="bg-warning text-light px-3 py-1"
                                style={{ borderRadius: "15px" }}
                              >
                                {client.Status}
                              </span>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {" "}
                              <Button
                                className="bg-success text-light px-3 py-1"
                                style={{
                                  borderRadius: "5px",
                                  outline: "none",
                                  border: "none",
                                  width: "100px",
                                  marginBottom: "1rem",
                                }}
                                onClick={() => acceptHandler(client)}
                              >
                                <svg
                                  style={{ marginRight: "0.3rem" }}
                                  height="20"
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="#fff"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M10,13.5857864 L15.2928932,8.29289322 L16.7071068,9.70710678 L10,16.4142136 L6.29289322,12.7071068 L7.70710678,11.2928932 L10,13.5857864 Z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                Accept
                              </Button>{" "}
                              <Button
                                className="bg-danger text-light px-3 py-1"
                                style={{
                                  borderRadius: "5px",
                                  outline: "none",
                                  border: "none",
                                  width: "100px",
                                  fontSize: "0.8rem",
                                  fontWeight: "600",
                                }}
                                onClick={() => rejectHandler(client)}
                              >
                                <svg
                                  style={{ marginRight: "0.3rem" }}
                                  height="20"
                                  width="20"
                                  fill="#fff"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.96810063,6.38231419 C3.73647287,7.92198502 3,9.87498629 3,12 C3,16.9705627 7.02943725,21 12,21 C14.1250137,21 16.078015,20.2635271 17.6176858,19.0318994 L4.96810063,6.38231419 Z M6.38231419,4.96810063 L19.0318994,17.6176858 C20.2635271,16.078015 21,14.1250137 21,12 C21,7.02943725 16.9705627,3 12,3 C9.87498629,3 7.92198502,3.73647287 6.38231419,4.96810063 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                Reject
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    ))
                  : null}

                {Data?.length === 0 && load ? (
                  <h4 style={{ textAlign: "center" }}>No Requests yet ..</h4>
                ) : (
                  <Loader />
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </>
  );
}
// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["main"])),
    },
  };
}
// translation ##################################
