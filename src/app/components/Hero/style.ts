"use client";
import { styled } from "@mui/material";

export const Hero = styled("section")(({ theme }) => ({
  display: "flex",
  borderTop: `5px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.primary.main,
  height: "45vh",
  "& img": {
    width: "50px",
    borderRadius: "0.25rem",
    marginRight: "1rem",
  },
}));
