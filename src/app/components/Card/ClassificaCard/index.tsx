import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

type TData = {
  posto: number;
  squadra: string;
  squadraImg: string;
  pts: number;
  g: number;
  v: number;
  s: number;
  diff: number;
};

export default function ClassificaCard({ ...props }: TData) {
  const { posto, squadra, squadraImg, pts, g, v, s, diff } = props;

  return (
    <TableContainer component={Paper} sx={{ width: "auto" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Posto</TableCell>
            <TableCell align="center">Squadra</TableCell>
            <TableCell align="center">PTS</TableCell>
            <TableCell align="center">G</TableCell>
            <TableCell align="center">V</TableCell>
            <TableCell align="center">S</TableCell>
            <TableCell align="center">DIFF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={posto}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {posto}
            </TableCell>
            <TableCell
              align="center"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src={squadraImg}
                width={30}
                height={30}
                alt="Logo Squadra"
              />
              {squadra}
            </TableCell>
            <TableCell align="center">{pts}</TableCell>
            <TableCell align="center">{g}</TableCell>
            <TableCell align="center">{v}</TableCell>
            <TableCell align="center">{s}</TableCell>
            <TableCell align="center">{diff}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
