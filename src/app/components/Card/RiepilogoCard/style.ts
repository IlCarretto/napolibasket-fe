"use client";

import { Card, styled } from "@mui/material";

export const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  padding: "0.75rem 0",
  gap: "0.75rem",
  boxShadow: "none",

  "& .MuiCardContent-root, & .MuiCardContent-root:last-child": {
    padding: 0,
    "& svg": {
      width: "0.75em",
      height: "0.75em",
      marginRight: "0.25rem",
    },
  },

  "& .MuiCardMedia-root": {
    "& img": {
      borderRadius: "4px",
    },
  },
}));
