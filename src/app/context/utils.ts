import { IPriceForSection, ITicket } from "./type";

export const allPricesForSector = (
  sectionId: number,
  priceForSectors: IPriceForSection
): { sector: ITicket["sector"], description: ITicket["description"], prevendita: ITicket["prevendita"], commissione: ITicket["commissione"], price: ITicket["price"] } => {
  
  const sectionSelected = priceForSectors.section.find(el => el.section_id === sectionId);

  if (!sectionSelected) {
    throw new Error(`Section with ID ${sectionId} not found.`);
  }

  const {
    prices: [{
      description,
      prevendita,
      commissione,
      price
    }],
    section_name: sector
  } = sectionSelected;

  return { description, prevendita, commissione, price, sector };
};