"use client";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import Image from "next/image";
import Logo from "@/../../public/napoli-basket-bianco-celeste.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import LoginModal from "../Modal/LoginModal";
import Link from "next/link";
import Menu from "../Menu";
import { useAuthState } from "@/app/context/AuthContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Timer from "../Timer";
import { useEventTotal } from "@/app/context/EventTotalContext";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const { startTimer } = useEventTotal();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { isLoggedIn } = useAuthState();


  return (
    <S.Header>
      <S.CustomContainer maxWidth={"xl"}>
        <Link href="/">
          <Image
            src={Logo.src}
            alt="Napoli Basket"
            width={0}
            height={0}
            sizes="100vw"
          />
        </Link>
        <div className="flex gap-1 md:gap-8 px-3 lg:px-0">
          <Box>
            <Image
              src="https://napolibasket.it/wp-content/uploads/2023/10/logoGevi_BIANCO.png"
              alt="Gevi Logo"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Box>
          <Box>
            <Image
              src="https://napolibasket.it/wp-content/uploads/2023/09/graded-holding_logo-bianco-1536x498.png"
              alt="Gevi Logo"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Box>
          <Box>
            <Image
              src="https://napolibasket.it/wp-content/uploads/2023/09/gls-bianco.png"
              alt="Gevi Logo"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Box>
        </div>
        <Box display={"flex"} >
          {startTimer && <Timer minutes={10} startTime={startTimer} />}
          {isLoggedIn ? (
            <S.LoginButton
              id="basic-button"
              type="button"
              onClick={handleClick}
            >
              <AccountCircleIcon />
              User
              <ArrowDropDownIcon />
            </S.LoginButton>
          ) : (
            <S.LoginButton type="button" onClick={() => setShowModal(true)}>
              <AccountCircleIcon />
              Accedi
            </S.LoginButton>
          )}
          <Menu anchorEl={anchorEl} open={open} handleClose={handleClose} />
        </Box>
      </S.CustomContainer>
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </S.Header>
  );
};

export default Header;
