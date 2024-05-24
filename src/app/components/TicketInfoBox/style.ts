"use client";

import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import Button from "../Button";

const Wrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
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

export const CustomRadio = styled("span")(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  width: "24px",
  height: "24px",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  cursor: "pointer",
  transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  marginRight: 4,

  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "12px",
    height: "12px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out, background-color 0.3s ease-in-out",
  },
}));

export const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    display: "flex",
    alignItems: "center",
  },
  "& .Mui-checked + .MuiTypography-root .custom-radio::after": {
    opacity: 1,
  },
  "& .Mui-checked .custom-radio": {
    borderColor: theme.palette.primary.main,
  },
  "& .custom-radio:hover": {
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2), 0 1px 7px rgba(0, 0, 0, 0.12)",
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
  flexDirection: "column-reverse",
  "@media only screen and (min-width: 576px)": {
    flexDirection: "row",
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
