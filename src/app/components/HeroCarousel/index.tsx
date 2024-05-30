import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Navbar from "../Navbar";
import * as S from "./style";

const HeroCarousel = () => {
  const carouselEls = [
    {
      url: "https://napolibasket.it/wp-content/uploads/2024/02/Premiazione.jpg",
    },
    {
      url: "https://napolibasket.it/wp-content/uploads/2023/11/tLaCJWNg.jpeg",
    },
    {
      url: "https://napolibasket.it/wp-content/uploads/2024/01/J7oWH8xm.jpeg",
    },
  ];

  return (
    <Box height={"calc(100vh - 66px)"} position={"relative"}>
      <Carousel
        sx={{ height: "100%" }}
        swipe={false}
        stopAutoPlayOnHover={false}
        interval={3000}
        navButtonsAlwaysInvisible
        indicators={false}
        height={"100%"}
      >
        {carouselEls.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Navbar />
      <S.CtaLink href="#events-list">
        {"Vai agli eventi"}
        <ArrowDownwardIcon />
      </S.CtaLink>
      <S.Title fontSize={48} lineHeight={1.5} variant="h1">
        Generazione Vincente Napoli Basket
      </S.Title>
    </Box>
  );
};

export default HeroCarousel;

const Item = ({ item }: any) => {
  return (
    <S.ImageWrapper>
      <div style={{ backgroundImage: `url(${item.url})` }} />
    </S.ImageWrapper>
  );
};
