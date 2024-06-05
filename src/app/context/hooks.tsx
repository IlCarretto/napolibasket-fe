import { IBestTicket, IChoiceMode, IManualTicket, ITicket } from "./type";
import { useEventTotal } from "./EventTotalContext";
import { allPricesForSector } from "./utils";
import { removeTicketFromLocalStorage } from "../utils/utils";

export const useAddManualTicket = () => {
    const { setTickets, tickets, pricesForSector } = useEventTotal();

    return (newManualTicket: IManualTicket) => {
        if (!pricesForSector) {
            console.error("Prices for sector data is not available");
            return;
        }

        const {
            description,
            prevendita,
            commissione,
            price,
            sector
        } = allPricesForSector(newManualTicket.section_id, pricesForSector);

        const newTicket: ITicket = {
            ...newManualTicket,
            description, prevendita, commissione, price, sector
        };

        if (tickets.length > 0) {
            setTickets([...tickets, newTicket]);
        } else {
            setTickets([newTicket]);
        }
    };
};

export const useChangeTicket = () => {
    const { setTickets, tickets } = useEventTotal();
    return (ticketToChange: ITicket) => {
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
};

export const useTotalTickets = () => {
    const { tickets } = useEventTotal();
    return tickets.length
};

export const useTotalPrice = () => {
    const { tickets } = useEventTotal();
    return tickets.reduce((total, ticket) => total + ticket.price, 0);
};

export const useRemoveBestTicket = () => {
    const { setTickets, tickets } = useEventTotal();
    return (elSectorId: number, price: number) => {
        const ticketIndex = tickets.findLastIndex(ticket => ticket.price === price && ticket.section_id === elSectorId);

        if (ticketIndex !== -1) {
            const updatedTickets = [
                ...tickets.slice(0, ticketIndex),
                ...tickets.slice(ticketIndex + 1)
            ];

            setTickets(updatedTickets);
        }
    };
};

//TO DO: implemtare una logica per best place
export const useAddBestTicket = () => {
    const { setTickets, tickets } = useEventTotal();
    return (newTicket: IBestTicket) => {
        let bestPlace = newTicket.sector === "Settore 2" || newTicket.sector === "Settore 3" ? 29 : newTicket.sector === "Tribuna Centrale" || newTicket.sector === "Settore 4" ? 5 : 1;
        let bestLine = newTicket.sector === "Tribuna Centrale" ? "F" : "A";

        const lastTicketIndex = tickets.map(ticket => ticket.sector).lastIndexOf(newTicket.sector);

        if (lastTicketIndex !== -1) {
            const lastTicketInSameSector = tickets[lastTicketIndex];
            if (newTicket.sector === "Settore 1" || newTicket.sector === "Settore 5") {
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
            setTickets([...tickets, newTicketTemp]);
        } else {
            setTickets([newTicketTemp]);
        }
    };
}

export const useChangeChoiceMode = () => {
    const { setMode, setTickets, setStartTimer } = useEventTotal();

    return (elMode: IChoiceMode) => {
        setMode(elMode)
        localStorage.clear();
        setTickets([]);
        setStartTimer(null)
    }
}

export const useSetEvent = () => {
    const { setStartTimer, setTickets } = useEventTotal();

    return (evento: {
        time: number,
        tickets: ITicket[],
    }) => {
        localStorage.setItem("Cart", JSON.stringify(evento))
        setTickets(evento.tickets)
        setStartTimer(evento.time)
    }
}

export const useClearEvents = () => {
    const { setTickets, setStartTimer } = useEventTotal();
    return () => {
        setTickets([]);
        setStartTimer(null)
        localStorage.clear();
    }
}

export const useRemoveTicket = () => {
    const { setTickets, tickets } = useEventTotal();

    return (ticketIdToRemove: string) => {
        const index = tickets.findIndex(ticket => ticket.id === ticketIdToRemove);
        removeTicketFromLocalStorage(ticketIdToRemove)

        if (index >= 0) {
            const ticketTemp = [...tickets.slice(0, index), ...tickets.slice(index + 1)];
            setTickets(ticketTemp);

        }
    };
};
