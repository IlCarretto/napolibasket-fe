import { styled } from "@mui/material";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position: [number, number] = [40.82236, 14.1789];

  return (
    <CustomMapContainer center={position} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Popup</Popup>
      </Marker>
    </CustomMapContainer>
  );
};

export default Map;

const CustomMapContainer = styled(MapContainer)(() => ({
  width: "100%",
  height: "20rem",
}));
