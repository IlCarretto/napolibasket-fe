import * as React from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import * as S from "./style";
import PlaceIcon from "@mui/icons-material/Place";

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
      role="InfoTabsPanel"
      hidden={value !== index}
      id={`vertical-InfoTabsPanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ color: theme.palette.primary.main }}>
            {children}
          </Typography>
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

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <S.CustomTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Info location" {...a11yProps(0)} />
        <Tab label="Consegna biglietti" {...a11yProps(1)} />
        <Tab label="Organizzatore" {...a11yProps(2)} />
      </S.CustomTabs>
      <InfoTabsPanel value={value} index={0}>
        <InfoTabLocation />
      </InfoTabsPanel>
      <InfoTabsPanel value={value} index={1}>
        Item Two
      </InfoTabsPanel>
      <InfoTabsPanel value={value} index={2}>
        Item Three
      </InfoTabsPanel>
    </Box>
  );
}

const InfoTabLocation = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="h6">Palablasio</Typography>
      <Box display={"flex"}>
        <PlaceIcon />
        <Typography variant="body1">via Medina 40, Pozzuoli (CA)</Typography>
      </Box>
    </Box>
  );
};
