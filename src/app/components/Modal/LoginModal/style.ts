"use client";

import Hero from "@/../../public/login_hero.jpeg";
import { styled } from "@mui/material";
import Link from "next/link";

export const LoginHero = styled("div")(() => ({
  width: "100%",
  height: 100,
  backgroundImage: `url(${Hero.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

export const CustomLink = styled(Link)(() => ({
}));
