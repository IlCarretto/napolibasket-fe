"use client";

import { Box, styled } from "@mui/material";

export const TicketSelectorButton = styled("button")(() => ({
  fontSize: "0.875rem",
  padding: ".125rem .250rem",
  lineHeight: 1.5,
  background: "#343a40",
}));

export const Row = styled(Box)(() => ({
  borderTop: "1px dashed rgba(0, 0, 0, .250)",
  padding: "0.75rem 0",
}));
