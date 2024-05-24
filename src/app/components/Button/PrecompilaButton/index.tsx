import { Tooltip, styled } from "@mui/material";
import React from "react";

const PrecompilaButton = () => {
  return (
    <Tooltip title="Precompila con i dati dell'utente loggato">
      <span className="self-end">
        <CustomButton>Usa i miei dati</CustomButton>
      </span>
    </Tooltip>
  );
};

export default PrecompilaButton;

const CustomButton = styled("button")(({ theme }) => ({
  textDecoration: "underline",
  textUnderlineOffset: 4,
  fontSize: 14,
  color: theme.palette.primary.main,
}));
