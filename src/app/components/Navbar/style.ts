"use client";

import { Box, List, styled } from "@mui/material";

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
  maxWidth: 1200,
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
    cursor: "pointer",
    "& span": {
      fontWeight: 600,
    },
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));

export const DesktopNav = styled("nav")(() => ({
  "& ul:not(.dropdown-menu)": {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > li": {
      padding: 0,
      textAlign: "center",
      width: "13.33%",
      cursor: "pointer",
      position: "relative",
      transition: "transform .2s",
      zIndex: 1,
      "& a": {
        width: "100%",
      },
      "& span": {
        fontWeight: 600,
      },
      "&:hover": {
        zIndex: 2,
        transform: "scale(1.25)",
        "& .dropdown-menu": {
          display: "flex",
          transform: "scale(0.75)",
        },
      },
      "@media only screen and (min-width: 992px) and (max-width: 1199px)": {
        width: "13.33%",
        "&:nth-last-child(-n+3)": {
          paddingTop: 20,
        },
      },
      "@media only screen and (min-width: 1200px)": {
        width: "10%",
      },
    },
  },
}));

export const Dropdown = styled(List)(({ theme }) => ({
  display: "none",
  position: "absolute",
  top: 28,
  paddingTop: 0,
  flexDirection: "column",
  background: theme.palette.secondary.main,
  paddingBottom: 0,
  "& li": {
    padding: "1rem",
    transition: "all 2.s",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));
