"use client";
import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Button from "../Button";
import SettoreAccordion from "../SettoreAccordion";

const SettoreList = () => {
  const [isMigliorePosto, setIsMigliorePosto] = useState(true);

  return (
    <section className="p-6 flex flex-col grow">
      <div className="flex">
        <CustomButton
          onClick={() => setIsMigliorePosto(true)}
          className="w-1/2"
          variant={`${isMigliorePosto ? "contained" : "outlined"}`}
          label={"Miglior posto"}
        />
        <CustomButton
          onClick={() => setIsMigliorePosto(false)}
          className="w-1/2"
          variant={`${isMigliorePosto ? "outlined" : "contained"}`}
          label={"Selezione manuale"}
        />
      </div>
      {isMigliorePosto ? (
        <>
          <Typography
            fontSize={14}
            marginTop={2}
            marginBottom={1}
            sx={{ color: "#000" }}
            variant="body1"
          >
            Indica il numero di biglietti e ti saranno assegnati i migliori
            posti a disposizione
          </Typography>
          <SettoreAccordion />
        </>
      ) : (
        <Box>
          <Typography
            marginTop={2}
            textAlign={"center"}
            variant="body1"
            sx={{ color: "#000" }}
          >
            Seleziona i tuoi biglietti dalla mappa
          </Typography>
        </Box>
      )}
    </section>
  );
};

export default SettoreList;

const CustomButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    background: theme.palette.primary.main,
    color: "#FFF",
    border: "none",
  },
}));
