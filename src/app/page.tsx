"use client";
import * as S from "./style";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import MatchCard from "./components/Card/MatchCard";
import HeroCarousel from "./components/HeroCarousel";
import Hero from "./components/Hero";
import ClassificaCard from "./components/Card/ClassificaCard";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Hero />
      <Divider />
      <S.BgMainWrapper>
        <Typography variant="h1" marginBottom={2} mt={2}>
          Prossimo match...
        </Typography>
        <MatchCard />
        <S.ClassificaWrapper>
          <Typography textAlign={"center"} variant="h3" mb={0}>
            Classifica attuale
          </Typography>
          <div className="flex flex-col md:flex-row gap-4 mt-2 justify-between items-center px-14 mb-4 md:mb-0">
            <ClassificaCard
              posto={9}
              squadra="Napoli Basket"
              squadraImg="https://napolibasket.it/wp-content/uploads/2018/10/composit-logo-NB-150x150.png"
              pts={28}
              g={30}
              v={14}
              s={16}
              diff={-26}
            />
            <ClassificaCard
              posto={14}
              squadra="Scafati Basket"
              squadraImg="https://napolibasket.it/wp-content/uploads/2023/09/scafati-1-150x150.png"
              pts={24}
              g={30}
              v={12}
              s={18}
              diff={-145}
            />
          </div>
        </S.ClassificaWrapper>
      </S.BgMainWrapper>
    </>
  );
}
