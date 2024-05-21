"use client";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import * as S from "./style";
import { Box, Divider } from "@mui/material";
import MatchCard from "./components/Card/EventCard";
import HeroCarousel from "./components/HeroCarousel";
import Hero from "./components/Hero";
import { useState } from "react";

export default function Home() {
  const [isColsLayout, setIsColsLayout] = useState(true);

  return (
    <>
      <HeroCarousel />
      <Hero />
      <S.CustomContainer
        maxWidth={"lg"}
        className="items-center justify-end px-4 py-2"
      >
        <Box>
          <button
            onClick={() => setIsColsLayout(true)}
            className={`list border-solid border-2 ${
              isColsLayout ? "bg-gray-400 text-white" : "bg-white text-gray-400"
            } border-gray-600  hover:bg-gray-400 hover:text-white`}
          >
            <FormatListBulletedIcon fontSize="small" />
          </button>
          <button
            onClick={() => setIsColsLayout(false)}
            className={`cells border-solid border-2 ${
              isColsLayout ? "bg-white text-gray-400" : "bg-gray-400 text-white"
            } border-gray-600  hover:bg-gray-400 hover:text-white`}
          >
            <GridViewIcon fontSize="small" />
          </button>
        </Box>
      </S.CustomContainer>
      <Divider />
      <S.BgMainWrapper className="py-12">
        <div
          className={`flex ${
            isColsLayout ? "flex-col" : "flex-wrap"
          } items-center`}
        >
          <div
            className={`${
              isColsLayout
                ? "flex-1"
                : "flex-100 sm:flex-50 md:max-w-50 lg:max-w-25 lg:flex-25"
            }  w-3/4 lg:w-1/2`}
          >
            <MatchCard layout={isColsLayout} />
          </div>
          <div
            className={`${
              isColsLayout
                ? "flex-1"
                : "flex-100 sm:flex-50 lg:flex-25 sm:max-w-50 lg:max-w-25"
            } w-3/4 lg:w-1/2`}
          >
            <MatchCard layout={isColsLayout} />
          </div>
          <div
            className={`${
              isColsLayout
                ? "flex-1"
                : "flex-100 sm:flex-50 lg:flex-25 sm:max-w-50 lg:max-w-25"
            }  w-3/4 lg:w-1/2`}
          >
            <MatchCard layout={isColsLayout} />
          </div>
          <div
            className={`${
              isColsLayout
                ? "flex-1"
                : "flex-100 sm:flex-50 lg:flex-25 sm:max-w-50 lg:max-w-25"
            }  w-3/4 lg:w-1/2`}
          >
            <MatchCard layout={isColsLayout} />
          </div>
          <div
            className={`${
              isColsLayout
                ? "flex-1"
                : "flex-100 sm:flex-50 lg:flex-25 sm:max-w-50 lg:max-w-25"
            }  w-3/4 lg:w-1/2`}
          >
            <MatchCard layout={isColsLayout} />
          </div>
        </div>
      </S.BgMainWrapper>
    </>
  );
}
