"use client";

import { FormControlLabel, styled } from "@mui/material";

export const CustomRadio = styled("span")(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  width: "24px",
  height: "24px",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  cursor: "pointer",
  transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  marginRight: 4,

  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "12px",
    height: "12px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out, background-color 0.3s ease-in-out",
  },
}));

export const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    display: "flex",
    alignItems: "center",
  },
  "& .Mui-checked + .MuiTypography-root .custom-radio::after": {
    opacity: 1,
  },
  "& .Mui-checked .custom-radio": {
    borderColor: theme.palette.primary.main,
  },
  "& .custom-radio:hover": {
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2), 0 1px 7px rgba(0, 0, 0, 0.12)",
  },
}));
