import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Card } from "react-bootstrap";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJkLnRyYWluaW5nQGdtYWlsLmNvbSIsInBob25lIjoiMDExMTExMTExMTEiLCJ1c2Vycm9sZSI6bnVsbCwiaWF0IjoxNjQ4MTA3MTE3LCJleHAiOjE2NTA2OTkxMTd9._1ucYh29YPCbm0YCaxVeAqsgW5v-N3zAaqpsCzTYskc";
const Consumers = () => {
  const [gridApi, setGridApi] = useState(null);

  const getRowStyle = (params) => {
    if (params.node.id % 2 === 0) {
      return { background: "rgba(6, 67, 86,0.1)" };
    }
  };

  const columnDefs = [
    {
      headerName: "ID",
      field: "UserID",
      minWidth: 100,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Name",
      field: "UserName",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Phone Number",
      field: "PhoneNumber",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Email",
      field: "Email",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "User Role",
      field: "UserRole",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: false,
    resizable: true,
  };

  const onGridReady = (params) => {
    console.log("grid is ready");
    axios
      .get(`https://sharex-saferoad.herokuapp.com/user/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        params.api.applyTransaction({ add: data.users });
        setGridApi(params.api);
      })
      .catch((er) => er.response);
  };

  const onBtnExport = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4 ">
          <h3 className="text-secondary">All Clients Data</h3>
          <button
            className="btn btn-primary py-1 px-4"
            onClick={() => onBtnExport()}
          >
            Export
            <svg
              height="18"
              width="18"
              fill="#fff"
              style={{ marginLeft: "0.5rem" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22,16 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,16 L4,16 L4,20 L20,20 L20,16 L22,16 Z M13,12.5857864 L16.2928932,9.29289322 L17.7071068,10.7071068 L12,16.4142136 L6.29289322,10.7071068 L7.70710678,9.29289322 L11,12.5857864 L11,2 L13,2 L13,12.5857864 Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="ag-theme-alpine" style={{ outline: "none" }}>
          <AgGridReact
            columnDefs={columnDefs}
            pagination={true}
            domLayout={"autoHeight"}
            suppressExcelExport={true}
            paginationPageSize={10}
            paginationNumberFormatter={function (params) {
              return params.value.toLocaleString();
            }}
            defaultColDef={defaultColDef}
            getRowStyle={getRowStyle}
            onGridReady={onGridReady}
            suppressMenuHide={true}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Consumers;
