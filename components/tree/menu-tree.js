import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "rc-tree";
import Image from "next/image";
import "rc-tree/assets/index.css";
import Styles from "../../styles/Tree.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  SyncOnCheck,
  SyncOnExpand,
} from "../../lib/slices/vehicleProcessStatus";
import {
  getKey,
  GetStatusString,
  GetStatusStringMenu,
  iconUrl,
} from "../../helpers/helpers";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Link } from "next/link";

const MenuTree = ({ setCar, setOneCar }) => {
  const [Status, setStatus] = useState({
    stopped: 0,
    running: 0,
    idling: 0,
    offline: 0,
    over_street_speed: 0,
    over_speed: 0,
    invalid_location: 0,
  });
  const [lists, setLists] = useState([]);
  const [Data, setData] = useState([]);
  const [statusIcons, setStatusIcons] = useState({});
  const [treeFilter, setTreeFilter] = useState("");
  const [TreeStyleHeight, setTreeStyleHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const stateReducer = useSelector((state) => state);
  const dispatch = useDispatch();
  const groupBy = (arr, key) =>
    arr.reduce(
      (acc, item) => (
        (acc[item[key]] = [...(acc[item[key]] || []), item]), acc
      ),
      {}
    );
  //console.log(stateReducer, "opa");
  useEffect(() => {
    setData(stateReducer?.firebase?.Vehicles);
  }, [stateReducer?.firebase?.Vehicles]);
  useEffect(
    (_) => {
      const ele = document.getElementById("widget_menu");
      const setSize = () => ele && setTreeStyleHeight(ele.clientHeight / 1.3);
      window.addEventListener("resize", setSize);
      setLoading(true);
      setSize();

      let groups = groupBy(stateReducer?.firebase?.Vehicles, "GroupName");

      if (groups["null"] && groups["Default"]) {
        groups["Default"] = [...groups["null"], ...groups["Default"]];
      } else if (groups["null"]) {
        groups["Default"] = [...groups["null"]];
      }
      delete groups["null"];
      let result = [];
      for (let key in groups)
        if (groups) result.push({ title: key, children: groups[key] });
      setLists(result);
      setStatusIcons(stateReducer?.firebase?.status);
      //console.log(groups, "kim");
      const statusIcn = Object.values(statusIcons).map((i) => {
        return { [getKey(i)]: i };
      });
    },
    [
      stateReducer?.firebase?.Vehicles,
      stateReducer?.firebase?.status,
      statusIcons,
    ]
  );

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setCar({ lat, lng });
  };

  return (
    <div className="position-relative">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          style={{
            width: "100%",
            padding: "0.5rem",
            margin: "1rem auto",
            borderRadius: "3px",
            border: "0.3px solid #d2d2d2",
            outline: "none",
          }}
          placeholder="Enter You Address"
        />
        <ComboboxList
          style={{
            backgroundColor: "#246c66",
            borderRadius: "15px",
          }}
        >
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description}
                style={{ margin: "0.5rem 0rem" }}
              />
            ))}
        </ComboboxList>
      </Combobox>
      <div id="menu-scrollbar">
        <div
          className={`tree_root ${stateReducer.config.darkMode && Styles.dark}`}
          style={{ height: TreeStyleHeight }}
        >
          {Data?.map((item, i) => (
            <button
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                border: "none",
                outline: "none",
                background: "none",
              }}
              onClick={() =>
                setOneCar({ lat: item.Latitude, lng: item.Longitude })
              }
            >
              <img
                width={25}
                src={iconUrl(item?.VehicleStatus)}
                style={{ marginRight: "1rem" }}
              />
              <p style={{ paddingTop: "1rem" }}>{item?.SerialNumber}</p>
              <p
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  backgroundColor: "gold",
                  fontSize: "0.6rem",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "10px",
                }}
              >
                ({GetStatusStringMenu(item?.VehicleStatus)})
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MenuTree;
