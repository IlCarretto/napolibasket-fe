"use client";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Box, Divider, Tooltip, Typography, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { ITicket } from "@/app/context/type";
import Timer from "../Timer";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { removeTicketFromLocalStorage } from "../../utils/utils";

const CartBox = ({ isPayment }: { isPayment?: boolean }) => {
  const theme = useTheme();
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [startTimer, setStartTimer] = useState<number>(Date.now());
  const [isTicketChange, setIsTicketChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const cart = localStorage.getItem("Cart");
       
      if (!!cart && !!JSON.parse(cart).tickets.length ) {
         const parsedCart = JSON.parse(cart);
        setTickets(parsedCart.tickets);
        setStartTimer(parsedCart.time);
      } else  {
        setTickets([]);
        setStartTimer(0);
        router.push("/ticket-selection");
      }
    }
  }, [isTicketChange]);

  const timeIsOut = () => {
    router.push("/ticket-selection");
  };

  const totalTicketsPrice = () => {
    return tickets.reduce((total, ticket) => total + ticket.price, 0);
  };

  const totalCommissioni = () => {
    return tickets.reduce((total, ticket) => total + ticket.commissione, 0);
  };
  const totalPrice = totalTicketsPrice() + totalCommissioni()

  //TO DO; adesso pulisce tutto il local storage dovrebbe essere gestito per evento
  const deleteAllTickets = () => {
    localStorage.clear();
    setIsTicketChange(!isTicketChange)
  }

  const deleteTicket = async (id: string) => {
    await removeTicketFromLocalStorage(id);
    setIsTicketChange(!isTicketChange);
  };


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
          <Timer startTime={startTimer} minutes={10} handleTimeOut={timeIsOut} />
        </Box>
      </S.Timer>
      <CartAccordion
        tickets={tickets}
        totalTicketsPrice={totalTicketsPrice()}
        handleDeleteAllTickets={deleteAllTickets}
        handleDeleteTicket={deleteTicket}
      />
      <S.Row>
        <Typography variant="body2">Commissioni</Typography>
        <Box>{formatCurrency(totalCommissioni(), true)}</Box>
        <Tooltip title="Commissioni title">
          <InfoIcon className="!text-gray-400" />
        </Tooltip>
      </S.Row>
      <Divider />
      <S.Row>
        <Typography variant="h6">Totale</Typography>
        <Box>{formatCurrency(totalPrice, true)}</Box>
        <Tooltip title="Commissioni title">
          <InfoIcon className="!text-gray-400" />
        </Tooltip>
      </S.Row>
      {!isPayment && (
        <Box display="flex" flexDirection="column" gap={1}>
          <Button
            disabled={!tickets.length}
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
      )}
    </S.CartWrapper>
  );
};

export default CartBox;

interface ICartAccordionProps {
  tickets: ITicket[];
  totalTicketsPrice: number,
  handleDeleteAllTickets: () => void
  handleDeleteTicket: (id: string) => void
}

const CartAccordion = ({
  tickets,
  totalTicketsPrice,
  handleDeleteAllTickets,
  handleDeleteTicket
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
            <Typography mb={0} variant="h6" marginX={1} minWidth={"max-content"} >
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
                <Typography variant="body2">  {formatCurrency(elTicket.price, true)}</Typography>
                <button>
                  <DeleteIcon onClick={() => handleDeleteTicket(elTicket.id)} className="!text-gray-400" fontSize="small" />
                </button>
              </Box>
            </Box>
          </div>
        ))}
      </S.CartAccordionDetails>
    </S.CartAccordion>
  );
};
