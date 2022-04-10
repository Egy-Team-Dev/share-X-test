import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import avatars1 from "../public/assets/images/saferoad_logo_icon.svg";
// import avatars2 from "../public/assets/images/741407.png";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../lib/slices/toggleSidebar";
import { toggleHead } from "../lib/slices/toggle-header";
import { darkMode, changeLanguage } from "../lib/slices/config";

// translation
import { useTranslation } from "next-i18next";
import Styles from "../styles/WidgetMenu.module.scss";
import { signOut } from "next-auth/client";

const Header = () => {
  const dispatch = useDispatch();
  const { config, ToggleHeader, auth } = useSelector((state) => state);
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
    localStorage.clear();
  };

  const { i18n, t } = useTranslation("main");
  useEffect(
    (_) => {
      config.darkMode
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    },
    [config.darkMode]
  );
  const toggleDarkMode = () => {
    dispatch(darkMode());
    document.body.classList.toggle("dark");
  };
  const [state, setState] = useState(config.language);
  const handleLanguage = async () => {
    console.log(state);
    setState(state === "en" ? "ar" : "en");
    await i18n.changeLanguage(state);
    dispatch(changeLanguage(state === "en" ? "ar" : "en"));
    console.log(state);
  };

  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        className="nav iq-navbar py-0 py-xl-2"
      >
        <Container fluid className="navbar-inner">
          <div className="navbar-brand mx-5">
            {/*<Image src="/assets/images/saferoad_logo_dark.svg" width="150" height="80px"/>*/}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="45px"
              viewBox="0 0 512.97 120.69"
            >
              <defs>
                <style>
                  {
                    ".cls-1{fill:#0d4355}.cls-2{fill:#fff}.cls-3{fill:none;stroke:#fff;stroke-miterlimit:10}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <rect
                    className="cls-1"
                    y={6}
                    width={114.69}
                    height={114.69}
                    rx={12.63}
                  />
                  <path
                    className="cls-2"
                    d="M49.91 64.1L36.74 27.21 49.78 27.21 59.67 54.57 81.3 26.39 77.99 23.85 61 45.97 52.71 23.03 30.81 23.03 45.2 63.34 20.34 95.09 16.79 92.31 17.92 101.58 27.18 100.45 23.63 97.67 49.91 64.1z"
                  />
                  <path
                    className="cls-2"
                    d="M94.33 31.63L97.91 34.37 96.69 25.12 87.44 26.33 91.02 29.08 66.96 60.39 80.54 99.48 67.6 99.48 57.3 69.96 33.48 100.28 36.76 102.86 55.87 78.54 64.63 103.66 86.41 103.66 71.64 61.15 94.33 31.63z"
                  />
                  <path className="cls-3" d="M54.39 58.06L53.72 56.18" />
                  <path
                    strokeDasharray="3.84 1.92"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit={10}
                    d="M53.07 54.37L45.65 33.56"
                  />
                  <path className="cls-3" d="M45.33 32.66L44.65 30.77" />
                  <path className="cls-3" d="M72.97 95.82L72.31 93.94" />
                  <path
                    strokeDasharray="3.94 1.97"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit={10}
                    d="M71.67 92.08L64.21 70.69"
                  />
                  <path className="cls-3" d="M63.88 69.76L63.22 67.87" />
                  <g id="Group_37248" data-name="Group 37248">
                    <path
                      id="Path_32"
                      data-name="Path 32"
                      className="cls-1"
                      d="M154.39 114.69a56.67 56.67 0 01-11.69-1.09 36.66 36.66 0 01-9.2-3.2V98.69a56 56 0 009.39 3.86 38.14 38.14 0 0011.62 1.63 30.67 30.67 0 007.39-.87 19.27 19.27 0 006.25-2.72 13.37 13.37 0 004.29-4.71 13.7 13.7 0 001.56-6.73 12.29 12.29 0 00-1.5-6.15 18.51 18.51 0 00-4.59-5.07 64.72 64.72 0 00-7.91-5.26 67.44 67.44 0 01-8-5.8 23.34 23.34 0 01-5.76-7.22 21.25 21.25 0 01-2.15-9.92 25 25 0 012.26-10.87 23.7 23.7 0 016.27-8.12 27.67 27.67 0 019.38-5.07A36.8 36.8 0 01173.41 24a47.57 47.57 0 0112.23 1.42 54.55 54.55 0 0110.23 3.89l-4.59 10.09A46.53 46.53 0 00183 36a33 33 0 00-9.57-1.4 22.26 22.26 0 00-6.43.91 15 15 0 00-5.25 2.75 12.73 12.73 0 00-3.51 4.46 14.22 14.22 0 00-1.24 6.16 12.45 12.45 0 001.42 6.25 14.85 14.85 0 004.19 4.56c1.85 1.37 4.13 2.86 6.82 4.47a69.78 69.78 0 019.12 6.4 24.33 24.33 0 016 7.4A21.67 21.67 0 01186.69 88a26.56 26.56 0 01-2.42 11.71 22.53 22.53 0 01-6.76 8.33 29.87 29.87 0 01-10.23 5 47.17 47.17 0 01-12.89 1.66"
                    />
                    <path
                      id="Path_33"
                      data-name="Path 33"
                      className="cls-1"
                      d="M194.19 107.71l17.89-84.38a4.78 4.78 0 014.66-3.79H219a4.78 4.78 0 014.78 4.78 5 5 0 01-.11 1l-3.61 16.54q-.49 2.65-1.25 5.61t-1.56 5.85q-.82 2.91-1.54 5.49h.54a54.54 54.54 0 015.55-6.12 27.56 27.56 0 017.2-4.9 21.06 21.06 0 019.14-1.93 19.2 19.2 0 019.12 2 13.4 13.4 0 015.74 5.85 20.83 20.83 0 012 9.6 35.44 35.44 0 01-.36 4.83c-.24 1.69-.55 3.46-.91 5.31L246 109.7a4.78 4.78 0 01-4.67 3.78H239a4.78 4.78 0 01-4.78-4.78 5.54 5.54 0 01.1-1l7.48-35.34q.54-2.53.78-4.44a28.88 28.88 0 00.25-3.35 9.42 9.42 0 00-2.06-6.57 8.29 8.29 0 00-6.46-2.26 15.67 15.67 0 00-9 3.17A29.44 29.44 0 00217 68.5a55.31 55.31 0 00-5.86 16.12l-5.3 25.07a4.78 4.78 0 01-4.67 3.79h-2.31a4.79 4.79 0 01-4.77-4.79 4.6 4.6 0 01.11-1"
                    />
                    <path
                      id="Path_34"
                      data-name="Path 34"
                      className="cls-1"
                      d="M281.51 114.69a16.7 16.7 0 01-15.88-10.26 31 31 0 01-2.35-12.86 62.48 62.48 0 011.51-13.83 57.6 57.6 0 014.31-12.5 42.83 42.83 0 016.77-10.17 29.91 29.91 0 018.93-6.86 23.84 23.84 0 0110.72-2.47 17.83 17.83 0 017.72 1.57 16.5 16.5 0 015.49 4.2 21.12 21.12 0 013.51 5.71h.6l2.6-7.12a4.77 4.77 0 019.16 2.62l-12 57a4.78 4.78 0 01-4.68 3.79h-.08a4.78 4.78 0 01-4.84-4.81 4.44 4.44 0 010-.63l.85-6.36h-.48a48.28 48.28 0 01-6 6.4 28.78 28.78 0 01-7.31 4.77 20.51 20.51 0 01-8.63 1.81m4.23-9.9a13.88 13.88 0 008.63-3.29 30.85 30.85 0 007.51-8.85 45.74 45.74 0 005-12.38 42.14 42.14 0 001.2-6.09 50.54 50.54 0 00.3-5.5 14 14 0 00-3-9.32 10.24 10.24 0 00-8.27-3.6 13.24 13.24 0 00-6.95 2 21.43 21.43 0 00-5.91 5.4 35.41 35.41 0 00-4.56 7.94 51.23 51.23 0 00-3 9.75 54 54 0 00-1 10.69q0 6.52 2.65 9.9a9 9 0 007.49 3.38"
                    />
                    <path
                      id="Path_35"
                      data-name="Path 35"
                      className="cls-1"
                      d="M328.25 107.71l12.09-57A4.78 4.78 0 01345 47h.38a4.76 4.76 0 014.77 4.78 4.89 4.89 0 010 .54l-.84 7.42h.6a70.07 70.07 0 015.56-6.82 24.85 24.85 0 016.67-5.17 18 18 0 018.48-2 29.23 29.23 0 013.5.21 23.41 23.41 0 013.32.63l-2.66 11.11a25.81 25.81 0 00-3-.57 23.09 23.09 0 00-3.21-.22 15.88 15.88 0 00-7.57 1.88 24.3 24.3 0 00-7.17 6.06 37.1 37.1 0 00-5.1 8.33 47.89 47.89 0 00-3.2 9.81l-5.66 26.7a4.78 4.78 0 01-4.67 3.79h-2.31a4.8 4.8 0 01-4.67-5.77"
                    />
                    <path
                      id="Path_36"
                      data-name="Path 36"
                      className="cls-1"
                      d="M423.91 50.09c-3.31-2.91-8.17-4.37-14.62-4.37a27.42 27.42 0 00-14.35 3.76 34.24 34.24 0 00-10.81 10 48.23 48.23 0 00-6.8 14A54.1 54.1 0 00375 89.44a28.29 28.29 0 003 13.69 20.56 20.56 0 008.52 8.61 23.88 23.88 0 007 2.38l7-9.14a13.23 13.23 0 01-9.63-4.15c-2.43-2.78-3.67-6.62-3.67-11.48 0-.71 0-1.41.05-2.21s.08-1.46.17-2.07h2.47a76.68 76.68 0 0017.36-1.73 38.59 38.59 0 0012.09-4.85 22.42 22.42 0 003.64-2.92 16.62 16.62 0 003.49-4.46 1.09 1.09 0 00.14-.31 18.34 18.34 0 002.2-9 14.8 14.8 0 00-4.94-11.71m-10.25 20a21.63 21.63 0 01-9.36 4.37 59.16 59.16 0 01-13.46 1.37H389a34.74 34.74 0 014.73-11 24.24 24.24 0 017-7.07 14.54 14.54 0 017.85-2.47 9.13 9.13 0 016.41 2 6.72 6.72 0 012.16 5.25 9.31 9.31 0 01-3.49 7.51"
                    />
                    <path
                      id="Path_37"
                      data-name="Path 37"
                      className="cls-1"
                      d="M426.65 70.8a1.09 1.09 0 01-.14.31 16.62 16.62 0 01-3.51 4.46z"
                    />
                    <path
                      id="Path_38"
                      data-name="Path 38"
                      className="cls-1"
                      d="M401.9 113.48l45.64-59.69L428.14 0h19l13.89 42.22L492.48 0H513l-42.72 55.19 21.27 58.29h-19.79l-15.06-46-34.31 46z"
                    />
                  </g>
                </g>
              </g>
            </svg>

            {/*<h4 className="logo-title">Safe road</h4>*/}
          </div>

          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={() => dispatch(toggle())}
          >
            <i className="icon">
              <svg width="20px" height="20px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>
            </i>
          </div>
          <Navbar.Toggle aria-controls="navbarSupportedContent">
            <div
              onClick={() => dispatch(toggleHead())}
              className={`${Styles.hamburger} ${
                ToggleHeader.value && Styles.active
              } shadow-none 
                            ${config.darkMode ? "bg-transparent" : ""}`}
            >
              <span
                className={`${Styles.hamburger__patty} ${
                  config.darkMode ? "bg-white" : ""
                }`}
              />
              <span
                className={`${Styles.hamburger__patty} ${
                  config.darkMode ? "bg-white" : ""
                }`}
              />
              <span
                className={`${Styles.hamburger__patty} ${
                  config.darkMode ? "bg-white" : ""
                }`}
              />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="navbarSupportedContent"
            className={`${ToggleHeader.value && "show"}`}
          >
            <Nav
              as="ul"
              className="ms-auto navbar-list my-2 my-lg-0 d-flex align-items-stretch"
            >
              <Dropdown as="li" className="nav-item d-flex align-items-center">
                <button
                  onClick={toggleDarkMode}
                  className="bg-transparent border-0 mx-2"
                >
                  {config.darkMode ? (
                    <div className="moon">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 499.712 499.712"
                        width="22"
                      >
                        <path
                          fill="#FFD93B"
                          d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88
	C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712
	C39.744,355.368,90.944,375.528,146.88,375.528z"
                        />
                        <path
                          fill="#F4C534"
                          d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256
	c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256
	C499.712,162.12,461.392,89.64,401.92,42.776z"
                        />
                        <g>
                          <polygon
                            fill="#FFD83B"
                            points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296
		128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4 	"
                          />
                          <polygon
                            fill="#FFD83B"
                            points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984
		276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552 	"
                          />
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div className="sun">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 512 512"
                        width="22"
                      >
                        <g>
                          <circle
                            fill="#FFD347"
                            cx="255.997"
                            cy="255.997"
                            r="144.824"
                          />
                          <path
                            fill="#FFD347"
                            d="M256,56.849c-4.273,0-7.737-3.463-7.737-7.737V7.737C248.263,3.463,251.727,0,256,0
		s7.737,3.463,7.737,7.737v41.376C263.737,53.386,260.273,56.849,256,56.849z"
                          />
                          <path
                            fill="#FFD347"
                            d="M152.563,84.568c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.701-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C155.206,84.234,153.876,84.568,152.563,84.568z"
                          />
                          <path
                            fill="#FFD347"
                            d="M76.823,160.294c-1.312,0-2.643-0.334-3.861-1.038L37.13,138.569
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C82.097,158.907,79.497,160.294,76.823,160.294z"
                          />
                          <path
                            fill="#FFD347"
                            d="M49.112,263.737H7.737C3.464,263.737,0,260.274,0,256s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S53.385,263.737,49.112,263.737z"
                          />
                          <path
                            fill="#FFD347"
                            d="M41.005,387.869c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C43.648,387.535,42.317,387.869,41.005,387.869z"
                          />
                          <path
                            fill="#FFD347"
                            d="M131.862,478.74c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C137.136,477.352,134.536,478.74,131.862,478.74z"
                          />
                          <path
                            fill="#FFD347"
                            d="M256,512c-4.273,0-7.737-3.463-7.737-7.737v-41.376c0-4.274,3.464-7.737,7.737-7.737
		s7.737,3.463,7.737,7.737v41.376C263.737,508.537,260.273,512,256,512z"
                          />
                          <path
                            fill="#FFD347"
                            d="M380.138,478.74c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.7-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C382.781,478.406,381.451,478.74,380.138,478.74z"
                          />
                          <path
                            fill="#FFD347"
                            d="M470.995,387.869c-1.312,0-2.643-0.334-3.861-1.038l-35.832-20.687
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C476.269,386.481,473.669,387.869,470.995,387.869z"
                          />
                          <path
                            fill="#FFD347"
                            d="M504.263,263.737h-41.376c-4.273,0-7.737-3.463-7.737-7.737s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S508.536,263.737,504.263,263.737z"
                          />
                          <path
                            fill="#FFD347"
                            d="M435.177,160.294c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C437.82,159.96,436.489,160.294,435.177,160.294z"
                          />
                          <path
                            fill="#FFD347"
                            d="M359.437,84.568c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C364.711,83.181,362.11,84.568,359.437,84.568z"
                          />
                        </g>
                        <path
                          fill="#FFBE31"
                          d="M256,111.18c-5.242,0-10.418,0.286-15.516,0.828c72.685,7.743,129.303,69.252,129.303,143.991
	s-56.619,136.249-129.303,143.992c5.098,0.544,10.273,0.828,15.516,0.828c79.982,0,144.82-64.838,144.82-144.82
	S335.983,111.18,256,111.18z"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </Dropdown>

              {/* <Dropdown as="li" className="nav-item d-flex align-items-center">
                <Dropdown.Toggle
                  variant="nav-link d-flex align-items-center"
                  id="mail-drop"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    width="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.4"
                      d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/*<span className="bg-primary count-mail">1</span>*/}
              {/* </Dropdown.Toggle>
                <Dropdown.Menu
                  className="sub-drop dropdown-menu-end p-0"
                  aria-labelledby="mail-drop"
                >
                  <div className="card shadow-none m-0">
                    <div className="card-header d-flex justify-content-between bg-primary py-3">
                      <div className="header-title">
                        <h5 className="mb-0 text-white">{t("All_Message")}</h5>
                      </div>
                    </div>
                    <div className="card-body p-0 ">
                      <Link href="/">
                        <a className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <div>
                              <Image
                                className="avatar-40 rounded-pill bg-soft-primary p-1"
                                src={avatars1}
                                alt=""
                              />
                            </div>
                            <div className=" w-100 ms-3">
                              <h6 className="mb-0 ">Bni Emma Watson</h6>
                              <small className="float-left font-size-12">
                                13 Jun
                              </small>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>*/}
              {/*<Dropdown as="li" className="nav-item d-flex align-items-center">*/}
              {/*    <Link href="/">*/}
              {/*        <a className="nav-link">*/}
              {/*            <svg width="24" viewBox="0 0 24 24" fill="none"*/}
              {/*                 xmlns="http://www.w3.org/2000/svg">*/}
              {/*                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd"*/}
              {/*                      d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z"*/}
              {/*                      fill="currentColor"/>*/}
              {/*                <path fillRule="evenodd" clipRule="evenodd"*/}
              {/*                      d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z"*/}
              {/*                      fill="currentColor"/>*/}
              {/*            </svg>*/}
              {/*        </a>*/}
              {/*    </Link>*/}
              {/*</Dropdown>*/}
              <Dropdown as="li" className="nav-item d-flex align-items-center">
                {state === "ar" && (
                  <button
                    className={`border-0 bg-transparent ${
                      config.darkMode ? "text-white" : ""
                    }`}
                    name="en"
                    onClick={(e) => handleLanguage(e)}
                  >
                    <img
                      name="en"
                      src={"https://flagcdn.com/us.svg"}
                      width={"25px"}
                      alt="en"
                    />
                  </button>
                )}
                {state === "en" && (
                  <button
                    className={`border-0 bg-transparent ${
                      config.darkMode ? "text-white" : ""
                    }`}
                    name="ar"
                    onClick={(e) => handleLanguage(e)}
                  >
                    <img
                      name="ar"
                      src={"https://flagcdn.com/sa.svg"}
                      width={"25px"}
                      alt="ar"
                    />
                  </button>
                )}
              </Dropdown>
              <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                  variant="nav-link py-0 d-flex align-items-center"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src={"/assets/images/avatars/01.png"}
                    width={40}
                    height={40}
                    alt="User-Profile"
                    className="img-fluid avatar avatar-rounded avatar-rounded"
                  />
                  <div className="caption ms-3 d-none d-md-block text-start">
                    <h6 className="mb-0 caption-title">
                      {auth.user?.user?.username}
                    </h6>
                    <p className="mb-0 caption-sub-title">Saferoad Team</p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown-menu-end shadow"
                  aria-labelledby="navbarDropdown"
                >
                  <Dropdown.Item as={Link} href="/Setting" className="p-2">
                    <a className="d-block dropdown-item">{t("Setting")}</a>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    as={"button"}
                    onClick={handleSignOut}
                    className="px-0"
                  >
                    <a className="d-block dropdown-item">{t("Logout")}</a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
