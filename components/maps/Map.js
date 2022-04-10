import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import WidgetMenu from "./widget-menu";
import { useSelector } from "react-redux";

const Map = () => {
  const [car, setCar] = useState();
  // const [carData, setCarData] = useState(null);
  const [oneCar, setOneCar] = useState();
  const [directions, setDirections] = useState();
  const [cardinate, setCardinate] = useState();
  const stateReducer = useSelector((state) => state);

  //console.log(stateReducer.firebase.Vehicles, "popsa");

  const mapRef = useRef();
  const center = useMemo(
    () => ({ lat: parseFloat(24.7), lng: parseFloat(46.7) }),
    []
  );
  const options = useMemo(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const _houses = [];
  stateReducer?.firebase?.Vehicles.map((item) => {
    _houses.push({
      lat: parseFloat(item.Latitude),
      lng: parseFloat(item.Longitude),
    });
  });

  const generateHouses = (pos) => {
    const _houses = [];
    stateReducer?.firebase?.Vehicles.map((item) => {
      _houses.push({
        lat: parseFloat(item.Latitude),
        lng: parseFloat(item.Longitude),
      });
    });
    setCardinate(_houses);

    return _houses;
  };
  useEffect(() => {}, [stateReducer]);

  const houses = useMemo(() => generateHouses(center), [center]);

  const fetchDirections = (house) => {
    if (!car) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: house,
        destination: car,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };
  return (
    <div className="vov" style={{ display: "flex", height: "105vh" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerStyle={{ width: "100%", height: "105vh" }}
          options={options}
          onLoad={onLoad}
        >
          {_houses && (
            <MarkerClusterer>
              {(clusterer) =>
                _houses.map((house, i) => (
                  <Marker
                    key={i}
                    position={house}
                    icon="assets/images/cars/marker.png"
                    clusterer={clusterer}
                    onClick={() => {
                      fetchDirections(house);
                      // setCarData(house);
                    }}
                  />
                ))
              }
            </MarkerClusterer>
          )}
          {/* {carData && (
            <InfoWindow position={carData}>
              <h4>car details</h4>
            </InfoWindow>
          )} */}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  zIndex: 50,
                  strokeColor: "#1976D2",
                  strokeWeight: 5,
                },
              }}
            />
          )}
          {car && (
            <>
              <Marker
                position={car}
                icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
              />
              <MarkerClusterer>
                {(clusterer) =>
                  houses.map((house, i) => (
                    <Marker
                      key={i}
                      position={house}
                      icon="assets/images/cars/marker.png"
                      clusterer={clusterer}
                      onClick={() => {
                        fetchDirections(house);
                      }}
                    />
                  ))
                }
              </MarkerClusterer>
              <Circle center={car} radius={15000} options={closeOptions} />
              <Circle center={car} radius={30000} options={middleOptions} />
              <Circle center={car} radius={45000} options={farOptions} />
            </>
          )}
          {oneCar && (
            <>
              <Marker
                position={oneCar}
                zIndex={1000}
                icon="assets/images/cars/amarker.png"
              />
            </>
          )}
        </GoogleMap>
      </div>

      <WidgetMenu
        setCar={(position) => {
          setCar(position);
          mapRef.current?.panTo(position);
        }}
        setOneCar={(onePosition) => {
          setOneCar(onePosition);
          mapRef.current?.panTo(onePosition);
        }}
      />
    </div>
  );
};
const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};

export default Map;
