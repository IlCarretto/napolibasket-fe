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
import { usePathname } from "next/navigation";

type NavEntry =
  | { [key: string]: string }
  | { [key: string]: Array<{ [subKey: string]: string }> };

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);

  const theme = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const navEntries: NavEntry[] = [
    { Biglietti: "/" },
    { News: "https://napolibasket.it/news/" },
    {
      Società: [
        { Storia: "https://napolibasket.it/la-storia/" },
        {
          Organigramma: "https://napolibasket.it/organigramma/",
        },
        { Sponsor: "https://napolibasket.it/sponsor/" },
      ],
    },
    {
      "Prima Squadra": [
        { Roster: "https://napolibasket.it/roster-napoli-basket/" },
        {
          "Stagione 23/24": "https://napolibasket.it/calendario-2023-24/",
        },
        { Staff: "https://napolibasket.it/staff-tecnico/" },
      ],
    },
    {
      "Settore Giovanile": [
        { Squadre: "https://napolibasket.it/settore-giovanile/" },
      ],
    },
    { Academy: "https://napolibasket.it/academy/" },
    { "Club dei 100": "https://napolibasket.it/club-dei-100/" },
    { Stories: "https://napolibasket.it/stories/" },
    { SummerCamp: "https://napolibasket.it/summer-camp-2024/" },
    { Shop: "https://merchandising.givovashopping.it/napoli-basket/" },
  ];

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
              {navEntries.map((entry, index) =>
                Object.keys(entry).map((key) =>
                  Array.isArray(entry[key]) ? (
                    <ListItem key={key + index}>
                      <ListItemText primary={key} />
                      <DropdownMenu entries={entry[key]} />
                    </ListItem>
                  ) : (
                    <ListItem key={key + index}>
                      <Link target="_blank" href={entry[key]}>
                        <ListItemText primary={key} />
                      </Link>
                    </ListItem>
                  )
                )
              )}
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
                  {navEntries.map((entry, index) =>
                    Object.keys(entry).map((key) =>
                      Array.isArray(entry[key]) ? (
                        <ListItem key={key + index}>
                          <ListItemText primary={key} />
                          <DropdownMenu entries={entry[key]} />
                        </ListItem>
                      ) : (
                        <ListItem
                          sx={{
                            backgroundColor:
                              pathName === entry[key]
                                ? theme.palette.primary.main
                                : "",
                          }}
                          key={key + index}
                        >
                          <Link target="_blank" href={entry[key]}>
                            <ListItemText primary={key} />
                          </Link>
                        </ListItem>
                      )
                    )
                  )}
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

interface DropdownMenuProps {
  entries: Array<{ [key: string]: string }>;
}

const DropdownMenu = ({ entries }: DropdownMenuProps) => {
  return (
    <S.Dropdown className="dropdown-menu">
      {entries.map((entry, index) =>
        Object.keys(entry).map((key) => (
          <ListItem key={key + index}>
            <Link href={entry[key]}>
              <ListItemText primary={key} />
            </Link>
          </ListItem>
        ))
      )}
    </S.Dropdown>
  );
};
