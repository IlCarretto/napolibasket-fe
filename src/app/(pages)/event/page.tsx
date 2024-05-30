"use client";
import React from "react";
import FakePoster from "@/../../public/fake-poster.jpg";
import { Box, Container, Divider, Typography } from "@mui/material";
import * as S from "./style";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Button from "@/app/components/Button";
import VerticalTabs from "@/app/components/Tabs";
import { useRouter } from "next/navigation";

const Event = () => {
  const router = useRouter();
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
              <S.ParagraphRow sx={{ mt: 1 }}>
                <BusinessCenterIcon fontSize="large" />
                <Typography variant="h6" mb={0}>
                  S.S. Napoli Basket
                </Typography>
              </S.ParagraphRow>
              <Divider sx={{ margin: "0.75rem 0" }} />
              <div className="button-group">
                <Button
                  onClick={() => router.push("/ticket-selection")}
                  sx={{
                    padding: "0.75rem 1.25rem",
                    fontSize: "16px",
                    lineHeight: 1.5,
                  }}
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
