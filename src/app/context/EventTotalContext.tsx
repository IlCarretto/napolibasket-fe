"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { IBestTicket, IEventTotalContext, IManualTicket, ITicket } from "./type";
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
  clearTickets: () => {},
  pricesForSector: null,
  removeBestTicket: () => {},
  changeTicket:()=> {},
  addBestTicket: ({
    sector = "",
    section_id = 0,
    price = 0,
    description = "",
    prevendita = 0,
    commissione = 0
  }: IBestTicket) => null
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

  const clearTickets = () => setTickets([])

  const totalTickets = tickets.length

  const totalPrice = () => {
    return tickets.reduce((total, ticket) => total + ticket.price, 0);
  };



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

  const addBestTicket = (newTicket: IBestTicket) => {
    //AGGIUNGERE LOGICA PER IL MIGLIOR POSTO
    let bestTicket: ITicket = {
      ...newTicket,
      id: "-1",
      line: "Z",
      place: "0"
    }
    if (tickets.length > 0) {
      setTickets((prevTickets) => {
        return [...prevTickets, bestTicket];
      });
    } else {

      setTickets([bestTicket])
    }
  };


  const changeTicket = (ticketToRemove: ITicket) => {
    const index = tickets.findIndex(ticket => ticket.id === ticketToRemove.id
      && ticket.description === ticketToRemove.description
      && ticket.sector === ticketToRemove.sector
    );
    if (index !== -1) {
      const ticketTemp = [...tickets.slice(0, index), ...tickets.slice(index + 1)];
      setTickets(ticketTemp);
    }
  };


  const removeTicket = (ticketToRemove: ITicket) => {
    const index = tickets.findIndex(ticket => ticket.id === ticketToRemove.id
      && ticket.description === ticketToRemove.description
      && ticket.sector === ticketToRemove.sector
    );
    if (index !== -1) {
      const ticketTemp = [...tickets.slice(0, index), ...tickets.slice(index + 1)];
      setTickets(ticketTemp);
    }
  };





  const removeBestTicket = (bestTicketToRemove: ITicket) => {

    //SISTEMARE UNA VOLTA AGGIUNTA LA LOGICA PER IL MIGLIOR POSTO
    const index = tickets.findIndex(ticket => ticket.id === bestTicketToRemove.id
      && ticket.description === bestTicketToRemove.description
      && ticket.sector === bestTicketToRemove.sector
    );
    if (index !== -1) {
      const ticketTemp = [...tickets.slice(0, index), ...tickets.slice(index + 1)];
      setTickets(ticketTemp);

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
        clearTickets,
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
