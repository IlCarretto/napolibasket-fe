"use client";
import React from "react";
import * as S from "./style";
import Image from "next/image";
import Logo from "@/../../public/napoli-basket-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <S.Header>
      <S.CustomContainer maxWidth={"lg"}>
        <S.LogoContainer>
          <Image src={Logo.src} alt="Napoli Basket" width={50} height={50} />
        </S.LogoContainer>
        <S.Nav>
          <S.NavItem>
            <SearchIcon />
          </S.NavItem>
          <S.NavItem className="flex items-center gap-2">
            <AccountCircleIcon />
            <Typography variant="body2">Accedi</Typography>
          </S.NavItem>
          <S.NavItem>
            <button style={{ height: 25 }}>
              <div className="flex items-center gap-1">
                <img
                  src="https://flagcdn.com/24x18/it.png"
                  alt="Lingua Italiana"
                />
                <Typography variant="body2">IT</Typography>
              </div>
            </button>
          </S.NavItem>
        </S.Nav>
      </S.CustomContainer>
    </S.Header>
  );
};

export default Header;
