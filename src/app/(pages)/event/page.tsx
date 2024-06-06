"use client";
import React, { useEffect } from "react";
import FakePoster from "@/../../public/fake-poster.jpg";
import {
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import * as S from "./style";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Button from "@/app/components/Button";
import VerticalTabs from "@/app/components/Tabs";
import { useRouter } from "next/navigation";

const Event = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        router.push("/ticket-selection");
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <S.Section>
      <Container maxWidth={"lg"} sx={{ paddingX: "1.5rem", marginY: "1rem" }}>
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-12 md:col-span-4">
            <S.EventPoster>
              <img src={FakePoster.src} alt="Napoli Basket Match Poster" />
            </S.EventPoster>
          </div>
          <div className="col-span-12 md:col-span-8">
            <S.EventContent className="flex flex-col justify-between h-full">
              <div>
                <Typography variant="h1" textTransform={"uppercase"}>
                  Gevi Napoli Basket - Scafati Napoli Basket
                </Typography>
                <Typography variant="h3">Lega Basket Serie A 2024</Typography>
              </div>
              <div>
                <S.ParagraphRow>
                  <BusinessCenterIcon />
                  <Typography variant="body1">S.S. Napoli Basket</Typography>
                </S.ParagraphRow>
                <S.ParagraphRow>
                  <PlaceIcon />
                  <Typography variant="body1">
                    PalaBarbuto - Napoli (NA)
                  </Typography>
                </S.ParagraphRow>
                <S.ParagraphRow>
                  <TodayIcon />
                  <Typography variant="body2">
                    mercoledì, 15 maggio 2024 ore 20:30
                  </Typography>
                </S.ParagraphRow>
              </div>
              <Divider sx={{ margin: "0.75rem 0" }} />
              <div className="button-group">
                <Button
                  onClick={handleButtonClick}
                  sx={{
                    padding: "0.75rem 1.25rem",
                    fontSize: "16px",
                    lineHeight: 1.5,
                    position: "relative",
                  }}
                  startIcon={
                    loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: "#FFF!important",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    )
                  }
                  label={"Acquista"}
                  type="button"
                  variant="contained"
                />
              </div>
            </S.EventContent>
          </div>
        </div>
        <Divider />
        <VerticalTabs />
      </Container>
    </S.Section>
  );
};

export default Event;
