import { ThemeOptions } from "@mui/material";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTypographyStyle: TypographyStyleOptions = {
  lineHeight: 1,
  fontWeight: 700,
  marginBottom: "0.5rem",
};

const defaultTypographyColor: TypographyStyleOptions = {
  color: "#FFF",
};

const typography: ThemeOptions["typography"] = {
  fontFamily: montserrat?.style.fontFamily,
  h1: {
    fontSize: "40px",
    ...defaultTypographyStyle,
    ...defaultTypographyColor,
  },
  h2: {
    fontSize: "32px",
    ...defaultTypographyStyle,
    ...defaultTypographyColor,
  },
  h3: {
    fontSize: "28px",
    ...defaultTypographyStyle,
    ...defaultTypographyColor,
  },
  h4: {
    fontSize: "24px",
    ...defaultTypographyStyle,
    ...defaultTypographyColor,
  },
  h5: {
    fontSize: "20px",
    ...defaultTypographyStyle,
    ...defaultTypographyColor,
  },
  h6: {
    fontSize: "18px",
    ...defaultTypographyStyle,
    ...defaultTypographyColor,
  },
  body1: {
    fontSize: "16px",
    ...defaultTypographyColor,
  },
  body2: {
    fontSize: "14px",
    ...defaultTypographyColor,
  },
};

export default typography;
