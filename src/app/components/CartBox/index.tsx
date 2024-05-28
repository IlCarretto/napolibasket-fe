"use client";
import React from "react";
import * as S from "./style";
import {
  Box,
  Divider,
  Tooltip,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useEventTotal } from "@/app/context/EventTotalContext";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../Button";
import { useRouter } from "next/navigation";

const CartBox = () => {
  const theme = useTheme();
  const router = useRouter();

  const { totalTickets, totalPrice } = useEventTotal();

  return (
    <S.CartWrapper
      className="border-solid border-2 border-gray-500 rounded-md p-3"
      color={theme.palette.primary.main}
      sx={{ ".MuiTypography-root": { color: "inherit" } }}
    >
      <S.Timer
        icon={
          <Tooltip title="Completa il tuo acquisto entro il tempo rimasto">
            <InfoIcon />
          </Tooltip>
        }
        severity="info"
      >
        <S.Spin />
        <Box marginLeft={5}>
          <Typography variant="h6" mb={0} lineHeight={1.5}>
            20:00
          </Typography>
        </Box>
      </S.Timer>
      <CartAccordion />
      <S.Row>
        <Typography variant="body2">Commissioni</Typography>
        <Box>{1 * totalTickets},00</Box>
        <Tooltip title="Commissioni title">
          <InfoIcon className="!text-gray-400" />
        </Tooltip>
      </S.Row>
      <Divider />
      <S.Row>
        <Typography variant="h6">Totale</Typography>
        <Box>{totalPrice()},00</Box>
        <Tooltip title="Commissioni title">
          <InfoIcon className="!text-gray-400" />
        </Tooltip>
      </S.Row>
      <Box display="flex" flexDirection="column" gap={1}>
        <Button
          onClick={() => router.push("/payment")}
          label="Procedi con il pagamento"
          variant="contained"
        />
        <Button
          onClick={() => router.push("/ticket-selection")}
          label="Torna agli acquisti"
          variant="outlined"
        />
      </Box>
    </S.CartWrapper>
  );
};

export default CartBox;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0 16px",
  "& h6": {
    fontSize: "14px",
    lineHeight: 2,
  },
}));

const CartAccordion = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const { sectors, totalTickets, totalPrice } = useEventTotal();

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Box>
          <Typography fontSize={14} mb={0} variant="h6">
            NAPOLI BASKET - POZZUOLI BASKET
          </Typography>
          <Box display="flex">
            <Typography variant="body2">
              {totalTickets} {totalTickets > 1 ? "biglietti" : "biglietto"}
            </Typography>
            <DeleteIcon fontSize="small" />
          </Box>
        </Box>
        <Box>
          {totalPrice() > 0 && (
            <Typography mb={0} variant="h5" marginRight={1}>
              {totalPrice()},00
            </Typography>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails className="bg-gray-100">
        {Object.entries(sectors).map(([sector, sectorInfo]) => (
          <>
            <div key={sector}>
              {Object.entries(sectorInfo).map(([ticketType, ticketInfo]) => (
                <div key={ticketType}>
                  {Array.from({ length: ticketInfo.count }).map((_, index) => (
                    <React.Fragment key={index}>
                      <Divider />
                      <Box
                        padding={1}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Typography variant="body2">{ticketType}</Typography>
                          <Typography variant="body2">{sector}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <Typography variant="body2">
                            {ticketInfo.price},00
                          </Typography>
                          <button>
                            <DeleteIcon
                              className="!text-gray-400"
                              fontSize="small"
                            />
                          </button>
                        </Box>
                      </Box>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
