"use client";
import { Box, styled } from "@mui/material";

export const OrderRow = styled("div")(({}) => ({
  "& button": {
    padding: "0 0.25rem",
    "& svg": {
      height: "24px",
    },
    "&:first-child": {
      "& svg:first-of-type": {
        color: "#9ca3af",
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

  "& .MuiCardContent-root": {
    padding: 0,
  },
}));
