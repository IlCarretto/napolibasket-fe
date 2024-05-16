"use client";
import Hero from "./components/Hero";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardIcon from "@mui/icons-material/Dashboard";
import * as S from "./style";
import { Divider } from "@mui/material";
import MatchCard from "./components/Card";

export default function Home() {
  return (
    <>
      <Hero />
      <S.OrderRow className="flex items-center justify-end px-4 py-2">
        <button className="list border-solid border-2 border-gray-600">
          <div>
            <FormatListBulletedIcon
              fontSize="small"
              sx={{ color: "text-gray-400" }}
            />
          </div>
        </button>
        <button className="cells border-solid border-2 border-gray-600 bg-gray-400">
          <div>
            <DashboardIcon fontSize="small" />
          </div>
        </button>
      </S.OrderRow>
      <Divider />
      <S.BgMainWrapper className="mt-2 py-12">
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
