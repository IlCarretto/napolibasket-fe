import { IPriceForSection, ITicket } from "@/app/context/type";

export const allPricesForSector = (
    sectionId: number,
    priceForSectors: IPriceForSection
): ({

    description: ITicket["description"],
    prevendita: ITicket["prevendita"],
    commissione: ITicket["commissione"],
    price: ITicket["price"]
}[]) => {

    const sectionSelected = priceForSectors.section.find(el => el.section_id === sectionId);

    if (!sectionSelected) {
        throw new Error(`Section with ID ${sectionId} not found.`);
    }


    console.log(sectionSelected)
    return sectionSelected?.prices;
};
