import { ThemeOptions } from "@mui/material";

const breakpoints: ThemeOptions["breakpoints"] = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

export default breakpoints;
