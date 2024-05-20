"use client";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import * as S from "./style";
import { Box, Divider } from "@mui/material";
import MatchCard from "./components/Card/EventCard";
import HeroCarousel from "./components/HeroCarousel";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Hero />
      <S.CustomContainer
        maxWidth={"lg"}
        className="items-center justify-end px-4 py-2"
      >
        <Box>
          <button className="list border-solid border-2 border-gray-600 bg-gray-400 hover:bg-gray-400 hover:text-white">
            <FormatListBulletedIcon fontSize="small" />
          </button>
          <button className="cells border-solid border-2 border-gray-600 bg-white text-gray-400 hover:bg-gray-400 hover:text-white">
            <GridViewIcon fontSize="small" />
          </button>
        </Box>
      </S.CustomContainer>
      <Divider />
      <S.BgMainWrapper className="py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex-1 w-3/4 lg:w-1/2">
            <MatchCard />
          </div>
          <div className="flex-1 w-3/4 lg:w-1/2">
            <MatchCard />
          </div>
          <div className="flex-1 w-3/4 lg:w-1/2">
            <MatchCard />
          </div>
          <div className="flex-1 w-3/4 lg:w-1/2">
            <MatchCard />
          </div>
          <div className="flex-1 w-3/4 lg:w-1/2">
            <MatchCard />
          </div>
        </div>
      </S.BgMainWrapper>
    </>
  );
}
