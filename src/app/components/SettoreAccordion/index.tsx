import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import * as S from "./style";
import {
  SectorType,
  TicketType,
  useEventTotal,
} from "@/app/context/EventTotalContext";

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

export default function SettoreAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const { sectorPrice } = useEventTotal();

  return (
    <div className="overflow-y-auto h-0 flex flex-col grow pe-2 mb-4">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box>
            <Typography mb={0} variant="h5">
              SETTORE 1
            </Typography>
            {expanded !== "panel1" && (
              <Typography variant="body2">A partire da 8,00</Typography>
            )}
          </Box>
          <Box>
            {sectorPrice("SETTORE 1") > 0 && (
              <Typography mb={0} variant="h5" marginRight={1}>
                {sectorPrice("SETTORE 1")},00
              </Typography>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
          <SettoreContent sector="SETTORE 1" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Box>
            <Typography mb={0} variant="h5">
              SETTORE 2
            </Typography>
            {expanded !== "panel2" && (
              <Typography variant="body2">A partire da 8,00</Typography>
            )}
          </Box>
          <Box>
            {sectorPrice("SETTORE 2") > 0 && (
              <Typography mb={0} variant="h5" marginRight={1}>
                {sectorPrice("SETTORE 2")},00
              </Typography>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
          <SettoreContent sector="SETTORE 2" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Box>
            <Typography mb={0} variant="h5">
              SETTORE 3
            </Typography>
            {expanded !== "panel3" && (
              <Typography variant="body2">A partire da 8,00</Typography>
            )}
          </Box>
          <Box>
            {sectorPrice("SETTORE 3") > 0 && (
              <Typography mb={0} variant="h5" marginRight={1}>
                {sectorPrice("SETTORE 3")},00
              </Typography>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
          <SettoreContent sector="SETTORE 3" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Box>
            <Typography mb={0} variant="h5">
              SETTORE 4
            </Typography>
            {expanded !== "panel4" && (
              <Typography variant="body2">A partire da 8,00</Typography>
            )}
          </Box>
          <Box>
            {sectorPrice("SETTORE 4") > 0 && (
              <Typography mb={0} variant="h5" marginRight={1}>
                {sectorPrice("SETTORE 4")},00
              </Typography>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
          <SettoreContent sector="SETTORE 4" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const SettoreContent = ({ sector }: { sector: SectorType }) => {
  const { sectors, addTicket, removeTicket } = useEventTotal();
  const sectorInfo = sectors[sector] || {};

  return (
    <>
      <TicketRow
        sector={sector}
        type="INTERO OVER 24"
        price={16}
        count={sectorInfo["INTERO OVER 24"]?.count || 0}
        addTicket={addTicket}
        removeTicket={removeTicket}
      />
      <TicketRow
        sector={sector}
        type="RIDOTTO 3-24 ANNI"
        price={8}
        count={sectorInfo["RIDOTTO 3-24 ANNI"]?.count || 0}
        addTicket={addTicket}
        removeTicket={removeTicket}
      />
    </>
  );
};

interface TicketRowProps {
  sector: SectorType;
  type: TicketType;
  price: number;
  count: number;
  addTicket: (sector: SectorType, type: TicketType) => void;
  removeTicket: (sector: SectorType, type: TicketType) => void;
}

const TicketRow = ({
  sector,
  type,
  price,
  count,
  addTicket,
  removeTicket,
}: TicketRowProps) => {
  return (
    <S.Row
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Typography variant="h6">{type}</Typography>
      </Box>
      <Box marginLeft={"auto"} marginRight={4}>
        <Typography>{price},00</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <S.TicketSelectorButton onClick={() => removeTicket(sector, type)}>
          <RemoveIcon />
        </S.TicketSelectorButton>
        <Box>{count}</Box>
        <S.TicketSelectorButton onClick={() => addTicket(sector, type)}>
          <AddIcon />
        </S.TicketSelectorButton>
      </Box>
    </S.Row>
  );
};
