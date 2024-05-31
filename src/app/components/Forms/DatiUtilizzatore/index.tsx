import {
  Box,
  ButtonGroup,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../Button";
import PrecompilaButton from "../../Button/PrecompilaButton";
import { useFormState } from "react-dom";
import { addNominativoTicketAction } from "@/data/actions/ticket-action";
import { ZodErrors } from "../ZodErrors";
import Rubrica from "../../Rubrica";
import { useFetch } from "@/app/hooks/useFetch";

const initialState = {
  data: null,
  zodErrors: null,
  message: null,
};

const DatiUtilizzatore = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const theme = useTheme();
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [formState, formAction] = useFormState(
    addNominativoTicketAction,
    initialState
  );

  useEffect(() => {
    if (formState.data?.success) {
      setShowModal(false);
    }
  }, [formState]);

  const [formValues, setFormValues] = useState({
    nome: "",
    cognome: "",
    mobile: "",
  });

  const dati_precompilati: any = useFetch("./MockData/dati_precompilati.json");

  const handlePrecompila = () => {
    if (dati_precompilati) {
      const { dati_utilizzatore } = dati_precompilati.dati_precompilati;
      setFormValues({
        nome: dati_utilizzatore.nome,
        cognome: dati_utilizzatore.cognome,
        mobile: dati_utilizzatore.mobile,
      });
    }
  };

  const handleAutocomplete = (value: any) => {
    if (value) {
      setFormValues({
        nome: value.nome,
        cognome: value.cognome,
        mobile: value.mobile,
      });
    }
  };

  return (
    <form action={formAction}>
      <Box display={"flex"} flexWrap={"wrap"}>
        <div className="flex-100 md:flex-50 !pb-4">
          <TextField
            fullWidth
            name="nome"
            type="text"
            label="Nome/Name"
            value={formValues.nome}
            focused
          />
          <ZodErrors error={formState?.zodErrors?.nome} />
        </div>
        <div className="flex-100 md:flex-50 !pb-4 md:!pl-3">
          <TextField
            fullWidth
            name="cognome"
            type="text"
            value={formValues.cognome}
            label="Cognome/LastName"
            focused
          />
          <ZodErrors error={formState?.zodErrors?.cognome} />
        </div>
        <div className="flex-100 md:flex-50 !pb-4">
          <TextField
            fullWidth
            name="mobile"
            type="number"
            value={formValues.mobile}
            label="Numero/Mobile"
            focused
          />
          <ZodErrors error={formState?.zodErrors?.mobile} />
        </div>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        gap={2}
      >
        <ButtonGroup
          sx={{
            gap: 1,
            flexDirection: isTabletScreen ? "column-reverse" : "row",
            justifyContent: "space-between",
          }}
        >
          <PrecompilaButton onClick={handlePrecompila} />
          <Rubrica
            datiPrecompilati={dati_precompilati}
            onSelect={handleAutocomplete}
          />
        </ButtonGroup>
        <ButtonGroup
          sx={{
            gap: 1,
            flexDirection: isTabletScreen ? "column-reverse" : "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            label={"Cancella"}
            variant="contained"
            id="transition-modal-title"
            onClick={() => setShowModal(false)}
          />
          <Button
            sx={{
              display: "block",
              marginLeft: isTabletScreen ? 0 : "auto",
              marginTop: isTabletScreen ? 1 : 0,
            }}
            type="submit"
            label={"Salva"}
            variant="contained"
          />
        </ButtonGroup>
      </Box>
    </form>
  );
};

export default DatiUtilizzatore;
