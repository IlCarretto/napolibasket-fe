import { ITicket } from "@/app/context/type";
import { SectorColor } from "./type";


export function getColor(
    isBooked: boolean,
    isSeatSelected: boolean,
    isHided: boolean,
    defaultColor: string,
    hoverArea: ITicket["section_id"] | null,
    settoreId: number
) {
    if (isSeatSelected) {
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



//TO DO:AGGIUNGERE ALTRI COLORI gestire con index o altro
export const ColorSelector: string[] =
    [SectorColor.SETTORE_2,
    SectorColor.SETTORE_1,
    SectorColor.TRIBUNA_CENTRALE,
    SectorColor.SETTORE_2,
    SectorColor.SETTORE_3,
    SectorColor.SETTORE_3,
    SectorColor.SETTORE_4,
    SectorColor.SETTORE_5,]