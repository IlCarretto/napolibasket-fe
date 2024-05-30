"use client";

import { Box, styled } from "@mui/material";

export const Wrapper = styled("section")(() => ({
  top: "20%",
  left: "50%",
  zIndex: 2,
  transform: "translate(-50%, -50%)",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

export const NavWrapper = styled("div")(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: "20px 0",
  flexGrow: 1,
  maxWidth: 900,
  textAlign: "center",
  position: "relative",
}));

export const MobileNav = styled("nav")(({ theme }) => ({
  background: theme.palette.secondary.main,
  position: "absolute",
  width: "90%",
  left: "50%",
  transform: "translateX(-50%)",
  top: 43,
  "& ul": {
    paddingBottom: 0,
  },
  "& li": {
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));

export const DesktopNav = styled("nav")(() => ({
  "& ul": {
    display: "flex",
    justifyContent: "center",
    "& li": {
      padding: 0,
      textAlign: "center",
    },
  },
}));
