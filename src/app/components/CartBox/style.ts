"use client";

import { Alert, Box, keyframes, styled } from "@mui/material";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const CartWrapper = styled(Box)(({ theme }) => ({
  borderRadius: 6,
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "0.75rem",
  background: "#f3f4f6",
}));

export const Timer = styled(Alert)(({ theme }) => ({
  textAlign: "center",
  background: theme.palette.secondary.main,
  borderRadius: 6,
  padding: "0.75rem 1rem",
  position: "relative",
  justifyContent: "center",
  flexDirection: "row-reverse",
  "& .MuiAlert-icon": {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    "& svg": {
      color: theme.palette.primary.main,
    },
  },
  "& .MuiAlert-message": {
    width: "100%",
  },
}));

export const Spin = styled("div")(({ theme }) => ({
  width: "25px",
  height: "25px",
  position: "absolute",
  top: "50%",
  left: "35%",
  marginTop: "-13px",
  marginLeft: "-15px",
  border: `3px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    display: "block",
    width: "3px",
    backgroundColor: `${theme.palette.primary.main}`,
    borderRadius: "1.5px",
    transformOrigin: "50% 0",
  },
  "&:before": {
    height: "8px",
    left: "10px",
    top: "50%",
    animation: `${spinAnimation} 1500ms linear infinite`,
  },
}));

export const Row = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  "& > :nth-child(2)": {
    marginLeft: "auto",
    marginRight: 8,
  },
}));
