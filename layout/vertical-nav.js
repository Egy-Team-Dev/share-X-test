import React, { useContext } from "react";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
// translation
import { useTranslation } from "next-i18next";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      href="/"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = () => {
  let router = useRouter();
  const { t } = useTranslation("main");
  return (
    <>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
          <Link href="/">
            <a>
              <div
                className={`${
                  router.pathname === "/" ? "active" : ""
                } nav-link`}
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36.04"
                    width="18"
                    style={{ marginLeft: "1px" }}
                    fill="currentColor"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M19.3,18c0-4.44,0-8.89,0-13.34,0-3,1.62-4.62,4.59-4.65q3.78,0,7.56,0C34.37.07,36,1.69,36,4.63Q36,18,36,31.41c0,3-1.63,4.58-4.64,4.61-2.48,0-5,0-7.45,0-3,0-4.59-1.68-4.6-4.65Zm13.91,0V4.6c0-1.41-.35-1.77-1.72-1.77-2.55,0-5.11,0-7.66,0-1.38,0-1.78.42-1.78,1.85q0,13.34,0,26.67c0,1.49.38,1.88,1.85,1.88,2.48,0,5,0,7.45,0,1.53,0,1.84-.32,1.85-1.85Z" />
                        <path d="M16.72,10.63c0,2,0,4.06,0,6.09a4.07,4.07,0,0,1-4.24,4.34q-4.14.09-8.29,0A3.94,3.94,0,0,1,.05,17q-.11-6.4,0-12.8A3.89,3.89,0,0,1,4,.09C6.9,0,9.81,0,12.71.08a4,4,0,0,1,4,4.36C16.73,6.5,16.72,8.56,16.72,10.63ZM2.81,10.56c0,2,0,4.06,0,6.09,0,1.26.38,1.64,1.62,1.64q3.93,0,7.86,0c1.21,0,1.66-.42,1.66-1.64q0-6.07,0-12.17c0-1.21-.44-1.64-1.65-1.65-2.62,0-5.25,0-7.87,0-1.25,0-1.61.39-1.62,1.65C2.8,6.51,2.81,8.53,2.81,10.56Z" />
                        <path d="M8.45,23.71c1.33,0,2.66,0,4,0a4.08,4.08,0,0,1,4.27,4.19c0,1.33,0,2.66,0,4a3.93,3.93,0,0,1-3.75,4c-3,.14-6.09.14-9.13,0A3.78,3.78,0,0,1,.08,32.16a32.3,32.3,0,0,1,0-4.82,3.92,3.92,0,0,1,4-3.63C5.58,23.69,7,23.71,8.45,23.71Zm-.11,9.52h4.09A1.33,1.33,0,0,0,14,31.77c0-1.26.05-2.52,0-3.78a1.4,1.4,0,0,0-1.57-1.55q-4.05,0-8.08,0a1.31,1.31,0,0,0-1.49,1.48q0,1.89,0,3.78c0,1.11.4,1.5,1.53,1.53C5.68,33.26,7,33.23,8.34,33.23Z" />
                      </g>
                    </g>
                  </svg>
                </i>
                <span className="item-name">{t("Dashboard")}</span>
              </div>
            </a>
          </Link>
        </Accordion.Item>
        <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
          <Link href="/track">
            <a>
              <div
                className={`${
                  router.pathname === "/track" ? "active" : ""
                } nav-link`}
              >
                <i className="icon">
                  <svg
                    id="route"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      id="route-2"
                      data-name="route"
                      d="M15.188,12.375H11.25A1.688,1.688,0,0,1,11.25,9h3.375S18,5.238,18,3.375a3.375,3.375,0,0,0-6.75,0c0,1.216,1.438,3.241,2.436,4.5H11.25a2.813,2.813,0,0,0,0,5.625h3.938a1.688,1.688,0,0,1,0,3.375H4.314c1-1.259,2.436-3.284,2.436-4.5a3.375,3.375,0,0,0-6.75,0C0,14.238,3.375,18,3.375,18H15.188a2.813,2.813,0,0,0,0-5.625Zm-2.812-9a2.25,2.25,0,0,1,4.5,0c0,.717-1.058,2.391-2.25,3.881-1.2-1.5-2.25-3.185-2.25-3.881Zm-11.25,9a2.25,2.25,0,0,1,4.5,0c0,.717-1.058,2.391-2.25,3.881C2.18,14.759,1.125,13.071,1.125,12.375Zm2.25-.562a.563.563,0,0,0,0,1.125A.563.563,0,0,0,3.375,11.813Zm11.25-9a.563.563,0,0,0,0,1.125A.563.563,0,0,0,14.625,2.813Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                <span className="item-name">{t("Track")}</span>
              </div>
            </a>
          </Link>
        </Accordion.Item>

        <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
          <Link href="/Vehicles">
            <a>
              <div
                className={`${
                  router.pathname === "/Vehicles" ? "active" : ""
                } nav-link `}
              >
                <i className="icon">
                  <svg
                    id="car"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="13.5"
                    viewBox="0 0 18 13.5"
                  >
                    <path
                      id="car-2"
                      data-name="car"
                      d="M4.246,70.469a1.414,1.414,0,1,0,0,2.809l.356,0c1.378,0,1.584-.707,1.584-1.128A2.045,2.045,0,0,0,4.246,70.469ZM4.6,72.437c-.123,0-.247,0-.356,0-.439,0-.731-.224-.731-.561s.292-.561.731-.561,1.1.5,1.1.841C5.343,72.406,4.972,72.437,4.6,72.437Zm9.149-1.969a2.044,2.044,0,0,0-1.94,1.685c0,.421.206,1.128,1.584,1.128l.356,0a1.414,1.414,0,1,0,0-2.809Zm0,1.965c-.11,0-.233,0-.356,0-.37,0-.74-.032-.74-.284,0-.336.658-.841,1.1-.841s.731.224.731.561S14.19,72.434,13.751,72.434Zm4.036-4.955a1.4,1.4,0,0,0-1.2-.667H14.845l-.284-.87A2.812,2.812,0,0,0,11.887,64H6.11a2.812,2.812,0,0,0-2.674,1.941l-.284.87H1.406A1.406,1.406,0,0,0,.149,68.847l.2.408a1.639,1.639,0,0,0,.6.652,2.758,2.758,0,0,0-.388,1.405v4.5A1.689,1.689,0,0,0,2.249,77.5h.562A1.689,1.689,0,0,0,4.5,75.812V75.25h9v.562A1.689,1.689,0,0,0,15.186,77.5h.562a1.689,1.689,0,0,0,1.687-1.687v-4.5a2.759,2.759,0,0,0-.388-1.406,1.636,1.636,0,0,0,.6-.653l.2-.406A1.4,1.4,0,0,0,17.787,67.479ZM4.506,66.29a1.684,1.684,0,0,1,1.6-1.165h5.777a1.684,1.684,0,0,1,1.6,1.165l.72,2.21H3.786ZM1.358,68.752l-.2-.407a.279.279,0,0,1,.012-.274.274.274,0,0,1,.239-.134h1.38l-.227.7a2.837,2.837,0,0,0-.809.4A.546.546,0,0,1,1.358,68.752Zm2.016,7.061a.563.563,0,0,1-.562.563H2.249a.563.563,0,0,1-.562-.562V75.25H3.374Zm12.937,0a.563.563,0,0,1-.562.563h-.562a.563.563,0,0,1-.562-.562V75.25h1.687Zm0-2.813v1.125H1.687V71.312a1.689,1.689,0,0,1,1.687-1.687H14.623a1.689,1.689,0,0,1,1.687,1.687Zm.532-4.655-.2.406a.546.546,0,0,1-.392.28,2.832,2.832,0,0,0-.809-.4l-.227-.7h1.38a.274.274,0,0,1,.239.134.277.277,0,0,1,.012.274Z"
                      transform="translate(0.001 -64)"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                <span className="item-name">{t("Vehicles")}</span>
              </div>
            </a>
          </Link>
        </Accordion.Item>
        <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
          <Link href="/Users">
            <a>
              <div
                className={`${
                  router.pathname === "/Users" ? "active" : ""
                } nav-link `}
              >
                <i className="icon">
                  <svg
                    id="users"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12.6"
                    viewBox="0 0 18 12.6"
                  >
                    <path
                      id="users-2"
                      data-name="users"
                      d="M15.3,37.4a2.25,2.25,0,1,0-2.25-2.25A2.249,2.249,0,0,0,15.3,37.4Zm0-3.6a1.35,1.35,0,1,1-1.35,1.35A1.35,1.35,0,0,1,15.3,33.8ZM9,38.3a3.15,3.15,0,1,0-3.15-3.15A3.148,3.148,0,0,0,9,38.3Zm0-5.4a2.25,2.25,0,1,1-2.25,2.25A2.253,2.253,0,0,1,9,32.9Zm6.862,5.4H14.737a2.035,2.035,0,0,0-1.156.363,3.812,3.812,0,0,1,.714.63,1.119,1.119,0,0,1,.442-.093h1.125A1.3,1.3,0,0,1,17.1,40.55a.45.45,0,1,0,.9,0A2.2,2.2,0,0,0,15.862,38.3ZM2.7,37.4A2.25,2.25,0,1,0,.45,35.15,2.249,2.249,0,0,0,2.7,37.4Zm0-3.6a1.35,1.35,0,1,1-1.35,1.35A1.35,1.35,0,0,1,2.7,33.8Zm8.553,5.063c-.939,0-1.173.338-2.253.338s-1.313-.338-2.253-.338a3.1,3.1,0,0,0-2.6,1.319A3.223,3.223,0,0,0,3.6,41.99v1.26A1.35,1.35,0,0,0,4.95,44.6h8.1a1.35,1.35,0,0,0,1.35-1.35V41.99a3.223,3.223,0,0,0-.551-1.808,3.1,3.1,0,0,0-2.6-1.319ZM13.5,43.25a.451.451,0,0,1-.45.45H4.95a.451.451,0,0,1-.45-.45V41.99a2.337,2.337,0,0,1,.4-1.305,2.2,2.2,0,0,1,1.848-.923c.771,0,1.046.338,2.256.338s1.485-.338,2.253-.338a2.2,2.2,0,0,1,1.848.923,2.337,2.337,0,0,1,.4,1.305v1.26ZM4.418,38.663A2.048,2.048,0,0,0,3.263,38.3H2.138A2.2,2.2,0,0,0,0,40.55a.45.45,0,1,0,.9,0A1.3,1.3,0,0,1,2.138,39.2H3.262a1.119,1.119,0,0,1,.442.093,3.9,3.9,0,0,1,.714-.63Z"
                      transform="translate(0 -32)"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                <span className="item-name">{t("Users")}</span>
              </div>
            </a>
          </Link>
        </Accordion.Item>
        <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
          <Link href="/Reports">
            <a>
              <div
                className={`${
                  router.pathname === "/Reports" ? "active" : ""
                } nav-link `}
              >
                <i className="icon">
                  <svg
                    className="mx-1"
                    id="file-chart-pie"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.5"
                    height="18"
                    viewBox="0 0 13.5 18"
                  >
                    <path
                      id="file-chart-pie-2"
                      data-name="file-chart-pie"
                      d="M13,3.445,10.055.5A1.687,1.687,0,0,0,8.864,0H1.687A1.693,1.693,0,0,0,0,1.691V16.313A1.688,1.688,0,0,0,1.687,18H11.813A1.688,1.688,0,0,0,13.5,16.313V4.64A1.7,1.7,0,0,0,13,3.445Zm-4-2.3a.553.553,0,0,1,.26.148L12.21,4.242a.553.553,0,0,1,.148.26H9Zm3.374,15.167a.564.564,0,0,1-.562.563H1.687a.564.564,0,0,1-.562-.562V1.691a.567.567,0,0,1,.563-.566H7.876V4.784a.84.84,0,0,0,.844.841h3.656ZM6.75,6.75v4.5h4.5s0,0,0,0a4.5,4.5,0,0,0-4.5-4.5ZM7.875,8.068a3.392,3.392,0,0,1,2.057,2.057H7.875ZM6.188,14.625a2.812,2.812,0,0,1-.562-5.568V7.932a3.929,3.929,0,1,0,4.443,4.443H8.943A2.817,2.817,0,0,1,6.188,14.625Z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
                <span className="item-name">{t("Bookings")}</span>
              </div>
            </a>
          </Link>
        </Accordion.Item>
        <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
          <Link href="/Requests">
            <a>
              <div
                className={`${
                  router.pathname === "/Requests" ? "active" : ""
                } nav-link `}
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="18"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25 1c-2.872 0-5.68.502-8.348 1.492l.696 1.875A21.921 21.921 0 0 1 25 3c12.131 0 22 9.869 22 22s-9.869 22-22 22S3 37.131 3 25a22.001 22.001 0 0 1 8-16.958V15h2V5H3v2h6.126A24.005 24.005 0 0 0 1 25c0 13.233 10.767 24 24 24s24-10.767 24-24S38.233 1 25 1z" />
                    <path d="M19 33h-2v2h16v-2h-2v-3.414L26.414 25 31 20.414V17h2v-2H17v2h2v3.414L23.586 25 19 29.586V33zm2-13.414V17h8v2.586l-4 4-4-4zm4 6.828l4 4V33h-8v-2.586l4-4zM19 39h2v2h-2zM24 39h2v2h-2zM29 39h2v2h-2z" />
                  </svg>
                </i>
                <span className="item-name">{t("Requests")}</span>
              </div>
            </a>
          </Link>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default VerticalNav;
