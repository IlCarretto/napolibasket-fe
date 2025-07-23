"use client";

import { styled } from "@mui/material";

export const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundImage:
    "url('https://napolibasket.it/wp-content/uploads/2023/09/background-footer.jpg')",
  backgroundColor: theme.palette.secondary.main,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: "1rem 0",
  "@media only screen and (min-width: 768px)": {
    display: "flex",
    justifyContent: "end",
  },
}));

export const Card = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: "2rem",
  "& h2": {
    textTransform: "uppercase",
  },
  "& span": {
    fontWeight: 600,
    fontSize: 18,
  },
  "& li": {
    gap: 8,
    "& .MuiListItemIcon-root": {
      minWidth: "auto",
    },
  },
  "@media only screen and (min-width: 768px)": {
    flexGrow: 1,
    width: "100%",
    wordWrap: "break-word",
  },
}));
