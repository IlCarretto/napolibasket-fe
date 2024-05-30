import { ReactNode } from "react";

export type ITicket = {
    id: string,
    section_id: number,
    sector: string,
    price: number,
    line: string,
    description: string,
    place: string
    prevendita: number,
    commissione: number
};

export type IPriceForSection = {
    section:
    {
        section_id: number,
        section_name: string,
        prices:
        {
            section_id: number;
            price: number,
            description: string,
            prevendita: number,
            commissione: number
        }[]
    }[]

}

export type IBestTicket = {
    sector: string,
    section_id: number,
    price: number,
    description: string,
    prevendita: number,
    commissione: number
}


export type IManualTicket = {
    id: ITicket["id"],
    section_id: ITicket["section_id"],
    line: ITicket["line"],
    place: ITicket["place"]
}

export enum IChoiceMode {
    BEST_PLACE = "best_place",
    MANUAL_CHOICE = "manual_choice"
}


export type IEventTotalContext = {
    tickets: ITicket[];
    addManualTicket: (el: IManualTicket) => void;
    removeTicket: (ticketId: string) => void;
    changeTicket: (ticket: ITicket) => void;
    totalTickets: number;
    totalPrice: () => number,
    setHoverArea: (hoverArea: null | ITicket["section_id"]) => void,
    hoverArea: null | ITicket["section_id"],
    jsonMap: any
    pricesForSector: IPriceForSection | null
    addBestTicket: (el: IBestTicket) => void
    removeBestTicket: (sectorId: number,price:number) => void
    changeChoiceMode: (el: IChoiceMode) => void;
    mode: IChoiceMode
};

export type TEventTotalProvider = {
    children: ReactNode;
};
