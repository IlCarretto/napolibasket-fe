import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTheme } from "@mui/material";

export default function Rubrica() {
  const theme = useTheme();
  const options = nomiRubrica.map((option) => {
    const firstLetter = option.nome[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.nome}
      sx={{
        width: "100%",
        "@media only screen and (min-width: 768px)": {
          width: 250,
        },
        color: theme.palette.primary.main,
        "& *": { color: "inherit!important" },
      }}
      slotProps={{
        paper: {
          sx: {
            "& .MuiAutocomplete-listbox": {
              "& .MuiAutocomplete-option": {
                color: theme.palette.primary.main,
              },
            },
          },
        },
      }}
      renderInput={(params) => <TextField {...params} label="Rubrica" />}
    />
  );
}

const nomiRubrica = [
  { nome: "Antonio Russo" },
  { nome: "Mario Rossi" },
  { nome: "Maura Blasio" },
  { nome: "Gian Luca" },
  { nome: "Fabrizio Cimmaruta" },
  { nome: "Pippo Pluto" },
  { nome: "Livia Cimmino" },
  {
    nome: "Giovanni Botti",
  },
  { nome: "Pietro Bacthouti" },
];
