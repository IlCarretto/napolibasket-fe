// SettoreAccordion.tsx
import React, { useState } from "react";
import { Box, IconButton, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useEventTotal } from "@/app/context/EventTotalContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { ITicket } from "@/app/context/type";
import { allPricesForSector } from "./utils";
import * as S from "./style";
import { formatCurrency } from "@/app/utils/formatCurrency";


export default function ManualChoice() {
  const { tickets, removeTicket, changeTicket, pricesForSector } = useEventTotal();

  const handleDelete = (ticket: ITicket) => {
    removeTicket(ticket.id)
  }
  const handleChange = (ticket: ITicket) => {
    changeTicket(ticket)
  }
  return (
    <div className="overflow-y-auto md:h-0 flex flex-col grow pe-2">
      {tickets.map((ticket) => (
        <TicketRow ticket={ticket} onDelete={handleDelete} onChangePrice={handleChange} prices={allPricesForSector(ticket.section_id, pricesForSector!)} />
      ))}

    </div>
  );
}

interface TicketRowProps {
  ticket: ITicket,
  prices: { description: ITicket["description"], prevendita: ITicket["prevendita"], commissione: ITicket["commissione"], price: ITicket["price"] }[],
  onDelete: (el: ITicket) => void,
  onChangePrice: (el: ITicket) => void
}

const TicketRow = ({ ticket, onDelete, onChangePrice, prices }: TicketRowProps) => {
  const [price, setPrices] = useState(prices[0])

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    setPrices(JSON.parse(event?.target.value))
    onChangePrice({ ...ticket, ...JSON.parse(event?.target.value) })

  }

  return (
    <S.Row >
      <Typography variant="h6" marginRight={2} marginBottom={0} color={"primary"} >{ticket.sector} Fila: {ticket.line} Posto: {ticket.place}</Typography>
      <S.CustomFormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={JSON.stringify(price)}
          label="Age"
          onChange={(value) => handleChangeSelect(value)}
        >
          {prices.map((elPrice, index: number) => <MenuItem key={index} value={JSON.stringify(elPrice)}>
            <Typography variant="body1" sx={{ color: "black" }}>{elPrice.description} {formatCurrency(elPrice.price,true)}</Typography>
          </MenuItem>)}
        </Select>
      </S.CustomFormControl>
      <Box display={"flex"} alignItems={"center"} >
        <Typography variant="h6" marginLeft={2} marginBottom={0} color={"primary"} > {formatCurrency(ticket.price,true)}</Typography>
        <IconButton onClick={() => onDelete(ticket)}> <DeleteIcon color="primary" /></IconButton>
      </Box>
    </S.Row>
  );
};
