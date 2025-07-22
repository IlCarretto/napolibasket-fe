"use client";

import { Card, styled } from "@mui/material";

export const CustomCard = styled(Card)(({ theme }) => ({
  marginBottom: "8rem",
  width: "60%",
  height: "auto",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "2rem",
  gap: "1rem",
  transition: "all .3s",
  "&:hover": {
    transform: "scale(0.950)",
  },
  cursor: "pointer",
  "@media only screen and (min-width: 768px)": {
    flexWrap: "nowrap",
  },
  boxShadow: "7px 7px 10px 0px rgba(0,0,0,0.5)",
}));
