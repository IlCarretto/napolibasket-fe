"use client";
import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Button from "../Button";
import SettoreAccordion from "../SettoreAccordion";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PrezziTrasparentiModal from "../Modal/PrezziTrasparentiModal";

const SettoreList = () => {
  const [isMigliorePosto, setIsMigliorePosto] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="p-4 flex flex-col grow">
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
          <Box>
            <PrezziButton onClick={() => setShowModal(true)}>
              <AddCircleIcon fontSize="small" sx={{ color: "#000" }} />
              dettaglio prezzi
            </PrezziButton>
          </Box>
          <PrezziTrasparentiModal
            showModal={showModal}
            setShowModal={setShowModal}
          />
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

export const PrezziButton = styled("button")(() => ({
  textDecoration: "underline",
  alignSelf: "flex-start",
  display: "flex",
  alignItems: "center",
  fontSize: 14,
  gap: 4,
}));
