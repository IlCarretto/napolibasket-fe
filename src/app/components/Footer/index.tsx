"use client";
import React from "react";
import * as S from "./style";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <S.FooterWrapper>
      <Grid
        container
        px={isMdScreen ? 2 : 0}
        gap={isMdScreen ? 4 : 0}
        className="md:!w-8/12 lg:!w-2/4"
      >
        <Grid xs={12} md={6} lg={5} className="md:flex md:p-2">
          <S.Card>
            <Typography variant="h2">Società</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Storia" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Organigramma" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Club dei 100" />
              </ListItem>
            </List>
          </S.Card>
        </Grid>
        <Grid xs={12} md={6} lg={5} className="md:flex md:p-2">
          <S.Card>
            <Typography variant="h2">Squadra</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Roster" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Staff" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Stagione A1 - 23/24" />
              </ListItem>
            </List>
          </S.Card>
        </Grid>
        <Grid xs={12} md={6} lg={5} className="md:flex md:p-2">
          <S.Card>
            <Typography variant="h2">Social</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
                <ListItemText primary="Facebook" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Tik Tok" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="Instagram" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <XIcon />
                </ListItemIcon>
                <ListItemText primary="Twitter" />
              </ListItem>
            </List>
          </S.Card>
        </Grid>
        <Grid xs={12} md={6} lg={5} className="md:flex md:p-2">
          <S.Card>
            <Typography variant="h2">Contatti</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="S.S Napoli Basket srl" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Via Aniello Falcone 290/A" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="80127 Napoli" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="P.Iva: 07000361217" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Email: segreteria@napolibasket.eu" />
              </ListItem>
            </List>
          </S.Card>
        </Grid>
      </Grid>
    </S.FooterWrapper>
  );
};

export default Footer;
