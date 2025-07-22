"use client";
import { Container, styled } from "@mui/material";
import Link from "next/link";

export const CustomContainer = styled(Container)(({}) => ({
  display: "flex",
  "& button": {
    padding: "0 0.25rem",
    "& svg": {
      height: "24px",
      color: "inherit",
    },
    "&:last-child": {
      "& svg": {
        color: "unset",
      },
    },
  },
}));

export const BgMainWrapper = styled("section")(({ theme }) => ({
  backgroundImage:
    "url('https://napolibasket.it/wp-content/uploads/2023/09/campo-up.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  borderLeft: `10px solid ${theme.palette.secondary.main}`,
  borderRight: `10px solid ${theme.palette.secondary.main}`,
  borderBottom: "10px solid #FFF",
  "& .MuiCardContent-root": {
    padding: 0,
  },
  minHeight: "100vh",
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ALink = styled(Link)(({ theme }) => ({
  color: "#FFF",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.secondary.main,
  },
}));

export const ClassificaWrapper = styled("div")(() => ({
  width: "100%",
}));
