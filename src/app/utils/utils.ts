//Gestione del Local storage
//TO DO: CAMBIARE

export const removeTicketFromLocalStorage = async (ticketId: string) => {
  if (typeof window !== "undefined" && localStorage) {
    const cart = localStorage.getItem("Cart");
    if (cart) {
      const parsedCart = JSON.parse(cart);
      const updatedTickets = parsedCart.tickets.filter((ticket: any) => ticket.id !== ticketId);
      parsedCart.tickets = updatedTickets;
      localStorage.setItem("Cart", JSON.stringify(parsedCart));
    }
  }
};