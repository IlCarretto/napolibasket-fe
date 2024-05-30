"use client";
import RiepilogoCard from "@/app/components/Card/RiepilogoCard";
import React, { useState } from "react";
import * as S from "./style";
import { ALink } from "@/app/style";
import EventMap from "@/app/components/EventMap";
import SettoreList from "@/app/components/SettoreList";
import { FormGroup, Typography, useTheme } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Button from "@/app/components/Button";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import ReCaptchaModal from "@/app/components/Modal/ReCaptchaModal";
import ReCAPTCHA from "react-google-recaptcha";

const TicketSelection = () => {
  return (
    <div className="flex flex-col grow overflow-y-hidden">
      <S.RiepilogoWrapper>
        <ALink href={"/event"}>Torna alla scheda evento</ALink>
        <RiepilogoCard />
      </S.RiepilogoWrapper>
      <S.MainRow>
        <div className="w-full md:w-1/2 ps-3">
          <EventMap />
        </div>
        <div className="w-full md:w-1/2  flex-col bg-gray-100 flex">
          <SettoreList />
          <EventTotal />
        </div>

      </S.MainRow>

    </div>
  );
};

export default TicketSelection;

const EventTotal = () => {
  const router = useRouter();
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!recaptchaToken) {
      setShowModal(true);
      return;
    }
    const response = await axios({
      method: "post",
      url: "/api/recaptcha",
      data: {
        recaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response?.data?.success === true) {
      router.push("/cart");
    } else {
    }
  };

  const { totalTickets, totalPrice, tickets } = useEventTotal();


  //TO DO: Sisteamre quando ci sarà il BE
  const handleButton = () => {
    router.push("/cart")
    if (!!tickets.length) {
      const cartData = {
        time: Date.now(),
        tickets: tickets
      };
      localStorage.setItem("Cart", JSON.stringify(cartData));
    }
  }



  return (
    <>
      <S.MenuTotal
        className={`${
          totalTickets > 0 ? "" : "translate-y-full"
        } transition-all sticky mt-auto md:ms-auto md:w-1/2`}
      >
        <div className="event-total__top px-3 py-2">
          <Typography variant="h6" mb={0}>
            Totale
          </Typography>
          <div>
            {totalTickets} <ConfirmationNumberIcon />
          </div>
          <Typography variant="h6" mb={0}>
            {totalPrice()},00
          </Typography>
        </div>
        <form onSubmit={handleSubmit} className="event-total__bottom px-3 py-2">
          <FormGroup>
            <ReCAPTCHA
              sitekey={recaptchaKey || ""}
              onChange={handleRecaptchaChange}
            />
          </FormGroup>
          <Button
            type="submit"
            sx={{ ":hover": { svg: { color: "#FFF" } } }}
            variant="outlined"
            startIcon={
              <ShoppingBagIcon sx={{ color: theme.palette.primary.main }} />
            }
            label={"Acquista"}
          />
        </form>
      </S.MenuTotal>
      <ReCaptchaModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};
