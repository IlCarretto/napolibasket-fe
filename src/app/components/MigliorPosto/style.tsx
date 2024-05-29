"use client";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { Accordion, AccordionSummary, Box } from "@mui/material";


export const StyledAccordionDetailsTicketSelectorButton = styled("button")(() => ({
  fontSize: "0.875rem",
  padding: ".125rem .250rem",
  lineHeight: 1.5,
  background: "#343a40",
}));

export const StyledAccordionDetailsRow = styled(Box)(() => ({
  borderTop: "1px dashed rgba(0, 0, 0, .250)",
  padding: "0.75rem 0",
}));


export const StyledAccordion = styled(Accordion)(({ theme }) => ({
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

export const StyledAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0 16px",
  "& h6": {
    fontSize: "14px",
    lineHeight: 2,
  },
}));


export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background: "#f3f4f6",
  "& .MuiSvgIcon-root": {
    fill: "gray",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    justifyContent: "space-between",
    alignItems: "center",
  },
}));



export const TicketSelectorButton = styled("button")(() => ({
  fontSize: "0.875rem",
  padding: ".125rem .250rem",
  lineHeight: 1.5,
  background: "#343a40",
}));

export const Row = styled(Box)(() => ({
  borderTop: "1px dashed rgba(0, 0, 0, .250)",
  padding: "0.75rem 0",
}));


export const DecorationTitle = styled(Box)(({ theme }) => ({
  borderRadius: 5,
  width: "20px",
  minHeight: "20px",
  marginRight: "0.5rem",
  transition: "all 0.1s ease-out, height 0.5s ease-out",
}));