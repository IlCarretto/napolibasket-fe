"use client";

import { styled } from "@mui/material";

export const RiepilogoWrapper = styled("section")(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: "0.25rem 0.75rem 0",
}));

export const MainRow = styled("div")(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: "0 0.75rem",
}));
