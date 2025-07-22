export enum SeatStatus {
    BOOKED = "booked",
    HIDE = "hide",
    AVAILABLE = "free"
}

export enum SectorColor {
    SETTORE_2 = "#f7941d",
    SETTORE_1 = "#af7de1",
    TRIBUNA_CENTRALE = "#3c9",
    SETTORE_3 = "#d9cd21",
    SETTORE_4 = "#d921c9",
    SETTORE_5 = "#2193d9",
    DEFAULT = "#062f6e"
}

export interface ISeatData {
    status: SeatStatus
    sector: string;
    name: string
}

export interface ISubSectionData {
    seats_by_rows: {
        [row: string]: ISeatData[];
    };
    settore_name: string;
}

export interface ISectionData {
    subsections: ISubSectionData[];
}