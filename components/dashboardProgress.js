import React from "react";
//Count-up
import CountUp from "react-countup";
//progressbar
// import Progress from "../components/progress.js";
// translation
import { useTranslation } from "next-i18next";
import { Card, Col } from "react-bootstrap";

const DashboardProgress = ({
  name,
  countStart,
  countEnd,
  duration = 1,
  iconPath,
  color,
}) => {
  const { t } = useTranslation("Dashboard");
  return (
    <>
      <Col lg="6">
        <Card className={`bg-soft-${color}`}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div className={`bg-soft-${color} rounded p-1 d-flex align-items-center justify-content-center`} style={{width:"60px", height:"60px"}}>
                <svg width="36px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" >
                  <path fill="currentColor" d={iconPath} />
                </svg>
              </div>
              <div className="text-end">
                <h2 className={`counter text-${color}`}>
                  <CountUp
                    start={countStart}
                    end={countEnd}
                    duration={duration}
                  />
                </h2>
                {name}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default DashboardProgress;
