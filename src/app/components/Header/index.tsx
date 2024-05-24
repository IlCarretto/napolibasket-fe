"use client";
import React, { useState } from "react";
import * as S from "./style";
import Image from "next/image";
import Logo from "@/../../public/napoli-basket-bianco-celeste.svg";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import LoginModal from "../Modal/LoginModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Header>
      <S.CustomContainer maxWidth={"lg"}>
        <S.LogoContainer href="/">
          <Image src={Logo.src} alt="Napoli Basket" width={175} height={175} />
        </S.LogoContainer>
        <S.Nav>
          <S.NavItem>
            <SearchIcon />
          </S.NavItem>
          <S.NavItem className="flex items-center gap-2">
            <S.LoginButton type="button" onClick={() => setShowModal(true)}>
              <AccountCircleIcon />
              Accedi
            </S.LoginButton>
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
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </S.Header>
  );
};

export default Header;
