import { TextField, styled } from "@mui/material";
import React from "react";

const DatiUtilizzatore = () => {
  return (
    <>
      <TextField
        className="flex-100 md:flex-50 !pb-4 "
        label="Nome/Name"
        focused
      />
      <TextField
        className="flex-100 md:flex-50 !pb-4 md:!pl-3"
        sx={{
          "@media (min-width: 768px)": {
            ".MuiFormLabel-root": {
              transform: "translate(26px, -9px) scale(0.75)",
            },
          },
        }}
        label="Cognome/LastName"
        focused
      />
      <TextField
        className="flex-100 md:flex-50 !pb-4"
        type="number"
        label="Numero/Mobile"
        focused
      />
    </>
  );
};

export default DatiUtilizzatore;
