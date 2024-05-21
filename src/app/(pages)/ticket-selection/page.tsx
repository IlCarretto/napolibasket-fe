"use client";
import RiepilogoCard from "@/app/components/Card/RiepilogoCard";
import React from "react";
import * as S from "./style";
import { ALink } from "@/app/style";
import EventMap from "@/app/components/EventMap";
import SettoreList from "@/app/components/SettoreList";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  useTheme,
} from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Button from "@/app/components/Button";
import { useEventTotal } from "@/app/context/EventTotalContext";
import { useRouter } from "next/navigation";

const TicketSelection = () => {
  return (
    <div className="flex flex-col grow">
      <S.RiepilogoWrapper>
        <ALink href={"/event"}>Torna alla scheda evento</ALink>
        <RiepilogoCard />
      </S.RiepilogoWrapper>
      <S.MainRow>
        <div className="w-full md:w-1/2 ps-3">
          <EventMap />
        </div>
        <div className="w-full md:w-1/2   bg-gray-100 pe-3 flex">
          <SettoreList />
        </div>
      </S.MainRow>
      <EventTotal />
    </div>
  );
};

export default TicketSelection;

const EventTotal = () => {
  const router = useRouter();
  const theme = useTheme();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const { totalTickets, totalPrice } = useEventTotal();

  return (
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
      <div className="event-total__bottom px-3 py-2">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label="captcha test"
          />
        </FormGroup>
        <Button
          onClick={() => router.push("/cart")}
          sx={{ ":hover": { svg: { color: "#FFF" } } }}
          variant="outlined"
          startIcon={
            <ShoppingBagIcon sx={{ color: theme.palette.primary.main }} />
          }
          label={"Acquista"}
        />
      </div>
    </S.MenuTotal>
  );
};
