import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CircularProgress,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import Image from "next/image";
import Poster from "@/../../public/napoli-basket-logo.png";
import Button from "../../Button";
import * as S from "./style";
import { useRouter } from "next/navigation";

const MatchCard = () => {
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        router.push("/event");
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <S.CustomCard>
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
        <Typography variant="h4">
          Gevi Napoli Basket vs Givova Scafati Basket
        </Typography>
        <div className="flex gap-1 mb-2">
          <PlaceIcon />
          <Typography variant="body2">PalaBarbuto - Napoli (NA)</Typography>
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
          onClick={handleButtonClick}
          variant="outlined"
          label={"Vedi i dettagli"}
          startIcon={
            loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: theme.palette.primary.main,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                  "&:hover": {
                    color: "#FFF",
                  },
                }}
              />
            )
          }
        />
      </CardActions>
    </S.CustomCard>
  );
};

export default MatchCard;
