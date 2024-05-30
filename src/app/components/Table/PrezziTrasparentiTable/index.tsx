import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TicketType } from "@/app/constants/constants";

interface TicketData {
  ticket: TicketType;
  prezzo: number;
  prevendita: number;
  commissione: number;
}

function createData(ticket: TicketType): TicketData {
  const prezzo = ticket.includes("Over") ? 15 : 7;
  const prevendita = 0;
  const commissione = 1;
  return { ticket, prezzo, prevendita, commissione };
}

const rows = Object.values(TicketType).map(createData);

export default function PrezziTrasparentiTable() {
  return (
    <TableContainer style={{ maxHeight: 400 }} component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Biglietti</TableCell>
            <TableCell align="right">Prezzo</TableCell>
            <TableCell align="right">Prevendita</TableCell>
            <TableCell align="right">Commissione</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ticket}>
              <TableCell
                sx={{ textTransform: "uppercase" }}
                component="th"
                scope="row"
              >
                {row.ticket}
              </TableCell>
              <TableCell align="right">{row.prezzo}</TableCell>
              <TableCell align="right">{row.prevendita}</TableCell>
              <TableCell align="right">{row.commissione}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
