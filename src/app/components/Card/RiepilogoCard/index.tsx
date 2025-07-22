import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Poster from "@/../../public/fake-poster.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import * as S from "./style";

const RiepilogoCard = () => {
  return (
    <S.CustomCard>
      <CardMedia>
        <Image width={75} height={75} src={Poster.src} alt="Event Poster" />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">
          Gevi Napoli Basket - Scafati Basket
        </Typography>
        <Box display={"flex"}>
          <PlaceIcon />
          <Typography variant="body1">PalaBarbuto - Napoli (NA)</Typography>
        </Box>
        <Box display={"flex"}>
          <TodayIcon />
          <Typography variant="body2">
            mercoledì, 15 maggio 2024 ore 20:30
          </Typography>
        </Box>
      </CardContent>
    </S.CustomCard>
  );
};

export default RiepilogoCard;
