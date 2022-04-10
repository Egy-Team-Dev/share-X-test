import React, { useState } from "react";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import Styles from "../styles/Dashboard.module.scss";
import avatars1 from "../public/assets/images/avatars/01.png";
import avatars2 from "../public/assets/images/741407.png";
import dynamic from "next/dynamic";
import Stars from "../components/Stars";
import DashboardProgress from "../components/dashboardProgress";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import LatestRides from "./LatestRides";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

const chart1 = {
  series: [3000, 1484, 1316, 16],
  options: {
    chart: {
      type: "radialBar",
      redrawOnParentResize: true,
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 360,
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: "#fdfdfd",
          strokeWidth: "97%",
          opacity: 0.2,
          margin: 5,
          dropShadow: {
            enabled: false,
          },
        },

        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          colors: ["#585858"],
          name: {
            show: false,
          },
          value: {
            fontSize: "1.5rem",
            show: true,
            offsetY: 9,
            color: "#585858",
          },
        },
      },
    },
    // colors: [ "#076F73", "#3DAAB0", "#F16C20", "#1AA052", "#70ea6b"],
    labels: ["All", "Running", "Ready", "Late"],
    legend: {
      show: true,
      floating: false,
      fontSize: "13rem",
      position: "right",
      labels: {
        useSeriesColors: false,
        colors: ["#203039"],
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      markers: {
        size: 0,
      },
      itemMargin: {
        vertical: 5,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
const chart2 = {
  series: [
    {
      name: "Total Rides",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Active Rides",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 300,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    colors: ["#3DAAB0", "#F16C20", "#1AA052", "#70ea6b"],
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
const chart3 = {
  series: [
    {
      name: "All users",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "Clients users",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "Renter users",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        30,
        {
          min: 10,
          max: 60,
        }
      ),
    },

    {
      name: "Pendding users",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        10,
        {
          min: 10,
          max: 60,
        }
      ),
    },
  ],
  colors: ["#3DAAB0", "#F16C20", "#1AA052", "#70ea6b"],

  options: {
    chart: {
      height: 350,
      type: "scatter",
      zoom: {
        type: "xy",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      max: 70,
    },
  },
};

const chart5 = {
  series: [
    {
      name: "Total vehicles",
      data: [31, 40, 60, 80, 150, 800, 1400, 2365],
    },
    {
      name: "Active vehicles",
      data: [11, 32, 45, 71, 110, 652, 1241, 1452],
    },
  ],
  colors: ["#3DAAB0", "#F16C20", "#1AA052", "#70ea6b"],

  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
const Data_table = [
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Vehicle Wash",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Vehicle Wash",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Vehicle Wash",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Battery",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Suspen",
    date: "2008/11/28",
  },
];

const cardsData = [
  {
    name: "Total Vehicles",
    color: "danger",
    countStart: 0,
    countEnd: 1000,
    duration: 1,
    iconPath: `M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z`,
  },
  {
    name: "Running Vehicles",
    color: "info",
    countStart: 0,
    countEnd: 652,
    duration: 1,
    iconPath: `M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z`,
  },
  {
    name: "Ready Vehicles",
    color: "warning",
    countStart: 0,
    countEnd: 348,
    duration: 1,
    iconPath: `M268.1 127.91H176c-4.42 0-8 3.58-8 8v240c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-72h72c51.43 0 92.68-44.32 87.57-96.78-4.45-45.71-45.54-79.22-91.47-79.22zm3.9 144h-72v-112h72c30.88 0 56 25.12 56 56s-25.12 56-56 56zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216z`,
  },
  {
    name: "Total Clinets",
    color: "success",
    countStart: 0,
    countEnd: 1000,
    duration: 1,
    iconPath: `M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z`,
  },
];

const Home = () => {
  const [key, setKey] = useState("Cars");

  const { t } = useTranslation("Dashboard");
  return (
    <>
      <Card>
        <Row>
          <Col md="6">
            <Card style={{ height: "calc(100% - 2rem)" }}>
              <Card.Body>
                <h4 className="text-secondary mb-3 fw-normal">
                  General statistics
                </h4>

                <Row className="align-items-center">
                  {cardsData.map(
                    (
                      { name, color, countStart, countEnd, duration, iconPath },
                      id
                    ) => {
                      return (
                        <DashboardProgress
                          key={id}
                          name={name}
                          countStart={countStart}
                          countEnd={countEnd}
                          color={color}
                          iconPath={iconPath}
                        />
                      );
                    }
                  )}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card style={{ height: "calc(100% - 2rem)" }}>
              <Card.Body>
                <h4 className="text-secondary mb-3 fw-normal">
                  Vehicles statistics
                </h4>
                <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="radialBar"
                  height={300}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card style={{ height: "calc(100% - 2rem)" }}>
              <Card.Body>
                <h4 className="text-secondary mb-3 fw-normal">
                  Rides statistics
                </h4>
                <Chart
                  options={chart2.options}
                  series={chart2.series}
                  type="area"
                  height={300}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card style={{ height: "calc(100% - 2rem)" }}>
              <Card.Body>
                <h4 className="text-secondary mb-3 fw-normal">
                  Clients statistics
                </h4>
                <Chart
                  options={chart3.options}
                  series={chart3.series}
                  type="scatter"
                  height={300}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card style={{ height: "calc(100% - 2rem)" }}>
              <Card.Body>
                <h4 className="text-secondary mb-3 fw-normal">
                  Vehicles types statistics
                </h4>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(key) => setKey(key)}
                >
                  <Tab eventKey="Cars" title="Cars">
                    <Chart
                      options={chart5.options}
                      series={chart5.series}
                      type="area"
                      height={300}
                    />
                  </Tab>
                  <Tab eventKey="Scooter" title="Scooter">
                    <Chart
                      options={chart5.options}
                      series={chart5.series}
                      type="area"
                      height={300}
                    />
                  </Tab>
                  <Tab eventKey="Motorcycles" title="Motorcycles">
                    <Chart
                      options={chart5.options}
                      series={chart5.series}
                      type="area"
                      height={300}
                    />
                  </Tab>
                  <Tab eventKey="Bikes" title="Bikes">
                    <Chart
                      options={chart5.options}
                      series={chart5.series}
                      type="area"
                      height={300}
                    />
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
      <LatestRides />
    </>
  );
};

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Dashboard", "main"])),
    },
  };
}
export default Home;

// translation ##################################
