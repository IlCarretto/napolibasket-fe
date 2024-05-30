"use client";

import { Box, Typography, styled } from "@mui/material";

export const ImageWrapper = styled(Box)(() => ({
  width: "100vw",
  height: "100%",
  position: "relative",
  "& > div": {
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1,
    },
  },
}));

export const Title = styled(Typography)(() => ({
  textAlign: "center",
  textTransform: "uppercase",
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -55%)",
  zIndex: 1,
}));

export const CtaLink = styled("a")(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  background: "#FFF",
  fontSize: 16,
  fontWeight: 600,
  padding: "0.5rem 1.25rem 0.5rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  position: "absolute",
  top: "85%",
  left: "50%",
  transform: "translate(-50%, -70%)",
  zIndex: 1,
  "& svg": {
    color: theme.palette.secondary.main,
    stroke: theme.palette.secondary.main,
  },
}));
