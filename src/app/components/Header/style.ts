"use client";

import { Container, styled } from "@mui/material";

export const Header = styled("header")(() => ({
  background: "rgba(0,0,0,.9)",
  position: "sticky",
  top: 0,
  zIndex: 10,
  height: 66,
}));

export const CustomContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  "& img": {
    width: "100%",
    height: 60,
    objectFit: "contain",
  },
  "& a:first-child": {
    "& img": {
      width: "100%",
      height: 60,
      "@media only screen and (min-width: 768px)": {
        height: "100%",
        width: 200,
      },
    },
  },
}));

export const LoginButton = styled("button")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  color: "#FFF",
  fontSize: 14,
}));
