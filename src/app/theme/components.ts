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
            background: DARK_BLUE,
            position: "relative",
            "&::before": {
              content: "''",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(255,255,255,.2)",
            },
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
  MuiTextField: {
    styleOverrides: {
      root: {
        "&.contained": {
          "& input": {
            padding: "14px",
          },
          "& label": {
            maxWidth: "none",
            fontSize: 14,
            position: "static",
            transform: "none",
            marginBottom: 2,
          },
          "& fieldset": {
            top: 0,
            border: `1px solid ${DARK_BLUE}`,
            borderWidth: 2,
          },
          "& legend": {
            display: "none",
          },
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      asterisk: { display: "none" },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      asterisk: { display: "none" },
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        "&:not(.MuiMenu-root)": {
          backdropFilter: "blur(5px)",
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        "& .select-placeholder": {
          color: "#c5c8d3",
        },
      },
    },
  },
};

export default components;

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {}
}
