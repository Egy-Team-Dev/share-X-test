import React from "react";
//Count-up
import CountUp from "react-countup";
//progressbar
import Progress from "../components/progress.js";
// translation
import { useTranslation } from "next-i18next";

const DashboardV = ({
  name = ["one"],
  countStart = [0],
  countEnd = [20],
  duration = 1,
}) => {
  const { t } = useTranslation("Dashboard");
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        {name.map((ele, i) => (
          <div
            key={i}
            className="d-flex align-items-center justify-content-between w-100"
          >
            <span>
              <b>{t(ele)}</b>
            </span>
            <div className="mt-2 mx-5">
              <h2 className="counter">
                <CountUp
                  start={countStart[i]}
                  end={countEnd[i]}
                  duration={duration}
                />
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-2"></div>
    </>
  );
};
export default DashboardV;
