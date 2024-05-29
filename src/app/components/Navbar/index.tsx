"use client";
import React, { useState } from "react";
import * as S from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/napoli-basket-logo.png";
import SerieA1 from "@/../public/lba_logo.png";

const Navbar = () => {
  const theme = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <S.Wrapper>
      <Box position="relative" left={20} zIndex={1}>
        <Link href="https://napolibasket.it">
          <Image
            src={Logo.src}
            alt="Napoli Basket"
            width={isLgScreen ? 100 : 150}
            height={isLgScreen ? 100 : 150}
          />
        </Link>
      </Box>
      <S.NavWrapper>
        {!isLgScreen ? (
          <S.DesktopNav>
            <List disablePadding>
              <ListItem>
                <ListItemText primary="Biglietti" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Società" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Prima squadra" />
              </ListItem>
              <ListItem>
                <ListItemText primary="News" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Settore Giovanile" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Accademia" />
              </ListItem>
            </List>
          </S.DesktopNav>
        ) : (
          <>
            <button type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
              <MenuIcon />
            </button>
            {isNavOpen && (
              <S.MobileNav>
                <List>
                  <ListItem
                    sx={{ backgroundColor: theme.palette.primary.main }}
                  >
                    <ListItemText primary="Biglietti" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="News" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Società" />
                  </ListItem>
                </List>
              </S.MobileNav>
            )}
          </>
        )}
      </S.NavWrapper>
      <Box position="relative" right={20} zIndex={1}>
        <Image
          src={SerieA1.src}
          alt="Serie A1"
          width={isLgScreen ? 75 : 100}
          height={isLgScreen ? 75 : 100}
        />
      </Box>
    </S.Wrapper>
  );
};

export default Navbar;
