"use client";
import { Box, ButtonGroup, Divider, Typography } from "@mui/material";
import React from "react";
import Button from "../Button";
import SettoreAccordion from "../SettoreAccordion";

const SettoreList = () => {
  return (
    <section>
      <div className="flex">
        <Button className="w-1/2" variant="contained" label={"Miglior posto"} />
        <Button
          className="w-1/2"
          variant="outlined"
          label={"Selezione manuale"}
        />
      </div>
      <Typography
        fontSize={14}
        marginTop={2}
        marginBottom={1}
        sx={{ color: "#000" }}
        variant="body1"
      >
        Indica il numero di biglietti e ti saranno assegnati i migliori posti a
        disposizione
      </Typography>
      <SettoreAccordion />
    </section>
  );
};

export default SettoreList;
