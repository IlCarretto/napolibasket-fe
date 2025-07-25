"use client";
import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Button from "../Button";
import MigliorPosto from "../MigliorPosto";
import ManualChoice from "../ManualChoice";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { IChoiceMode } from "@/app/context/type";
import AddCircleIcon from "@mui/icons-material/AddCircle"
import PrezziTrasparentiModal from "../Modal/PrezziTrasparentiModal";
import { useChangeChoiceMode } from "@/app/context/hooks";

const SettoreList = () => {
  const { mode, pricesForSector } = useEventTotal();
  const [showModal, setShowModal,] = useState(false);
  const changeChoiceMode = useChangeChoiceMode()
  const handleButton = (el: IChoiceMode) => {
    if (mode !== el) {
      changeChoiceMode(el)
    }
  }

  return (
    <section className="p-4 flex flex-col grow">
      <div className="flex">
        <CustomButton
          onClick={() => handleButton(IChoiceMode.MANUAL_CHOICE)}
          className="w-1/2"
          variant={`${mode === IChoiceMode.MANUAL_CHOICE ? "contained" : "outlined"}`}
          label={"Selezione manuale"}
        />
        <CustomButton
          onClick={() => handleButton(IChoiceMode.BEST_PLACE)}
          className="w-1/2"
          variant={`${mode === IChoiceMode.BEST_PLACE ? "contained" : "outlined"}`}
          label={"Miglior posto"}
        />
      </div>
      {mode === IChoiceMode.BEST_PLACE ? (
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
          <MigliorPosto />
          <Box paddingTop={1}>
            <PrezziButton onClick={() => setShowModal(true)}>
              <AddCircleIcon fontSize="small" sx={{ color: "#000" }} />
              dettaglio prezzi
            </PrezziButton>
          </Box>
        </>
      ) : (
        <>
          <Typography
            fontSize={14}
            marginTop={2}
            marginBottom={1}
            sx={{ color: "#000" }}
            variant="body1"
          >
            Seleziona i tuoi biglietti dalla mappa
          </Typography>
          <ManualChoice />
          <Box paddingTop={1}>
            <PrezziButton onClick={() => setShowModal(true)}>
              <AddCircleIcon fontSize="small" sx={{ color: "#000" }} />
              dettaglio prezzi
            </PrezziButton>
          </Box>

        </>
      )}
      <PrezziTrasparentiModal
        data={pricesForSector!}
        showModal={showModal}
        setShowModal={setShowModal}
      />

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
