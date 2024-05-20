import { styled } from "@mui/material";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const position: [number, number] = [40.8518, 14.2681];

  return (
    <CustomMapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </CustomMapContainer>
  );
};

export default Map;

const CustomMapContainer = styled(MapContainer)(() => ({
  width: "100%",
  height: "20rem",
}));
