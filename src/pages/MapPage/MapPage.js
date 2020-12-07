import React from "react";
import GoogleMapReact from "google-map-react";
import ToggleHeader from "../../components/ToggleHeader/ToggleHeader";

class MapPage extends React.Component {
  render() {
    return (
    <>
      <ToggleHeader />
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultZoom={14}
          defaultCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
      </>
    );
  }
}

export default MapPage;
