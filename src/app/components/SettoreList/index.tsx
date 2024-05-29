"use client";
import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Button from "../Button";
import MigliorPosto from "../MigliorPosto";
import ManualChoice from "../ManualChoice";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { IChoiceMode } from "@/app/context/type";


const SettoreList = () => {
  const { changeChoiceMode, mode } = useEventTotal();

  const handleButton = (el: IChoiceMode) => {
    if (mode !== el) {
      changeChoiceMode(el)
    }
  }

  return (
    <section className="p-6 flex flex-col grow">
      <div className="flex">
        <CustomButton
          onClick={() => handleButton(IChoiceMode.BEST_PLACE)}
          className="w-1/2"
          variant={`${mode === IChoiceMode.BEST_PLACE ? "contained" : "outlined"}`}
          label={"Miglior posto"}
        />
        <CustomButton
          onClick={() => handleButton(IChoiceMode.MANUAL_CHOICE)}
          className="w-1/2"
          variant={`${mode === IChoiceMode.MANUAL_CHOICE ? "contained" : "outlined"}`}
          label={"Selezione manuale"}
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
          <ManualChoice />
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
