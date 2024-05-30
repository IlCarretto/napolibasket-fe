import CartBox from "@/app/components/CartBox";
import TicketInfoBox from "@/app/components/TicketInfoBox";
import { Container } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <section>
      <Container maxWidth={"lg"} className="px-4 py-3">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-8/12">
            <TicketInfoBox />
          </div>
          <div className="w-full md:w-4/12">
            <CartBox />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
