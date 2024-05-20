import RiepilogoCard from "@/app/components/Card/RiepilogoCard";
import React from "react";
import * as S from "./style";
import { ALink } from "@/app/style";
import EventMap from "@/app/components/EventMap";
import { Box } from "@mui/material";
import SettoreList from "@/app/components/SettoreList";

const TicketSelection = () => {
  return (
    <>
      <S.RiepilogoWrapper>
        <ALink href={"/event"}>Torna alla scheda evento</ALink>
        <RiepilogoCard />
      </S.RiepilogoWrapper>
      <S.MainRow>
        <div className="w-full md:w-1/2">
          <EventMap />
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-6">
          <SettoreList />
        </div>
      </S.MainRow>
    </>
  );
};

export default TicketSelection;
