"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type TicketType = "INTERO OVER 24" | "RIDOTTO 3-24 ANNI";
export type SectorType = "SETTORE 1" | "SETTORE 2" | "SETTORE 3" | "SETTORE 4";

type TicketInfo = {
  count: number;
  price: number;
};

type SectorInfo = {
  [key in TicketType]?: TicketInfo;
};

type IEventTotalContext = {
  sectors: {
    [key in SectorType]?: SectorInfo;
  };
  addTicket: (sector: SectorType, type: TicketType) => void;
  removeTicket: (sector: SectorType, type: TicketType) => void;
  totalTickets: number;
  sectorPrice: (sector: SectorType) => number;
  totalPrice: () => number;
};

const EventTotalContext = createContext<IEventTotalContext>({
  sectors: {},
  addTicket: () => {},
  removeTicket: () => {},
  totalTickets: 0,
  sectorPrice: () => 0,
  totalPrice: () => 0,
});

export const useEventTotal = () => useContext(EventTotalContext);

type TEventTotalProvider = {
  children: ReactNode;
};

const mockSectors = {
  "SETTORE 1": {
    "INTERO OVER 24": { count: 1, price: 16 },
  },
  "SETTORE 2": {
    "INTERO OVER 24": { count: 1, price: 16 },
    "RIDOTTO 3-24 ANNI": { count: 1, price: 8 },
  },
  "SETTORE 4": {
    "RIDOTTO 3-24 ANNI": { count: 2, price: 8 },
  },
};

export const EventTotalProvider = ({ children }: TEventTotalProvider) => {
  const [sectors, setSectors] =
    useState<IEventTotalContext["sectors"]>(mockSectors);

  const addTicket = (sector: SectorType, type: TicketType) => {
    setSectors((prevSectors) => {
      const sectorInfo = prevSectors[sector] || {};
      const ticketInfo = sectorInfo[type] || {
        count: 0,
        price: type === "INTERO OVER 24" ? 16 : 8,
      };
      const updatedSectorInfo = {
        ...sectorInfo,
        [type]: { ...ticketInfo, count: ticketInfo.count + 1 },
      };
      return { ...prevSectors, [sector]: updatedSectorInfo };
    });
  };

  const removeTicket = (sector: SectorType, type: TicketType) => {
    setSectors((prevSectors) => {
      const sectorInfo = prevSectors[sector] || {};
      const ticketInfo = sectorInfo[type] || {
        count: 0,
        price: type === "INTERO OVER 24" ? 16 : 8,
      };
      if (ticketInfo.count > 0) {
        const updatedSectorInfo = {
          ...sectorInfo,
          [type]: { ...ticketInfo, count: ticketInfo.count - 1 },
        };
        return { ...prevSectors, [sector]: updatedSectorInfo };
      }
      return prevSectors;
    });
  };

  const totalTickets = Object.values(sectors).reduce((acc, sector) => {
    if (!sector) return acc;
    return (
      acc + Object.values(sector).reduce((acc, { count }) => (acc += count), 0)
    );
  }, 0);

  const sectorPrice = (sector: SectorType) => {
    const sectorInfo = sectors[sector] || {};
    return Object.values(sectorInfo).reduce(
      (acc, { count, price }) => acc + count * price,
      0
    );
  };

  const totalPrice = () => {
    return Object.values(sectors).reduce((acc, sector) => {
      if (!sector) return acc;
      return (
        acc +
        Object.values(sector).reduce(
          (acc, { count, price }) => acc + count * price,
          0
        )
      );
    }, 0);
  };

  return (
    <EventTotalContext.Provider
      value={{
        sectors,
        addTicket,
        removeTicket,
        totalTickets,
        sectorPrice,
        totalPrice,
      }}
    >
      {children}
    </EventTotalContext.Provider>
  );
};
