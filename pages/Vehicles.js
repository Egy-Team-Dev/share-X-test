import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Card } from "react-bootstrap";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJNb2hhbWVkQGdtYWlsLmNvbSIsInBob25lIjoiMDEyMDQ0ODQ0MzYiLCJ1c2Vycm9sZSI6InVzZXIiLCJpYXQiOjE2NDgwMzkxOTAsImV4cCI6MTY1MDYzMTE5MH0.vTDUq2e47BrBW5k9noa6gVdgV5wgnYTRJajwoFStmrw";
const Vehicles = () => {
  const [gridApi, setGridApi] = useState(null);

  const getRowStyle = (params) => {
    if (params.node.id % 2 === 0) {
      return { background: "rgba(6, 67, 86,0.1)" };
    }
  };

  const columnDefs = [
    {
      headerName: "ID",
      field: "VehicleID",
      minWidth: 100,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Name",
      field: "name",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Plate Number",
      field: "PlateNumber",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },

    {
      headerName: "Start date",
      field: "tripStrDate",
      minWidth: 170,
      valueFormatter: 'value?.replace("T", " ").replace(".000Z", "")',
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "End date",
      field: "tripEndDate",
      valueFormatter: 'value?.replace("T", " ").replace(".000Z", "")',
      minWidth: 170,
      sortable: true,
      unSortIcon: true,
    },

    {
      headerName: "Details",
      field: "Details",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "Status",
      field: "Status",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
  ];

  const defaultColDef = {
    sortable: true,
    editable: false,
    flex: 1,
    filter: true,
    floatingFilter: false,
    resizable: true,
  };

  const onGridReady = (params) => {
    axios
      .get(`https://sharex-saferoad.herokuapp.com/Vehicle`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        //console.log(data.availableVehicles);
        params.api.applyTransaction({ add: data.availableVehicles });
        setGridApi(params.api);
      })
      .catch((er) => console.log(er.response));
  };

  const onBtnExport = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <Card>
      <Card.Body>
        <div className=" d-flex justify-content-between align-items-center mb-4 ">
          <h3 className="text-secondary">All Vehicles Data</h3>
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

export default Vehicles;
