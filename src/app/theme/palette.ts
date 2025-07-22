import { ThemeOptions } from "@mui/material";

export const DARK_BLUE = "#062F6E";
export const LIGHT_BLUE = "#1D9ADD";

const palette: ThemeOptions["palette"] = {
  accent: "#FFF",
  primary: {
    main: DARK_BLUE,
  },
  secondary: {
    main: LIGHT_BLUE,
  },
  text: {
    primary: DARK_BLUE,
    secondary: LIGHT_BLUE,
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    accent: string;
  }

  interface PaletteOptions {
    accent?: string;
  }
}

export default palette;
