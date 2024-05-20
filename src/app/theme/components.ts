import { ThemeOptions } from "@mui/material";
import { DARK_BLUE, LIGHT_BLUE } from "./palette";

const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: "uppercase",
      },
    },
    variants: [
      {
        props: { variant: "contained" },
        style: {
          background: DARK_BLUE,
          color: "#FFF",
          "&:hover": {
            background: "#FFF",
            color: DARK_BLUE,
            border: `1px solid ${DARK_BLUE}`,
          },
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          background: "#FFF",
          color: DARK_BLUE,
          "&:hover": {
            background: DARK_BLUE,
            color: "#FFF",
            border: "1px solid #FFF",
          },
        },
      },
    ],
  },
};

export default components;

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {}
}
