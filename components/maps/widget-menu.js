import React, { useEffect, useState } from "react";
import Styles from "../../styles/WidgetMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import MenuTree from "../tree/menu-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { toggle } from "../../lib/slices/toggleAddMarkerRoutingMachine";
import FilterTree from "../tree/filter-tree";
import { Card, Col, Row } from "react-bootstrap";

const WidgetMenu = ({ setCar, setOneCar }) => {
  const [state, setState] = useState(false);
  const [openConfig, setOpenConfig] = useState(false);
  const stateReducer = useSelector((state) => state);
  const isOpenMarkerRoutingMachine =
    stateReducer.toggleAddMarkerRoutingMachine.value;
  const dispatch = useDispatch();

  const activeCars = stateReducer.firebase.Vehicles.filter(
    (x) => x.VehicleStatus === 1
  ).length;

  const stoppedCars = stateReducer.firebase.Vehicles.filter(
    (x) => x.VehicleStatus === 0
  ).length;

  useEffect(() => {
    if (isOpenMarkerRoutingMachine) {
      setState(true);
    }
    return false;
  }, [isOpenMarkerRoutingMachine]);

  const handleButton = () => {
    if (isOpenMarkerRoutingMachine) {
      dispatch(toggle(false));
      setState(!state);
    } else {
      setState(!state);
      setOpenConfig(false);
    }
  };
  return (
    <aside className={`${stateReducer.config.darkMode && Styles.dark}`}>
      <nav
        className={`${Styles.nav} ${
          state && !isOpenMarkerRoutingMachine && Styles.active
        } position-absolute rounded shadow-lg pt-5 overflow-hidden`}
        id="widget_menu"
      >
        <div className="w-100 d-flex gap-2">
          <Card className="w-100 bg-soft-success text-success text-center my-1">
            <Card.Body>
              <h6>All</h6>
              <div>{stateReducer.firebase.Vehicles.length}</div>
            </Card.Body>
          </Card>

          <Card className="w-100 bg-soft-info text-info text-center my-1">
            <Card.Body>
              <h6>Active</h6>
              <div>{activeCars}</div>
            </Card.Body>
          </Card>

          <Card className="w-100 bg-soft-danger text-danger text-center my-1">
            <Card.Body>
              <h6>Ready</h6>
              <div>{stoppedCars}</div>
            </Card.Body>
          </Card>
        </div>

        <div
          className={`${Styles.nav__item} ${
            state && !isOpenMarkerRoutingMachine && Styles.active
          } border-top pt-2`}
        >
          <MenuTree setCar={setCar} setOneCar={setOneCar} />
        </div>
      </nav>
      <div
        onClick={handleButton}
        className={`${Styles.hamburger} ${state && Styles.active}`}
      >
        <span className={Styles.hamburger__patty} />
        <span className={Styles.hamburger__patty} />
        <span className={Styles.hamburger__patty} />
      </div>
    </aside>
  );
};

export default WidgetMenu;
