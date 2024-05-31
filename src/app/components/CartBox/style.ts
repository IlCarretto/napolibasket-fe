"use client";

import { Alert, Box, keyframes, Accordion, styled, AccordionSummary, AccordionDetails } from "@mui/material";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const CartWrapper = styled(Box)(() => ({
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


export const CartAccordion = styled(Accordion)(()=> ({
  borderTop: `1px solid rgba(0, 0, 0, .250)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  "& .MuiTypography-root": {
    color: "#444",
  },
}));

export const CartAccordionSummary =styled(AccordionSummary)(()=> ({
  background: "#f3f4f6",
  "& .MuiSvgIcon-root": {
    fill: "gray",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-root": {
    padding: 0,
  },
  "& .MuiAccordionSummary-content": {
    justifyContent: "space-between",
    alignItems: "center",
  },
}));




export const CartAccordionDetails = styled(AccordionDetails)(()=> ({
  padding: "0 16px",
  "& h6": {
    fontSize: "14px",
    lineHeight: 2,
  },
}));
