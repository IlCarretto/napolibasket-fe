import { CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import Image from "next/image";
import Poster from "@/../../public/napoli-basket-logo.png";
import Button from "../../Button";
import * as S from "./style";
import { useRouter } from "next/navigation";

type TMatchCard = {
  layout: boolean;
};

const MatchCard = ({ layout }: TMatchCard) => {
  const router = useRouter();
  return (
    <S.CustomCard sx={{ flexDirection: layout ? "row" : "column" }}>
      <CardMedia>
        <Image
          style={{ minWidth: 100 }}
          width={100}
          height={100}
          src={Poster.src}
          alt="Match Poster"
        ></Image>
      </CardMedia>
      <CardContent className="flex-1 md:flex-auto">
        <Typography variant="h4">Napoli Basket 15.05.2024</Typography>
        <div className="flex gap-1 mb-2">
          <PlaceIcon />
          <Typography variant="body2">paoloBlasio - Pozzuoli (CA)</Typography>
        </div>
        <div className="flex gap-1">
          <TodayIcon />
          <Typography variant="body2">
            mercoledì, 15 maggio 2024 ore 20:30
          </Typography>
        </div>
      </CardContent>
      <CardActions className="ms-auto mt-auto basis-full md:basis-auto">
        <Button
          onClick={() => router.push("/event")}
          variant="outlined"
          label={"Vai all'evento"}
        />
      </CardActions>
    </S.CustomCard>
  );
};

export default MatchCard;
