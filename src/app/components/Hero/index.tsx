import React from "react";
import * as S from "./style";
import { Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <S.Hero id="events-list">
      <Container maxWidth={"lg"} className="mt-auto px-6 mb-2">
        <Typography variant="h1">FRUIT VILLAGE ARENA - Palabarbuto</Typography>
        <div className="flex items-center">
          <img
            src="https://cdn.vivaticket.com/b2cstore/build-dist/assets/images/maps/map-icon.png"
            alt="Map"
          />
          <div>
            <Typography variant="body2">
              viale Giochi del Mediterraneo
            </Typography>
            <Typography variant="body2">NAPOLI</Typography>
          </div>
        </div>
      </Container>
    </S.Hero>
  );
};

export default Hero;
