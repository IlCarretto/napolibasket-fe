"use client";

import { styled } from "@mui/material";

export const Section = styled("section")(({ theme }) => ({
  "& h1, & h2, & h3, & h4, & h5, & h6, & p, & span": {
    color: theme.palette.primary.main,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
}));

export const EventPoster = styled("div")(({ theme }) => ({
  "& img": {},
}));

export const ParagraphRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  "& p": {
    margin: "0.25rem 0",
  },
}));

export const EventContent = styled("div")(({ theme }) => ({
  "& .button-group": {
    "& h5": {
      marginBottom: "1rem",
      "@media only screen and (min-width: 1280px)": {
        marginBottom: "2rem",
      },
    },
  },
}));
