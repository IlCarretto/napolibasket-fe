"use client";
import RiepilogoCard from "@/app/components/Card/RiepilogoCard";
import React, { useState } from "react";
import * as S from "./style";
import { ALink } from "@/app/style";
import EventMap from "@/app/components/EventMap";
import SettoreList from "@/app/components/SettoreList";
import { FormGroup, Typography, useTheme } from "@mui/material";
import TicketIcon from "@/app/../../public/ticket-bianco.svg";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Button from "@/app/components/Button";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import ReCaptchaModal from "@/app/components/Modal/ReCaptchaModal";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { formatCurrency } from "@/app/utils/formatCurrency";
import { useSetEvent, useTotalPrice, useTotalTickets } from "@/app/context/hooks";

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
  const { tickets } = useEventTotal();
  const totalTickets = useTotalTickets()
  const totalPrice = useTotalPrice()
  const setEvent = useSetEvent()

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

      //TO DO: Sisteamre quando ci sarà il BE
      if (!!tickets.length) {
        const cartData = {
          time: Date.now(),
          tickets: tickets,
        };
        setEvent(cartData);
      }
    }
  };


  return (
    <>
      <S.MenuTotal
        className={`${totalTickets > 0 ? "" : "translate-y-full h-0"
          } transition-all sticky mt-auto `}
      >
        <div className="event-total__top px-3 py-2">
          <Typography variant="h6" mb={0}>
            Totale
          </Typography>
          <div className="flex gap-1">
            {totalTickets}
            <Image src={TicketIcon.src} alt="Ticket" width={25} height={25} />
          </div>
          <Typography variant="h6" mb={0}>
            {formatCurrency(totalPrice, true)}
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
