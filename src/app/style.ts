"use client";
import { Container, styled } from "@mui/material";
import Link from "next/link";

export const CustomContainer = styled(Container)(({}) => ({
  display: "flex",
  "& button": {
    padding: "0 0.25rem",
    "& svg": {
      height: "24px",
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
  height: "100%",
  borderLeft: `10px solid ${theme.palette.secondary.main}`,
  borderRight: `10px solid ${theme.palette.secondary.main}`,
  "& .MuiCardContent-root": {
    padding: 0,
  },
}));

export const ALink = styled(Link)(({ theme }) => ({
  color: "#FFF",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: theme.palette.secondary.main,
  },
}));
