import { ITicket } from "@/app/context/type";
import { SectorColor } from "./type";


export function getColor(
    isBooked: boolean,
    isSelected: boolean,
    isHided: boolean,
    defaultColor: string,
    hoverArea: ITicket["section_id"] | null,
    settoreId: number
) {
    if (isSelected) {
        return "red";
    } else if (isBooked) {
        return "lightgrey";
    } else if (isHided) {
        return "#fff";
    } else if (!!hoverArea && hoverArea! !== settoreId) {
        return "grey";
    } else {
        return defaultColor || "blue";
    }
}



//TO DO:AGGIUNGERE ALTRI COLORI
export const ColorSelector: string[] =
    [SectorColor.SETTORE_2,
    SectorColor.SETTORE_1,
    SectorColor.TRIBUNA_CENTRALE,
    SectorColor.SETTORE_2,
    SectorColor.SETTORE_1,
    SectorColor.TRIBUNA_CENTRALE,
    SectorColor.SETTORE_2,
    SectorColor.SETTORE_1,
    SectorColor.TRIBUNA_CENTRALE,]