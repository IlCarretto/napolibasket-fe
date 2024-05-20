"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
type IEventTotalContext = {
  tickets: number;
  addTicket: () => void;
  removeTicket: () => void;
};

const EventTotalContext = createContext<IEventTotalContext>({
  tickets: 0,
  addTicket: () => {},
  removeTicket: () => {},
});

export const useEventTotal = () => useContext(EventTotalContext);

type TEventTotalProvider = {
  children: ReactNode;
};

export const EventTotalProvider = ({ children }: TEventTotalProvider) => {
  const [tickets, setTickets] = useState(0);

  const addTicket = () => {
    setTickets((prevTickets) => prevTickets + 1);
  };

  const removeTicket = () => {
    if (tickets > 0) {
      setTickets((prevTickets) => prevTickets - 1);
    }
  };

  return (
    <EventTotalContext.Provider value={{ tickets, addTicket, removeTicket }}>
      {children}
    </EventTotalContext.Provider>
  );
};
