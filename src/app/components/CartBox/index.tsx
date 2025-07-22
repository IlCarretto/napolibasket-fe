"use client";
import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import {
  Box,
  Checkbox,
  CircularProgress,
  Divider,
  FormGroup,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { ITicket } from "@/app/context/type";
import Timer from "../Timer";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { CustomFormControlLabel } from "../Radio/style";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { useClearEvents, useRemoveTicket } from "@/app/context/hooks";

const CartBox = ({ isPayment }: { isPayment?: boolean }) => {
  const theme = useTheme();
  const router = useRouter();
  const { startTimer, tickets } = useEventTotal();
  const [checked, setChecked] = useState(false);
  const clearEvents = useClearEvents();
  const removeTicket = useRemoveTicket();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [returnLoading, setReturnLoading] = useState(false);
  const [returnSuccess, setReturnSuccess] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handlePaymentButton = () => {
    if (!paymentLoading) {
      setPaymentSuccess(false);
      setPaymentLoading(true);
      timer.current = setTimeout(() => {
        setPaymentSuccess(true);
        setPaymentLoading(false);
        router.push("/payment");
      }, 2000);
    }
  };

  const handleReturnButton = () => {
    if (!returnLoading) {
      setReturnSuccess(false);
      setReturnLoading(true);
      timer.current = setTimeout(() => {
        setReturnSuccess(true);
        setReturnLoading(false);
        router.push("/ticket-selection");
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const totalTicketsPrice = () => {
    return tickets.reduce((total, ticket) => total + ticket.price, 0);
  };

  const totalCommissioni = () => {
    return tickets.reduce((total, ticket) => total + ticket.commissione, 0);
  };

  const totalPrice = totalTicketsPrice() + totalCommissioni();

  //TO DO; adesso pulisce tutto il local storage dovrebbe essere gestito per evento
  const deleteAllTickets = () => {
    clearEvents();
    router.push("/ticket-selection");
  };

  const deleteTicket = async (id: string) => {
    removeTicket(id);
    if (tickets.length < 2) {
      clearEvents();
      router.push("/ticket-selection");
    }
  };

  return (
    <S.CartWrapper
      className={`border-solid border-2 border-gray-500 rounded-md p-3 ${
        !isPayment ? "" : "flex flex-col h-full justify-between"
      }`}
      color={theme.palette.primary.main}
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
          <Timer startTime={startTimer} minutes={10} />
        </Box>
      </S.Timer>
      <CartAccordion
        tickets={tickets}
        totalTicketsPrice={totalTicketsPrice()}
        handleDeleteAllTickets={deleteAllTickets}
        handleDeleteTicket={deleteTicket}
      />
      <S.Row sx={{ paddingY: isPayment ? "0" : "1rem" }}>
        <Typography variant="body2">Commissioni</Typography>
        <Box>{formatCurrency(totalCommissioni(), true)}</Box>
        <Tooltip title="Commissioni title">
          <InfoIcon className="!text-gray-400" />
        </Tooltip>
      </S.Row>
      <Divider />
      <S.Row sx={{ paddingY: isPayment ? "0" : "1rem" }}>
        <Typography variant="h6">Totale</Typography>
        <Box>{formatCurrency(totalPrice, true)}</Box>
        <Tooltip title="Commissioni title">
          <InfoIcon className="!text-gray-400" />
        </Tooltip>
      </S.Row>
      {!isPayment && (
        <Box mb={1} sx={{ color: "unset" }}>
          <FormGroup>
            <CustomFormControlLabel
              sx={{
                "& .MuiSvgIcon-root": { color: theme.palette.primary.main },
              }}
              required
              control={<Checkbox checked={checked} onChange={handleChange} />}
              label={
                <Typography ml={0} fontSize={12}>
                  Dichiaro di aver letto ed accetti integralmente le 'Condizioni
                  generali' per l'utilizzo del servizio
                </Typography>
              }
            />
          </FormGroup>
        </Box>
      )}
      {!isPayment && (
        <Box display="flex" flexDirection="column" gap={1}>
          <Button
            disabled={!tickets.length || !checked}
            onClick={handlePaymentButton}
            label="Procedi con il pagamento"
            variant="contained"
            startIcon={
              paymentLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "#FFF",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )
            }
          />
          <Button
            onClick={handleReturnButton}
            label="Torna agli acquisti"
            variant="outlined"
            startIcon={
              returnLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: theme.palette.primary.main,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                    "&:hover": {
                      color: "#FFF",
                    },
                  }}
                />
              )
            }
          />
        </Box>
      )}
    </S.CartWrapper>
  );
};

export default CartBox;

interface ICartAccordionProps {
  tickets: ITicket[];
  totalTicketsPrice: number;
  handleDeleteAllTickets: () => void;
  handleDeleteTicket: (id: string) => void;
}

const CartAccordion = ({
  tickets,
  totalTicketsPrice,
  handleDeleteAllTickets,
  handleDeleteTicket,
}: ICartAccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const totalTickets = tickets.length;

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <S.CartAccordion
      disableGutters
      elevation={0}
      square
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <S.CartAccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      >
        <Box>
          <Typography fontSize={14} mb={0} variant="h6">
            Gevi Napoli Basket vs Givova Scafati Basket
          </Typography>
          <Box display="flex" mt={1}>
            <Typography variant="body2">
              {totalTickets} {totalTickets > 1 ? "biglietti" : "biglietto"}
            </Typography>
            <DeleteIcon onClick={handleDeleteAllTickets} fontSize="small" />
          </Box>
        </Box>
        <Box>
          {totalTicketsPrice > 0 && (
            <Typography
              mb={0}
              variant="h6"
              marginX={1}
              minWidth={"max-content"}
            >
              {formatCurrency(totalTicketsPrice, true)}
            </Typography>
          )}
        </Box>
      </S.CartAccordionSummary>
      <S.CartAccordionDetails className="bg-gray-100">
        {tickets.map((elTicket: ITicket) => (
          <div key={elTicket.id}>
            <Divider />
            <Box
              padding={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="body2">{elTicket.description}</Typography>
                <Typography variant="body2">{elTicket.sector}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body2">
                  {" "}
                  {formatCurrency(elTicket.price, true)}
                </Typography>
                <button>
                  <DeleteIcon
                    onClick={() => handleDeleteTicket(elTicket.id)}
                    className="!text-gray-400"
                    fontSize="small"
                  />
                </button>
              </Box>
            </Box>
          </div>
        ))}
      </S.CartAccordionDetails>
    </S.CartAccordion>
  );
};
