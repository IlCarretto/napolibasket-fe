"use client";

import { Tabs, styled } from "@mui/material";

export const CustomTabs = styled(Tabs)(({}) => ({
  "& .MuiTabs-flexContainer": {
    "& button": {
      borderTop: "1px solid",
      borderColor: "rgba(0, 0, 0, 0.12)",
      marginRight: "auto",
      fontWeight: "600",
    },
  },
}));

export const MapWrapper = styled("div")(() => ({
  marginTop: "1rem",
}));
