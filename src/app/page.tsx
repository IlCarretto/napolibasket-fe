"use client";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import * as S from "./style";
import { Box, Divider } from "@mui/material";
import MatchCard from "./components/Card/MatchCard";
import HeroCarousel from "./components/HeroCarousel";
import Hero from "./components/Hero";
import { useState } from "react";

export default function Home() {
  const [isColsLayout, setIsColsLayout] = useState(true);

  return (
    <>
      <HeroCarousel />
      <Hero />
      <Divider />
      <S.BgMainWrapper className="py-12 relative">
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
        <div className="absolute top-7 right-5">
          <button
            onClick={() => setIsColsLayout(true)}
            className={`w-7 list border-solid  ${
              isColsLayout ? "bg-gray-400 text-white" : "bg-white text-gray-400"
            } border-gray-600  hover:bg-gray-400 hover:text-white`}
          >
            <FormatListBulletedIcon
              sx={{ color: "inherit" }}
              fontSize="small"
            />
          </button>
          <button
            onClick={() => setIsColsLayout(false)}
            className={`w-7 cells border-solid  ${
              isColsLayout ? "bg-white text-gray-400" : "bg-gray-400 text-white"
            } border-gray-600  hover:bg-gray-400 hover:text-white`}
          >
            <GridViewIcon sx={{ color: "inherit" }} fontSize="small" />
          </button>
        </div>
      </S.BgMainWrapper>
    </>
  );
}
