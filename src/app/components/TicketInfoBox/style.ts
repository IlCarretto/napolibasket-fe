"use client";

import { Box, FormControl, Grid, styled } from "@mui/material";
import Button from "../Button";

const Wrapper = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 6,
  marginBottom: 24,
  "& h5": {
    textTransform: "uppercase",
    marginBottom: 16,
  },
}));

export const TicketInfoWrapper = styled(Wrapper)(() => ({}));

export const RemoveButton = styled(Button)(() => ({
  fontSize: 10,
  lineHeight: 1.2,
  alignSelf: "flex-end",
  bottom: 8,
  "@media only screen and (min-width: 576px)": {
    position: "absolute",
    right: 20,
    bottom: 18,
  },
}));

export const CodiceScontoWrapper = styled(Wrapper)(() => ({}));

export const DatiFatturazioneWrapper = styled(Wrapper)(() => ({}));

export const CustomGrid = styled(Grid)(() => ({
  "& .MuiFormControl-root": {
    width: "100%",
  },
  "& .MuiGrid-grid-xs-12": {
    marginBottom: 16,
    background: "#FFF",
  },
  "@media only screen and (min-width: 576px)": {
    "& .MuiGrid-grid-xs-12:first-child": {
      paddingRight: 8,
    },
    "& .MuiGrid-grid-xs-12:last-child": {
      paddingLeft: 8,
    },
  },
}));

export const CustomFirstGrid = styled(Grid)(() => ({
  "& > :first-child": {
    background: "#FFF",
  },
  gap: 8,
  flexDirection: "column-reverse",
  "@media only screen and (min-width: 576px)": {
    flexDirection: "row",
    gap: 0,
  },
}));

export const CustomFormControl = styled(FormControl)(({ theme }) => ({
  "& input": {
    padding: "14px",
  },
  "& label": {
    maxWidth: "none",
    fontSize: 14,
    position: "static",
    transform: "none",
    marginBottom: 2,
  },
  "& fieldset": {
    top: 0,
    border: `1px solid ${theme.palette.primary.main}`,
    borderWidth: 2,
  },
  "& legend": {
    display: "none",
  },
  "& .MuiInputBase-root": {
    width: "100%",
  },
}));
