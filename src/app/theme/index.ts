"use client";
import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import components from "./components";
import breakpoints from "./breakpoints";

const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints
});

export default theme;
