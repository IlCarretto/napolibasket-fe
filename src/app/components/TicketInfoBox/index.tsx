"use client";
import React, { useEffect, useState } from "react";
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
  useTheme,
} from "@mui/material";
import theme from "@/app/theme";
import TicketIcon from "@/app/../../public/ticket-blu.svg";
import Image from "next/image";
import DatiUtilizzatoreModal from "../Modal/DatiUtilizzatoreModal";
import Button from "../Button";
import PrecompilaButton from "../Button/PrecompilaButton";
import CustomRadio from "../Radio";
import { useRouter } from "next/navigation";
import { ITicket } from "@/app/context/type";

const TicketInfoBox = () => {
  const theme = useTheme();
  const router = useRouter();
  const handleDelete = () => {
    localStorage.clear()

    router.push("/ticket-selection")
  }
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
          <S.RemoveButton variant="outlined" onClick={handleDelete} label={"Elimina"} />
        </Box>
        <Box
          padding={"0.75rem"}
          color={theme.palette.primary.main}
          sx={{ ".MuiTypography-root": { color: "inherit" } }}
        >
        </Box>
        <Box
          padding={"0.75rem"}
          color={theme.palette.primary.main}
          sx={{
            ".MuiTypography-root": { color: "inherit" }
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


const DatiUtilizzatore = () => {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState<ITicket[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const cart = localStorage.getItem("Cart");

      if (!!cart && !!JSON.parse(cart).tickets.length) {
        const parsedCart = JSON.parse(cart);
        setTickets(parsedCart.tickets);
      }
    }
  }, []);

  return (
    <>
      <Typography variant="h6">Informazioni Aggiuntive</Typography>
      {tickets.map((elTicket) => <Box
        key={elTicket.id}
        marginY={2}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box display={"flex"}>
          <Image src={TicketIcon.src} alt="Ticket" width={25} height={25} />
          <Box>
            <Typography variant="h6">{elTicket.description}</Typography>
            <Typography variant="body2">{elTicket.sector} Fila {elTicket.line} Posto {elTicket.place}</Typography>
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
      </Box>)}
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
    personaFisica: "Persona fisica",
    country: "Italy",
    provincia: "Poggioreale",
    comune: "Pippolandia",
    cap: "80143",
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
              name="personaFisica"
              value={inputs.personaFisica}
              onChange={handleChange}
              labelId="persona-fisica-label"
              id="persona-fisica"
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
          <PrecompilaButton />
        </Grid>
      </S.CustomFirstGrid>
      <S.CustomGrid container>
        <Grid xs={12} sm={6}>
          <TextField className="contained" placeholder="Nome" />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField className="contained" placeholder="Cognome" />
        </Grid>
      </S.CustomGrid>
      <S.CustomGrid container>
        <Grid xs={12} sm={8}>
          <TextField className="contained" placeholder="Indirizzo" />
        </Grid>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              name="country"
              value={inputs.country}
              onChange={handleChange}
              label="Country"
              labelId="country-label"
              id="country"
            >
              <MenuItem
                value={"Italy"}
                sx={{ color: theme.palette.primary.main }}
              >
                Italy
              </MenuItem>
              <MenuItem
                value={"Mugnano"}
                sx={{ color: theme.palette.primary.main }}
              >
                Mugnano
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
      </S.CustomGrid>
      <S.CustomGrid container>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              name="provincia"
              value={inputs.provincia}
              onChange={handleChange}
              label="Provincia"
              labelId="provincia-label"
              id="provincia"
            >
              <MenuItem
                value={"Poggioreale"}
                sx={{ color: theme.palette.primary.main }}
              >
                Poggioreale
              </MenuItem>
              <MenuItem
                value={"Bacoli"}
                sx={{ color: theme.palette.primary.main }}
              >
                Bacoli
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
              name="comune"
              value={inputs.comune}
              onChange={handleChange}
              label="Comune"
              labelId="comune-label"
              id="comune"
            >
              <MenuItem
                value={"Pippolandia"}
                sx={{ color: theme.palette.primary.main }}
              >
                Pippolandia
              </MenuItem>
              <MenuItem
                value={"Altro"}
                sx={{ color: theme.palette.primary.main }}
              >
                Altro
              </MenuItem>
            </Select>
          </S.CustomFormControl>
        </Grid>
        <Grid xs={12} sm={4}>
          <S.CustomFormControl fullWidth className="contained">
            <Select
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
          <TextField className="contained" placeholder="Codice fiscale" />
        </Grid>
        <Grid xs={12} sm={4}>
          <TextField className="contained" placeholder="PEC (opzionale)" />
        </Grid>
        <Grid xs={12} sm={4}>
          <TextField
            className="contained"
            placeholder="Codice SDI (opzionale)"
          />
        </Grid>
      </S.CustomGrid>
    </S.DatiFatturazioneWrapper>
  );
};
