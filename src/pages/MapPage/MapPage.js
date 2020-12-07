import React from "react";
import GoogleMapReact from "google-map-react";
import ToggleHeader from "../../components/ToggleHeader/ToggleHeader";
import styles from "./MapPage.module.css";

const Marker = ({ text }) => <div className={styles.marker}>{text}</div>;

const pins = [{lat: 49.2721,lng: -123.1250},{lat: 51.2721,lng: -125.1250}]

class MapPage extends React.Component {
  render() {
    return (
      <>
        <ToggleHeader />
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY}}
            defaultZoom={15}
            defaultCenter={{
              lat: 49.2721,
              lng: -123.1250
            }}>
            {pins.map(pin => (
               <Marker
                  lat={pin.lat}
                  lng={pin.lng}
               />
             ))}
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default MapPage;
