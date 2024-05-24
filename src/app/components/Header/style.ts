"use client";

import { Box, Container, styled } from "@mui/material";

export const Header = styled("header")(({ theme }) => ({
  background: "rgba(0,0,0,.9)",
  position: "sticky",
  top: 0,
  zIndex: 10,
  height: 66,
}));

export const LogoContainer = styled("a")(({ theme }) => ({}));

export const Nav = styled("ul")(({ theme }) => ({
  gap: "1rem",
  display: "flex",
}));

export const NavItem = styled("li")(({ theme }) => ({}));

export const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));

export const LoginButton = styled("button")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  color: "#FFF",
  fontSize: 14,
}));
