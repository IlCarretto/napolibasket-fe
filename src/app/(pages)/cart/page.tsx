import CartBox from "@/app/components/CartBox";
import TicketInfoBox from "@/app/components/TicketInfoBox";
import { Box, Container } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <section>
      <Container maxWidth={"lg"} className="px-4 py-2">
        <Box>
          <TicketInfoBox />
        </Box>
        <Box>
          <CartBox />
        </Box>
      </Container>
    </section>
  );
};

export default Cart;
