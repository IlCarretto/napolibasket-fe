import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTheme } from "@mui/material";
import { useFetch } from "@/app/hooks/useFetch";

type TRubrica = {
  onSelect: (e: any) => void;
};

export default function Rubrica({ onSelect }: TRubrica) {
  const theme = useTheme();

  const dati_precompilati: any = useFetch("./MockData/dati_precompilati.json");
  let options = [];
  if (dati_precompilati && dati_precompilati.dati_precompilati) {
    options = Object.values(dati_precompilati.dati_precompilati.rubrica).map(
      (option) => {
        const firstLetter = option.nome[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
          ...option,
        };
      }
    );
  }

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.nome}
      onChange={(e, val) => onSelect(val)}
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
