import { Tooltip, styled } from "@mui/material";
import React from "react";

const PrecompilaButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Tooltip title="Precompila con i dati dell'utente loggato">
      <span className="self-center flex_1">
        <CustomButton type="button" onClick={onClick}>
          Usa i miei dati
        </CustomButton>
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
