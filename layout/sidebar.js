import React, { useEffect } from "react";
import VerticalNav from "./vertical-nav";
import Scrollbar from "smooth-scrollbar";
import { useSelector, useDispatch } from "react-redux";
import { sidebarMini, toggle } from "../lib/slices/toggleSidebar";
import { useRouter } from "next/router";

const Sidebar = () => {
  const isActiveSideBar = useSelector((state) => state.toggleMenu.value);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    Scrollbar.init(document.getElementById("my-scrollbar"));
    router.events.on("routeChangeComplete", () => dispatch(sidebarMini()));
  }, [dispatch, router.events]);

  return (
    <>
      <aside
        className={`sidebar sidebar-default navs-rounded-all sidebar-hover {{ sidebarVariants }} ${
          isActiveSideBar && "sidebar-mini"
        }`}
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a className="navbar-brand">
            <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.69 114.69">
              <defs>
                <style>
                  {
                    ".cls-2{fill:#fff}.cls-3{fill:none;stroke:#fff;stroke-miterlimit:10}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <rect
                    width={114.69}
                    height={114.69}
                    rx={12.63}
                    fill="#0d4355"
                  />
                  <path
                    className="cls-2"
                    d="M49.91 58.1L36.74 21.21 49.78 21.21 59.67 48.57 81.3 20.39 77.99 17.85 61 39.97 52.71 17.03 30.81 17.03 45.2 57.34 20.34 89.09 16.79 86.31 17.92 95.58 27.18 94.45 23.63 91.67 49.91 58.1z"
                  />
                  <path
                    className="cls-2"
                    d="M94.33 25.63L97.91 28.37 96.69 19.12 87.44 20.33 91.02 23.08 66.96 54.39 80.54 93.48 67.6 93.48 57.3 63.96 33.48 94.28 36.76 96.86 55.87 72.54 64.63 97.66 86.41 97.66 71.64 55.15 94.33 25.63z"
                  />
                  <path className="cls-3" d="M54.39 52.06L53.72 50.18" />
                  <path
                    strokeDasharray="3.84 1.92"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit={10}
                    d="M53.07 48.37L45.65 27.56"
                  />
                  <path className="cls-3" d="M45.33 26.66L44.65 24.77" />
                  <path className="cls-3" d="M72.97 89.82L72.31 87.94" />
                  <path
                    strokeDasharray="3.94 1.97"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit={10}
                    d="M71.67 86.08L64.21 64.69"
                  />
                  <path className="cls-3" d="M63.88 63.76L63.22 61.87" />
                </g>
              </g>
            </svg>

            
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={85}
      viewBox="0 0 279.262 84.401"
      className="logo-title"
    >
      <defs>
        <clipPath id="a">
          <path
            data-name="Rectangle 17318"
            fill="#0D4355"
            d="M0 0H279.262V84.401H0z"
          />
        </clipPath>
      </defs>
      <g data-name="Group 37248" clipPath="url(#a)" fill="#0D4355">
        <path
          data-name="Path 32"
          d="M15.371 72.2a41.557 41.557 0 01-8.6-.8A26.871 26.871 0 010 69.044v-8.618a41.357 41.357 0 006.91 2.844 28.337 28.337 0 008.55 1.2 22.571 22.571 0 005.44-.643 14.215 14.215 0 004.6-2 9.866 9.866 0 003.152-3.467 10.113 10.113 0 001.157-4.952 9.054 9.054 0 00-1.109-4.557 13.575 13.575 0 00-3.38-3.731 47.535 47.535 0 00-5.82-3.844 49.414 49.414 0 01-5.862-4.263A17.41 17.41 0 019.4 31.7a15.687 15.687 0 01-1.581-7.3 18.475 18.475 0 011.664-8 17.467 17.467 0 014.617-5.978 20.36 20.36 0 016.87-3.731 27.023 27.023 0 018.4-1.267 35.046 35.046 0 018.995 1.043 40.254 40.254 0 017.529 2.866l-3.373 7.422a34.792 34.792 0 00-6.109-2.444 24.3 24.3 0 00-7.042-1.024 16.182 16.182 0 00-4.731.666 11.221 11.221 0 00-3.87 2.021 9.348 9.348 0 00-2.577 3.289 10.464 10.464 0 00-.907 4.51 9.194 9.194 0 001.043 4.6 10.908 10.908 0 003.084 3.354q2.047 1.511 5.021 3.289a51.156 51.156 0 016.714 4.709 17.844 17.844 0 014.416 5.443 15.926 15.926 0 011.579 7.4 19.614 19.614 0 01-1.778 8.618 16.719 16.719 0 01-4.975 6.132 22.211 22.211 0 01-7.533 3.666 34.815 34.815 0 01-9.485 1.216"
          transform="translate(.002 12.203)"
        />
        <path
          data-name="Path 33"
          d="M13.8 69.31l13.171-62.1A3.516 3.516 0 0130.4 4.426h1.67a3.515 3.515 0 013.432 4.267l-2.657 12.173q-.361 1.955-.913 4.13T30.778 29.3l-1.134 4.042h.4a39.8 39.8 0 014.088-4.507 20.233 20.233 0 015.31-3.623 15.55 15.55 0 016.73-1.42 14.131 14.131 0 016.71 1.466 9.881 9.881 0 014.218 4.313 15.305 15.305 0 011.469 7.065 25.5 25.5 0 01-.266 3.555q-.268 1.867-.669 3.909l-5.672 26.673a3.516 3.516 0 01-3.438 2.782h-1.748a3.515 3.515 0 01-3.438-4.241l5.5-26.013a39.5 39.5 0 00.578-3.266 20.161 20.161 0 00.179-2.466 6.938 6.938 0 00-1.511-4.819 6.12 6.12 0 00-4.754-1.667 11.592 11.592 0 00-6.642 2.333 21.733 21.733 0 00-6.109 7.042 40.628 40.628 0 00-4.309 11.861l-3.9 18.448a3.519 3.519 0 01-3.441 2.788h-1.7A3.515 3.515 0 0113.8 69.31"
          transform="translate(30.86 9.958)"
        />
        <path
          data-name="Path 34"
          d="M42.808 61.1a12.813 12.813 0 01-6.908-1.892 12.649 12.649 0 01-4.777-5.664 22.713 22.713 0 01-1.732-9.463A46.159 46.159 0 0130.5 33.906a42.347 42.347 0 013.175-9.2 31.629 31.629 0 014.978-7.487 22.07 22.07 0 016.574-5.043 17.508 17.508 0 017.887-1.82 13.037 13.037 0 015.686 1.158 12.18 12.18 0 014.042 3.09 15.6 15.6 0 012.577 4.2h.445l1.911-5.242a3.515 3.515 0 016.743 1.93L65.656 57.42a3.517 3.517 0 01-3.441 2.788h-.062a3.518 3.518 0 01-3.487-3.981l.624-4.683h-.354a34.943 34.943 0 01-4.4 4.709 21.247 21.247 0 01-5.375 3.51 15.194 15.194 0 01-6.353 1.337m3.11-7.286a10.263 10.263 0 006.353-2.421A22.9 22.9 0 0057.8 44.88a33.594 33.594 0 003.666-9.109 31.023 31.023 0 00.845-4.488 38.651 38.651 0 00.221-4.042 10.314 10.314 0 00-2.219-6.863 7.532 7.532 0 00-6.086-2.645 9.761 9.761 0 00-5.112 1.446 15.833 15.833 0 00-4.351 3.974A26.191 26.191 0 0041.408 29a37.37 37.37 0 00-2.177 7.175 39.912 39.912 0 00-.777 7.864q0 4.8 1.956 7.286a6.6 6.6 0 005.508 2.489"
          transform="translate(66.117 23.307)"
        />
        <path
          data-name="Path 35"
          d="M44.158 55.961l8.9-41.926a3.516 3.516 0 013.442-2.788h.279a3.518 3.518 0 013.493 3.916l-.624 5.459h.445a52.215 52.215 0 014.089-5.022 18.309 18.309 0 014.91-3.8 13.153 13.153 0 016.242-1.443 22.255 22.255 0 012.577.156 16.333 16.333 0 012.444.465L78.4 19.157a20.418 20.418 0 00-2.2-.422 17.238 17.238 0 00-2.362-.156 11.638 11.638 0 00-5.554 1.384 17.833 17.833 0 00-5.277 4.458 27.47 27.47 0 00-3.757 6.132 35.194 35.194 0 00-2.35 7.217l-4.166 19.65a3.519 3.519 0 01-3.441 2.788H47.6a3.516 3.516 0 01-3.438-4.247"
          transform="translate(99.161 23.307)"
        />
        <path
          data-name="Path 36"
          d="M90.716 13.572c-2.437-2.145-6.012-3.217-10.756-3.217a20.169 20.169 0 00-10.56 2.762 25.192 25.192 0 00-7.961 7.344 35.454 35.454 0 00-5 10.334 39.932 39.932 0 00-1.755 11.731A20.883 20.883 0 0056.92 52.6a15.121 15.121 0 006.272 6.337 17.632 17.632 0 005.167 1.755l5.134-6.727a9.731 9.731 0 01-7.084-3.055c-1.787-2.047-2.7-4.874-2.7-8.449 0-.52 0-1.04.033-1.625.033-.552.065-1.072.13-1.527h1.82a56.349 56.349 0 0012.771-1.267 28.456 28.456 0 008.9-3.575 16.306 16.306 0 002.7-2.145 12.325 12.325 0 002.567-3.282.689.689 0 00.1-.227 13.535 13.535 0 001.625-6.629 10.871 10.871 0 00-3.64-8.611M83.177 28.26a16 16 0 01-6.889 3.217 43.676 43.676 0 01-9.911 1.007h-1.333a25.49 25.49 0 013.477-8.091 17.8 17.8 0 015.134-5.2 10.713 10.713 0 015.784-1.82 6.715 6.715 0 014.712 1.495 4.932 4.932 0 011.592 3.867 6.853 6.853 0 01-2.567 5.524"
          transform="translate(123.002 23.295)"
        />
        <path
          data-name="Path 37"
          d="M68.233 16.035a.689.689 0 01-.1.227 12.325 12.325 0 01-2.567 3.282z"
          transform="translate(147.5 36.073)"
        />
        <path
          data-name="Path 38"
          d="M60.784 83.511l33.588-43.928L80.09 0h14l10.226 31.072L127.446 0h15.078l-31.417 40.613 15.653 42.9h-14.568l-11.081-33.875-25.246 33.873z"
          transform="translate(136.739 .002)"
        />
      </g>
    </svg>
          </a>
          <div
            className="sidebar-toggle shadow-lg"
            data-toggle="sidebar"
            data-active="true"
            onClick={() => dispatch(toggle())}
          >
            <i className="icon">
              <svg
                width="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </div>
        </div>
        <div
          className="sidebar-body pt-0 data-scrollbar"
          data-scroll="1"
          id="my-scrollbar"
        >
          <div className="collapse navbar-collapse" id="sidebar">
            <VerticalNav />
          </div>
        </div>
        <div className="sidebar-footer" />
      </aside>
    </>
  );
};

export default Sidebar;
