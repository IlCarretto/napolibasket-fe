"use client";
import React, { useState } from "react";
import * as S from "./style";
import RiepilogoCard from "../Card/RiepilogoCard";
import {
  Alert,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  inputClasses,
  useTheme,
} from "@mui/material";
import theme from "@/app/theme";
import TicketIcon from "@/app/../../public/ticket-blu.svg";
import Image from "next/image";
import DatiUtilizzatoreModal from "../Modal/DatiUtilizzatoreModal";
import Button from "../Button";
import PrecompilaButton from "../Button/PrecompilaButton";
import CustomRadio from "../Radio";
import { useFetch } from "@/app/hooks/useFetch";

const TicketInfoBox = () => {
  const theme = useTheme();
  return (
    <>
      <S.TicketInfoWrapper>
        <Box
          position={"relative"}
          borderRadius={"4px 4px 0 0"}
          bgcolor={theme.palette.primary.main}
          padding={"0.25rem 1.25rem"}
          display="flex"
          flexDirection="column"
        >
          <RiepilogoCard />
          <S.RemoveButton variant="outlined" label={"Elimina"} />
        </Box>
        <Box
          padding={"0.75rem"}
          color={theme.palette.primary.main}
          sx={{ ".MuiTypography-root": { color: "inherit" } }}
        >
          <ConsegnaBiglietti />
        </Box>
        <Box
          padding={"0.75rem"}
          color={theme.palette.primary.main}
          sx={{
            ".MuiTypography-root": { color: "inherit" },
            borderTop: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <DatiUtilizzatore />
        </Box>
      </S.TicketInfoWrapper>
      <CodiceSconto />
      <DatiFatturazione />
    </>
  );
};

export default TicketInfoBox;

const ConsegnaBiglietti = () => {
  const theme = useTheme();
  const [value, setValue] = useState("biglietto-elettronico");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const options = [
    { label: "biglietto elettronico", value: "biglietto-elettronico" },
    { label: "stampa a casa", value: "stampa-a-casa" },
  ];

  return (
    <>
      <Typography variant="h6">Consegna Biglietti</Typography>
      <Box display="flex" flexDirection="column">
        <FormControl>
          <FormLabel
            id="consegna-biglietti"
            sx={{ color: theme.palette.primary.main, fontSize: 14 }}
          >
            Indica come preferisci ricevere i biglietti
          </FormLabel>
          <Divider sx={{ display: "flex", margin: "0.75rem 0" }} />
          <RadioGroup
            value={value}
            onChange={handleChange}
            name="consegna-biglietti"
            sx={{ flexDirection: "row", padding: "0 0.75rem", gap: 2 }}
          >
            {options.map((option) => (
              <CustomRadio
                key={option.value}
                value={option.value}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

const DatiUtilizzatore = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Typography variant="h6">Informazioni Aggiuntive</Typography>
      <Divider sx={{ margin: "0.75rem 0" }} />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box display={"flex"}>
          <Image src={TicketIcon.src} alt="Ticket" width={25} height={25} />
          <Box>
            <Typography variant="h6">Intero over 24</Typography>
            <Typography variant="body2">SETTORE 1 Fila D Posto 30</Typography>
          </Box>
        </Box>
        <Alert
          sx={{
            cursor: "pointer",
            justifyContent: "center",
            "@media only screen and (min-width: 576px)": {
              justifyContent: "start",
            },
          }}
          onClick={() => setShowModal(true)}
          variant="filled"
          severity="warning"
        >
          Inserire dati utilizzatore
        </Alert>
      </Box>
      <DatiUtilizzatoreModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

const CodiceSconto = () => {
  const label =
    "Se sei in possesso di una Vivacard o un voucher inseriscilo in questa sezione";

  return (
    <S.CodiceScontoWrapper
      padding={"1.25rem"}
      color={theme.palette.primary.main}
      sx={{ ".MuiTypography-root": { color: "inherit" } }}
    >
      <Typography variant="h6">
        Utilizza un codice sconto (facoltativo)
      </Typography>
      <Box display={"flex"} gap={2} flexDirection={{ xs: "column", sm: "row" }}>
        <TextField
          className="contained"
          sx={{
            "& label": {
              paddingBottom: 1,
              overflow: "initial",
              whiteSpace: "normal",
              "@media only screen and (min-width: 820px)": {
                whiteSpace: "nowrap",
              },
            },
          }}
          placeholder="Codice sconto"
          label={label}
          focused
        />
        <Button
          className="w-full sm:w-1/4"
          sx={{ alignSelf: "flex-end", height: 50, fontSize: 12 }}
          label={"Conferma"}
          variant="contained"
        />
      </Box>
    </S.CodiceScontoWrapper>
  );
};

const DatiFatturazione = () => {
  const theme = useTheme();
  const [inputs, setInputs] = useState({
    persona_type: "",
    nome: "",
    cognome: "",
    indirizzo: "",
    country: "",
    provincia: "",
    comune: "",
    cap: "",
    codice_fiscale: "",
    pec: "",
    codice_sdi: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const name = event.target.name as string;
    const value = event.target.value as string;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const dati_precompilati: any = useFetch("./MockData/dati_precompilati.json");

  const handlePrecompila = () => {
    if (dati_precompilati && dati_precompilati.dati_precompilati) {
      const { fatturazione } = dati_precompilati.dati_precompilati;
      setInputs({
        persona_type: fatturazione.persona_type,
        nome: fatturazione.nome,
        cognome: fatturazione.cognome,
        indirizzo: fatturazione.indirizzo,
        country: fatturazione.country,
        provincia: fatturazione.provincia,
        comune: fatturazione.comune,
        cap: fatturazione.cap,
        codice_fiscale: fatturazione.codice_fiscale,
        pec: "",
        codice_sdi: "",
      });
    }
  };

  return (
    <S.DatiFatturazioneWrapper
      padding={"1.25rem"}
      color={theme.palette.primary.main}
      sx={{ ".MuiTypography-root": { color: "inherit" } }}
    >
      <Typography variant="h6">Dati di fatturazione</Typography>
      <S.CustomFirstGrid container mb={2}>
        <Grid xs={12} sm={6}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              displayEmpty
              renderValue={(val) => {
                if (val === "") {
                  return <span className="select-placeholder">Individuo</span>;
                }
                return val;
              }}
              name="persona_type"
              value={inputs.persona_type}
              onChange={handleChange}
              labelId="persona_type-label"
              id="persona_type"
            >
              <MenuItem
                value={"Persona fisica"}
                sx={{ color: theme.palette.primary.main }}
              >
                Persona fisica
              </MenuItem>
              <MenuItem
                value={"Società"}
                sx={{ color: theme.palette.primary.main }}
              >
                Società
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
        <Grid xs={12} sm={6} alignSelf={"flex-end"} textAlign={"end"}>
          <PrecompilaButton onClick={handlePrecompila} />
        </Grid>
      </S.CustomFirstGrid>
      <S.CustomGrid container>
        <Grid xs={12} sm={6}>
          <TextField
            value={inputs.nome}
            name="nome"
            className="contained"
            placeholder="Nome"
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            value={inputs.cognome}
            name="cognome"
            className="contained"
            placeholder="Cognome"
          />
        </Grid>
      </S.CustomGrid>
      <S.CustomGrid container>
        <Grid xs={12} sm={8}>
          <TextField
            value={inputs.indirizzo}
            name="indirizzo"
            className="contained"
            placeholder="Indirizzo"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              displayEmpty
              renderValue={(val) => {
                if (val === "") {
                  return <span className="select-placeholder">Paese</span>;
                }
                return val;
              }}
              name="country"
              value={inputs.country}
              onChange={handleChange}
              label="Country"
              labelId="country-label"
              id="country"
            >
              <MenuItem
                value={"Italia"}
                sx={{ color: theme.palette.primary.main }}
              >
                Italia
              </MenuItem>
              <MenuItem
                value={"Inghilterra"}
                sx={{ color: theme.palette.primary.main }}
              >
                Inghilterra
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
      </S.CustomGrid>
      <S.CustomGrid container>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              displayEmpty
              renderValue={(val) => {
                if (val === "") {
                  return <span className="select-placeholder">Provincia</span>;
                }
                return val;
              }}
              name="provincia"
              value={inputs.provincia}
              onChange={handleChange}
              label="Provincia"
              labelId="provincia-label"
              id="provincia"
            >
              <MenuItem
                value={"Napoli"}
                sx={{ color: theme.palette.primary.main }}
              >
                Napoli
              </MenuItem>
              <MenuItem
                value={"Salerno"}
                sx={{ color: theme.palette.primary.main }}
              >
                Salerno
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              displayEmpty
              renderValue={(val) => {
                if (val === "") {
                  return <span className="select-placeholder">Comune</span>;
                }
                return val;
              }}
              name="comune"
              value={inputs.comune}
              onChange={handleChange}
              label="Comune"
              labelId="comune-label"
              id="comune"
            >
              <MenuItem
                value={"Torre del Greco"}
                sx={{ color: theme.palette.primary.main }}
              >
                Torre del Greco
              </MenuItem>
              <MenuItem
                value={"Pozzuoli"}
                sx={{ color: theme.palette.primary.main }}
              >
                Pozzuoli
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              displayEmpty
              renderValue={(val) => {
                if (val === "") {
                  return <span className="select-placeholder">CAP</span>;
                }
                return val;
              }}
              name="cap"
              value={inputs.cap}
              onChange={handleChange}
              label="Cap"
              labelId="cap-label"
              id="cap"
            >
              <MenuItem
                value={"80143"}
                sx={{ color: theme.palette.primary.main }}
              >
                80143
              </MenuItem>
              <MenuItem
                value={"80059"}
                sx={{ color: theme.palette.primary.main }}
              >
                80059
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
      </S.CustomGrid>
      <S.CustomGrid container>
        <Grid xs={12} sm={4}>
          <TextField
            value={inputs.codice_fiscale}
            name="codice_fiscale"
            className="contained"
            placeholder="Codice fiscale"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <TextField
            value={inputs.pec}
            name="pec"
            className="contained"
            placeholder="PEC (opzionale)"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <TextField
            value={inputs.codice_sdi}
            name="codice_sdi"
            className="contained"
            placeholder="Codice SDI (opzionale)"
          />
        </Grid>
      </S.CustomGrid>
    </S.DatiFatturazioneWrapper>
  );
};
