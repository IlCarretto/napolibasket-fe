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
    setTickets: (tickets: ITicket[]) => void,
    setMode: (el: IChoiceMode) => void;
    mode: IChoiceMode,
    setHoverArea: (hoverArea: null | ITicket["section_id"]) => void,
    hoverArea: null | ITicket["section_id"],
    pricesForSector: IPriceForSection | null,
    startTimer: string | number | null,
    setStartTimer: (time: string | number | null) => void,
};

export type TEventTotalProvider = {
    children: ReactNode;
};