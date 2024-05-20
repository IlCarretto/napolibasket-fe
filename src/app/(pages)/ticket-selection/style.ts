"use client";

import { styled } from "@mui/material";

export const RiepilogoWrapper = styled("section")(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: "0.25rem 0.75rem 0",
}));

export const MainRow = styled("div")(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  flexGrow: 1,
}));

export const MenuTotal = styled("div")(({ theme }) => ({
  bottom: 0,
  "& [class^='event-total__']": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .event-total__top": {
    background: theme.palette.secondary.main,
    color: "#FFF",
  },
  "& .event-total__bottom": {
    background: theme.palette.primary.main,
    color: "#000",
    "& button": {},
  },
}));
