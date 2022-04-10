import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../lib/slices/vehicleProcessStatus";
// translation
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { colorStatus } from "../helpers/helpers";
import { initializeApp } from "firebase/app";
import { getDatabase, onDisconnect, onValue, ref } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://saferoad-sharex.firebaseio.com",
};

export default function Reports() {
  const { t } = useTranslation("main");
  const [ftoken, setFToken] = useState();
  const [Data, setData] = useState();
  const [Vehicels, setVehicels] = useState();
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState();
  const [FilterData, setFilterData] = useState();
  const [key, setKey] = useState(null);
  const [fbKey, setFbKey] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const scheduleObj = useRef();

  const token = useSelector((state) => state?.auth);

  // useEffect(() => {
  //   setFToken(token);
  // }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://sharex-saferoad.herokuapp.com/bookings",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJBYmR1YWxsYWhAZ21haWwuY29tIiwicGhvbmUiOiIwMTIwNDQ4NDQzNiIsInVzZXJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgwMzkxMzMsImV4cCI6MTY1MDYzMTEzM30.pHgq9NlsKL6BAYauV-PWs1a3BnneHqbC0rp5Ezz-rUA`,
          },
        }
      );

      if (response.status === 200 && response.data?.length > 0) {
        const result = response.data;
        setData(result);
      } else {
        dispatch(Loading(false));
      }
    };
    fetchData();
  }, [dispatch, Data]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axios.get(
        "https://sharex-saferoad.herokuapp.com/Vehicle",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJBYmR1YWxsYWhAZ21haWwuY29tIiwicGhvbmUiOiIwMTIwNDQ4NDQzNiIsInVzZXJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgwMzkxMzMsImV4cCI6MTY1MDYzMTEzM30.pHgq9NlsKL6BAYauV-PWs1a3BnneHqbC0rp5Ezz-rUA`,
          },
        }
      );
      if (response.status === 200 && response.data.vehicle?.length > 0) {
        const result = response.data.vehicle;

        setVehicels(result);
      } else {
        dispatch(Loading(false));
      }
    };
    fetchVehicles();
  }, [dispatch, Vehicels]);

  const getVehiclesByAccount = (accountId) => {
    const App = initializeApp(firebaseConfig, "mu");
    const db = getDatabase(App);
    onValue(
      ref(db, "/actions/" + accountId),
      (snapshot) => {
        setFbKey(snapshot.val().status);
      },
      { onlyOnce: true }
    );
    return fbKey;
  };

  const header = (props) => {
    const openModalHandler = (data) => {
      setOpen(!open);
      setUserData(data);
    };

    return (
      <div>
        {props.elementType === "cell" ? (
          <div className="e-cell-header e-popup-header">
            <div className="e-header-icon-wrapper">
              <button
                className="btn"
                type="button"
                onClick={() => console.log(props, "tello")}
              >
                <svg
                  height="25"
                  width="25"
                  fill="#e9ecef"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z" />
                </svg>
              </button>
            </div>
            <h4
              style={{
                color: "#e9ecef",
                marginLeft: "1rem",
                paddingBottom: "1rem",
                fontWeight: "500",
              }}
            >
              {props.UserName}
            </h4>
          </div>
        ) : (
          <div
            className="e-event-header e-popup-header"
            style={{ backgroundColor: "#246c66" }}
          >
            <div className="e-header-icon-wrapper">
              <button
                className="btn"
                type="button"
                onClick={() => openModalHandler(props)}
              >
                <svg
                  height="25"
                  width="25"
                  fill="#e9ecef"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z" />
                </svg>
              </button>
            </div>
            <h4
              style={{
                color: "#e9ecef",
                marginLeft: "1rem",
                paddingBottom: "1rem",
                fontWeight: "500",
              }}
            >
              {props.UserName}
            </h4>
            <h6
              style={{
                color: "#e9ecef",
                marginLeft: "1rem",
                paddingBottom: "1rem",
                fontWeight: "500",
              }}
            >
              <span>VehicleID : </span>
              {props.VehicleID}
            </h6>
          </div>
        )}
        <button
          className="btn BMsgBtn"
          type="button"
          onClick={() => openModalHandler(props)}
        >
          <svg
            height="25"
            width="25"
            style={{ marginRight: "1rem" }}
            fill=" #232d42"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z" />
          </svg>
          <span>Send a Message to {props.UserName}</span>
        </button>
      </div>
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      body: body,
      title: title,
    };

    const sendMassage = async () => {
      const response = await axios.post(
        `https://sharex-saferoad.herokuapp.com/notify/${userData?.UserID}`,
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
        toast("This massage sent succefully", {
          autoClose: 2000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          type: "success",
          position: "top-center",
        });
        setOpen(!open);
        setTitle("");
        setBody("");
      } else {
        dispatch(Loading(false));
      }
    };
    sendMassage();
  };

  const filterHandler = (VehicleID) => {
    setFilterData(Data.filter((vehicle) => vehicle.VehicleID === VehicleID));
  };

  useEffect(() => {
    console.log(FilterData, "mosmos");
  }, [FilterData]);

  const allDataHandler = () => {
    setFilterData();
  };

  return (
    <>
      <Row className="position-relative">
        <Col sm="9">
          <Card>
            <Card.Body>
              <ScheduleComponent
                eventSettings={{
                  dataSource: FilterData ? FilterData : Data,
                  fields: {
                    subject: {
                      name: "Status",
                      default: "New Book",
                    },
                    startTime: { name: "StrDate" },
                    endTime: { name: "EndDate" },
                    location: { name: "strAddress" },
                    description: { name: "Status" },
                  },
                }}
                readonly={true}
                id="schedule"
                ref={scheduleObj}
                quickInfoTemplates={{ header: header }}
              >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
              </ScheduleComponent>
            </Card.Body>
            <div
              style={{
                width: "100%",
                height: "100vh",
                zIndex: 1000,
                margin: "auto",
                position: "fixed",
                left: "0",
                top: "0",
                display: open ? "flex" : "none",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.8)",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  width: "30%",
                  height: "80vh",
                  zIndex: 1000,
                  margin: "auto",
                  position: "relative",
                  display: open ? "flex" : "none",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: " #246c66",
                  borderRadius: "5px",
                }}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "5px",
                    background: "none",
                    border: "none",
                    outline: "none",
                  }}
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 320 512"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
                  </svg>
                </button>

                <form
                  style={{
                    width: "85%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  onSubmit={(e) => submitHandler(e)}
                >
                  <h4 style={{ color: "#fff" }}>Send a Message</h4>
                  <div className="mb-3 mt-4">
                    <p htmlFor="recipient-name" className="col-form-label">
                      Subject:
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <p htmlFor="message-text" className="col-form-label">
                      Message:
                    </p>
                    <textarea
                      className="form-control"
                      id="message-text"
                      style={{ maxHeight: "200px" }}
                      onChange={(e) => setBody(e.target.value)}
                      value={body}
                      required
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-warning"
                    style={{
                      padding: "0.4rem 1rem",
                      marginTop: "1rem",
                      fontWeight: 500,
                    }}
                    type="submit"
                  >
                    Send
                    <svg
                      className="feather feather-send"
                      style={{ marginLeft: "0.5rem" }}
                      height="18"
                      width="18"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="22" x2="11" y1="2" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="3">
          <Card
            style={{
              minHeight: "100vh",
              paddingBottom: "3rem",
              paddingTop: "1rem",
              backgroundColor: "rgb(36, 108, 102)",
            }}
          >
            <h4
              style={{
                color: "white",
                marginBottom: "1rem",
                paddingLeft: "1rem",
              }}
            >
              All Vehicles
            </h4>

            {Vehicels?.map((v) => (
              <div key={v.VehicleID}>
                <button
                  title={v?.Status}
                  className="vBtn"
                  onClick={() => filterHandler(v.VehicleID)}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: colorStatus(v?.Status),
                      marginRight: "10px",
                    }}
                  ></span>
                  <span>
                    {v.name}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        marginLeft: "0.5rem",
                        backgroundColor: "yellow",
                        color: "#000",
                      }}
                    >
                      ({v.Status})
                    </span>
                  </span>
                </button>
              </div>
            ))}
            {Vehicels && (
              <button
                className="allVBtn"
                style={{
                  width: "85%",
                  margin: "auto",
                  border: "none",
                  backgroundColor: "gold",
                  outline: "none",
                  marginTop: "3rem",
                  borderRadius: "5px",
                  padding: "5px 0px",
                  color: "#000",
                  fontWeight: 600,
                }}
                onClick={allDataHandler}
              >
                Get All Books ({Data?.length})
              </button>
            )}
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
