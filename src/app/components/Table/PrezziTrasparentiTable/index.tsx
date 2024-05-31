import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IPriceForSection } from "@/app/context/type";
import { formatCurrency } from "@/app/utils/formatCurrency";

interface IPrezziTrasparentiTableProps {
  rows: IPriceForSection
}


export default function PrezziTrasparentiTable({ rows }: IPrezziTrasparentiTableProps) {
  return (
    <TableContainer style={{ maxHeight: 400 }} component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Settore</TableCell>
            <TableCell align="right">Descrizione</TableCell>
            <TableCell align="right">Prezzo</TableCell>
            <TableCell align="right">Commissione</TableCell>
            <TableCell align="right">Prevendita</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.section.map((row) => (
            <React.Fragment key={row.section_id}>
              <TableRow>
                <TableCell
                  sx={{ textTransform: "uppercase",fontWeight:"bold" }}
                  component="th"
                  scope="row"
                  rowSpan={row.prices.length}
                >
                  {row.section_name}
                </TableCell>
                <TableCell align="right">{row.prices[0].description}</TableCell>
                <TableCell align="right">{formatCurrency(row.prices[0].price, true)}</TableCell>
                <TableCell align="right">{formatCurrency(row.prices[0].prevendita, true)}</TableCell>
                <TableCell align="right">{formatCurrency(row.prices[0].commissione, true)}</TableCell>
              </TableRow>
              {row.prices.slice(1).map((price, index) => (
                <TableRow key={`${row.section_id}-${index}`}>
                  <TableCell align="right">{price.description}</TableCell>
                  <TableCell align="right">{formatCurrency(price.price, true)}</TableCell>
                  <TableCell align="right">{formatCurrency(price.prevendita, true)}</TableCell>
                  <TableCell align="right">{formatCurrency(price.commissione, true)}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
