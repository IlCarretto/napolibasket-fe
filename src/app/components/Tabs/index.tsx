import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Chip, useMediaQuery, useTheme } from "@mui/material";
import * as S from "./style";
import PlaceIcon from "@mui/icons-material/Place";
import Map from "../../components/Map/index";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import Link from "next/link";

interface InfoTabsPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const InfoTabsPanel = ({ ...props }: InfoTabsPanelProps) => {
  const theme = useTheme();
  const { children, value, index, ...other } = props;

  return (
    <div
      className="w-full"
      role="InfoTabsPanel"
      hidden={value !== index}
      id={`vertical-InfoTabsPanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box sx={{ color: theme.palette.primary.main }}>{children}</Box>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-InfoTabsPanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: `${isTabletScreen ? "column" : "row"}`,
      }}
    >
      <S.CustomTabs
        orientation={isTabletScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Info location" {...a11yProps(0)} />
        <Tab label="Come arrivare" {...a11yProps(1)} />
      </S.CustomTabs>
      <InfoTabsPanel value={value} index={0}>
        <InfoTabLocation />
      </InfoTabsPanel>
      <InfoTabsPanel value={value} index={1}>
        <InfoTabComeArrivare />
      </InfoTabsPanel>
    </Box>
  );
}

const InfoTabLocation = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="h6">PalaBarbuto</Typography>
      <Box display={"flex"}>
        <PlaceIcon />
        <Typography variant="body1">
          Viale Giochi del Mediterraneo, 80125 Napoli (NA)
        </Typography>
      </Box>
      <S.MapWrapper>
        <Map />
      </S.MapWrapper>
    </Box>
  );
};

const InfoTabComeArrivare = () => {
  return (
    <Box>
      <Typography variant="h6">
        Indicazioni per Palabarbuto dai principali luoghi di Napoli con i mezzi
        pubblici
      </Typography>
      <Typography variant="body1" mt={2}>
        Queste linee hanno fermate in corrispondenza del Palabarbuto
      </Typography>
      <Box display="flex" mt={1}>
        <DirectionsBusIcon />
        Bus:
        <Box display="flex" marginLeft={2} gap={1}>
          <Chip
            label="01-NA"
            component="a"
            href="#"
            variant="outlined"
            clickable
          />
          <Chip
            label="101"
            variant="outlined"
            clickable
            component="a"
            href="#"
          />
          <Chip
            label="502"
            variant="outlined"
            clickable
            component="a"
            href="#"
          />
          <Chip
            label="C3"
            variant="outlined"
            clickable
            component="a"
            href="#"
          />
        </Box>
      </Box>
      <Box display="flex" mt={1}>
        <TrainIcon />
        Treno:
        <Box display="flex" marginLeft={2} gap={1}>
          <Chip
            label="L2"
            variant="outlined"
            clickable
            component="a"
            href="#"
          />
          <Chip
            label="L9"
            variant="outlined"
            clickable
            component="a"
            href="#"
          />
          <Chip label="R" variant="outlined" clickable component="a" href="#" />
        </Box>
      </Box>
    </Box>
  );
};
