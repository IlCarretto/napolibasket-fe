// SettoreAccordion.tsx
import React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useEventTotal } from "@/app/context/EventTotalContext";
import * as S from "./style";
import { calculateTotalPriceBySector, countTicketsByPriceAndSector, getMinPrice } from "./utils";
import { ColorSelector } from "../EventMap/utils";
import { IBestTicket, ITicket } from "@/app/context/type";
import { formatCurrency } from "@/app/utils/formatCurrency";

//TO DO:AGIUSTARE QUANDO SARA' DEFINITA LA LOGICA MIGLIOR POSTO
export default function MigliorPosto() {
  const [expanded, setExpanded] = React.useState<string | false>("");
  const [hoverAccordion, setHoverAccordion] = React.useState<string | false>("");
  const { setHoverArea, pricesForSector, addBestTicket, removeBestTicket, tickets } = useEventTotal();

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleMouseEnter = (panel: string, sectorId: ITicket["section_id"]) => () => {
    setHoverArea(sectorId);
    setHoverAccordion(panel)
  };

  const handleMouseLeave = () => {
    setHoverArea(null);
    setHoverAccordion(false)
  };



  return (
    <div className="overflow-y-auto md:h-0 flex flex-col grow pe-2">
      {pricesForSector?.section.map((el) =>
        <S.StyledAccordion
          disableGutters elevation={0} square
          onMouseEnter={handleMouseEnter(el.section_name, el.section_id)}
          onMouseLeave={handleMouseLeave}
          expanded={expanded === el.section_name}
          onChange={handleChange(el.section_name)}
        >
          <S.StyledAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}>

            <Box display={"flex"} >
              <S.DecorationTitle sx={{
                backgroundColor: !hoverAccordion || hoverAccordion === el.section_name ?
                  ColorSelector[el.section_id] : "lightgray",
                height: hoverAccordion === el.section_name && expanded !== el.section_name ? "40px" : "20px"
              }} />
              <Box  >
                <Typography mb={0} variant="h5">
                  {el?.section_name?.toUpperCase()}
                </Typography>
                {expanded !== el.section_name && <Typography variant="body2">A partire da {getMinPrice(el?.prices)}</Typography>}
              </Box>
            </Box>
            <Box>
              {calculateTotalPriceBySector(tickets, el.section_name) > 0 && (
                <Typography mb={0} variant="h5" marginRight={1}>
                  {formatCurrency(calculateTotalPriceBySector(tickets, el.section_name),true)}
                </Typography>
              )}
            </Box>
          </S.StyledAccordionSummary>
          <S.StyledAccordionDetails className="bg-gray-100">
            {el?.prices?.map((objPrice, index) =>
              <TicketRow
                key={index}
                sector={el.section_name}
                description={objPrice.description}
                sectionId={el.section_id}
                price={objPrice.price}
                prevendita={objPrice.prevendita}
                commissione={objPrice.commissione}
                count={countTicketsByPriceAndSector(tickets, el.section_name, objPrice.description) || 0}
                addTicket={addBestTicket}
                removeTicket={removeBestTicket}
              />)}
          </S.StyledAccordionDetails>
        </S.StyledAccordion>)}

    </div>
  );
}

// 
interface TicketRowProps {
  sector: string;
  description: string;
  sectionId: number;
  price: number;
  prevendita: number;
  commissione: number;
  count: number;
  addTicket: (ticket: IBestTicket) => void;
  removeTicket: (idSection: number,price:number) => void;
}

const TicketRow = ({ sector, description, price, commissione, prevendita, count, addTicket, removeTicket, sectionId }: TicketRowProps) => {
  return (
    <S.Row display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Box>
        <Typography variant="h6">{description}</Typography>
      </Box>
      <Box marginLeft={"auto"} marginRight={4}>
        <Typography>{formatCurrency(price,true)}</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <S.TicketSelectorButton onClick={() => removeTicket(sectionId,price)}>
          <RemoveIcon />
        </S.TicketSelectorButton>
        <Box>{count}</Box>
        <S.TicketSelectorButton onClick={() => addTicket({
          sector: sector,
          section_id: sectionId,
          description: description,
          price: price,
          prevendita: prevendita,
          commissione: commissione
        })}>
          <AddIcon />
        </S.TicketSelectorButton>
      </Box>
    </S.Row>
  );
};
