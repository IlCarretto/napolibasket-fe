import { ITicket } from "@/app/context/type";

interface Price {
  price: number;
  description: string;
}


export function getMinPrice(prices: Price[]): string {
  if (!prices || prices.length === 0) {
    return "--"
  }
  return Math.min(...prices.map(priceObj => Number(priceObj.price))) + ",00 €";
}

export const calculateTotalPriceBySector = (
  tickets: ITicket[],
  sector: string
): number => {
  return tickets
    .filter(ticket => ticket.sector === sector)
    .reduce((total, ticket) => total + ticket.price, 0);
};


export const countTicketsByPriceAndSector = (
  tickets: ITicket[],
  sector: string,
  description: string
): number => {
  return tickets.filter(ticket => ticket.sector === sector && ticket.description === description).length;
};