import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
    <Carousel
      stopAutoPlayOnHover={false}
      interval={3000}
      navButtonsAlwaysInvisible
      indicators={false}
      height={"calc(100vh - 66px)"}
    >
      {carouselEls.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;

const Item = ({ item }: any) => {
  return (
    <ImageWrapper>
      <div style={{ backgroundImage: `url(${item.url})` }} />
      <CtaLink href="#events-list">
        {"Vai agli eventi"}
        <ArrowDownwardIcon />
      </CtaLink>
      <Typography fontSize={48} lineHeight={1.5} variant="h1">
        Generazione Vincente Napoli Basket
      </Typography>
    </ImageWrapper>
  );
};

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100%",
  position: "relative",
  "& div": {
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 1,
    },
  },
  "& h1": {
    textAlign: "center",
    textTransform: "uppercase",
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -40%)",
    zIndex: 2,
  },
}));

const CtaLink = styled("a")(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  background: "#FFF",
  fontSize: 16,
  fontWeight: 600,
  padding: "0.5rem 1.25rem 0.5rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -70%)",
  zIndex: 2,
  "& svg": {
    color: theme.palette.secondary.main,
    stroke: theme.palette.secondary.main,
  },
}));
