"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IChoiceMode, IEventTotalContext, ITicket } from "./type";
import { useFetch } from "../hooks/useFetch";


const EventTotalContext = createContext<IEventTotalContext>({
  tickets: [],
  setHoverArea: () => { },
  hoverArea: null,
  setMode: () => { },
  pricesForSector: null,
  startTimer: null,
  setStartTimer: () => { },
  mode: IChoiceMode.BEST_PLACE,
  setTickets: () => { }
});

export const useEventTotal = () => useContext(EventTotalContext);

type TEventTotalProvider = {
  children: ReactNode;
};

export const EventTotalProvider = ({ children }: TEventTotalProvider) => {
  const pricesForSector = useFetch("./MockData/price.json");
  const [hoverArea, setHoverArea] = useState<null | ITicket["section_id"]>(null);
  const [tickets, setTickets] = useState<IEventTotalContext["tickets"]>([]);
  const [startTimer, setStartTimer] = useState<IEventTotalContext["startTimer"]>(null);
  const [mode, setMode] = useState<IEventTotalContext["mode"]>(IChoiceMode.MANUAL_CHOICE);


  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const cart = localStorage.getItem("Cart");
      if (!!cart && !!JSON.parse(cart).tickets.length) {
        const parsedCart = JSON.parse(cart);
        setStartTimer(parsedCart.time);
        setTickets(parsedCart.tickets)
      } else {
        setStartTimer(null);
        setTickets([])
      }
    }
  }, []);




  return (
    <EventTotalContext.Provider
      value={{
        tickets,
        setTickets,
        hoverArea,
        setHoverArea,
        setMode,
        mode,
        pricesForSector,
        startTimer,
        setStartTimer
      }}
    >
      {children}
    </EventTotalContext.Provider>
  );


};
