"use client";

import { Tabs, styled } from "@mui/material";

export const CustomTabs = styled(Tabs)(({}) => ({
  "& .MuiTabs-flexContainer": {
    "& button": {
      marginRight: "auto",
      fontWeight: "600",
      "&:not(:first-child)": {
        borderTop: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.12)",
      },
    },
  },
  "& .MuiTabScrollButton-root": {
    display: "none",
  },
}));

export const MapWrapper = styled("div")(() => ({
  marginTop: "1rem",
}));
