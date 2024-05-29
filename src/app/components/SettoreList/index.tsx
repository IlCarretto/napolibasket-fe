"use client";
import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Button from "../Button";
import MigliorPosto from "../MigliorPosto";
import ManualChoice from "../ManualChoice";
import { useEventTotal } from "@/app/context/EventTotalContext";


const SettoreList = () => {
  const [isMigliorePosto, setIsMigliorePosto] = useState<"migliore_posto" | "manual_choice">("migliore_posto");
  const { clearTickets } = useEventTotal();

  const handleButton = (el: "migliore_posto" | "manual_choice") => {
   
    if (el !== isMigliorePosto) {
      setIsMigliorePosto(el)
       clearTickets()
    }
  }

  return (
    <section className="p-6 flex flex-col grow">
      <div className="flex">
        <CustomButton
          onClick={() => handleButton("migliore_posto")}
          className="w-1/2"
          variant={`${isMigliorePosto === "migliore_posto" ? "contained" : "outlined"}`}
          label={"Miglior posto"}
        />
        <CustomButton
          onClick={() => handleButton("manual_choice")}
          className="w-1/2"
          variant={`${isMigliorePosto === "manual_choice" ? "contained" : "outlined"}`}
          label={"Selezione manuale"}
        />
      </div>
      {isMigliorePosto === "migliore_posto" ? (
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
