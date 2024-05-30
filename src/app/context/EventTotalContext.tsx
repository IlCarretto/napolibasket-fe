"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { IBestTicket, IChoiceMode, IEventTotalContext, IManualTicket, ITicket } from "./type";
import { allPricesForSector } from "./utils";


const EventTotalContext = createContext<IEventTotalContext>({
  tickets: [],
  addManualTicket: () => { },
  removeTicket: () => { },
  totalTickets: 0,
  totalPrice: () => 0,
  setHoverArea: () => { },
  hoverArea: null,
  jsonMap: {},
  changeChoiceMode: () => { },
  pricesForSector: null,
  removeBestTicket: () => { },
  changeTicket: () => { },
  addBestTicket: ({ }: IBestTicket) => null,
  mode: IChoiceMode.BEST_PLACE
});

export const useEventTotal = () => useContext(EventTotalContext);

type TEventTotalProvider = {
  children: ReactNode;
};

const useFetch = (url: string) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);
  return data;
};


export const EventTotalProvider = ({ children }: TEventTotalProvider) => {
  const jsonMap = useFetch("./seats-data.json");
  const pricesForSector = useFetch("./MockData/price.json");

  const [hoverArea, setHoverArea] = useState<null | ITicket["section_id"]>(null);
  const [tickets, setTickets] = useState<IEventTotalContext["tickets"]>([]);
  const [mode, setMode] = useState<IEventTotalContext["mode"]>(IChoiceMode.MANUAL_CHOICE);

  const totalTickets = tickets.length

  const totalPrice = () => {
    return tickets.reduce((total, ticket) => total + ticket.price, 0);
  };

  const changeChoiceMode = (elMode: IChoiceMode) => {
    setTickets([])
    setMode(elMode)
  }

  const addManualTicket = (newManualTicket: IManualTicket) => {
    const { description, prevendita, commissione, price, sector } = allPricesForSector(newManualTicket.section_id, pricesForSector!)
    const newTicket: ITicket = {
      ...newManualTicket,
      description, prevendita, commissione, price, sector
    }
    if (tickets.length > 0) {
      setTickets((prevTickets) => {
        return [...prevTickets, newTicket];
      });
    } else {
      setTickets([newTicket])
    }
  };

  const removeTicket = (ticketToRemove: string) => {
    const index = tickets.findIndex(ticket => ticket.id === ticketToRemove
    );
    if (index >= 0) {
      const ticketTemp = [...tickets.slice(0, index), ...tickets.slice(index + 1)];
      setTickets(ticketTemp);
    }
  };

  //TO DO: implemtare una logica per best place
  const addBestTicket = (newTicket: IBestTicket) => {

    let bestPlace = newTicket.sector === "Settore 2" ? 29 : newTicket.sector === "Tribuna Centrale" ? 5 : 1;
    let bestLine = newTicket.sector === "Tribuna Centrale" ? "F" : "A";
    console.log(newTicket.sector, newTicket.sector === "Tribuna Centrale")
    console.log(tickets)

    const lastTicketIndex = tickets.map(ticket => ticket.sector).lastIndexOf(newTicket.sector);

    if (lastTicketIndex !== -1) {
      const lastTicketInSameSector = tickets[lastTicketIndex];
      if (newTicket.sector === "Settore 1") {
        bestPlace = Number(lastTicketInSameSector.place) + 1;
      } else {
        bestPlace = Number(lastTicketInSameSector.place) - 1;
      }
    }


    const newTicketTemp: ITicket = {
      ...newTicket,
      id: newTicket.section_id + bestLine + bestPlace,
      place: bestPlace.toString(),
      line: bestLine
    };


    if (tickets.length > 0) {
      setTickets((prevTickets) => [...prevTickets, newTicketTemp]);
    } else {
      setTickets([newTicketTemp]);
    }
  };


  const changeTicket = (ticketToChange: ITicket) => {
    const index = tickets.findIndex(ticket => ticket.id === ticketToChange.id);

    if (index !== -1) {
      const updatedTickets = [
        ...tickets.slice(0, index),
        ticketToChange,
        ...tickets.slice(index + 1)
      ];
      setTickets(updatedTickets);
    }
  };


  const removeBestTicket = (elSectorId: number, price: number) => {
    console.log(tickets.filter((el => el.price === price && el.section_id === elSectorId)))
    const ticketIndex = tickets.findLastIndex(ticket => ticket.price === price && ticket.section_id === elSectorId);

    if (ticketIndex !== -1) {
      const updatedTickets = [
        ...tickets.slice(0, ticketIndex),
        ...tickets.slice(ticketIndex + 1)
      ];
  
      setTickets(updatedTickets);
    }
  };

  return (
    <EventTotalContext.Provider
      value={{
        addManualTicket,
        removeTicket,
        totalTickets,
        tickets,
        hoverArea,
        setHoverArea,
        totalPrice,
        changeChoiceMode,
        mode,
        jsonMap,
        pricesForSector,
        addBestTicket,
        removeBestTicket,
        changeTicket
      }}
    >
      {children}
    </EventTotalContext.Provider>
  );


};
