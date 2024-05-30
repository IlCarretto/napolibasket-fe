"use client";
import {
  Box,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Link,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import CartBox from "@/app/components/CartBox";
import CustomRadio from "@/app/components/Radio";
import Image from "next/image";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Button from "@/app/components/Button";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  paddingTop: 12,
  "&:not(:last-child)": {},
  "&.Mui-expanded::before": {
    opacity: 1,
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: 0,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {},
  "& .MuiAccordionSummary-content": {
    margin: 0,
    minHeight: 48,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

const Payment = () => {
  const [value, setValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.SyntheticEvent,
    panel: string | boolean
  ) => {
    const newValue = (event.target as HTMLInputElement).value;
    setValue(newValue);
    setExpanded(panel);
  };

  const [hasPayed, setHasPayed] = useState(false);

  const options = [
    {
      label: "Carte di Credito",
      value: "carte-di-credito",
      img: "https://backendcdn.vivaticket.it/wms_images/secure/accepted-cards.jpg",
    },
    {
      label: "Postepay",
      value: "postepay",
      img: "https://backendcdn.vivaticket.it/wms_images/secure/postepay.png",
    },
    {
      label: "Klarna",
      value: "klarna",
      img: "https://backendcdn.vivaticket.it/wms_images/secure/klarna_logo_100x40.svg",
    },
    {
      label: "Carte Cultura",
      value: "carte-cultura",
      img: "https://backendcdn.vivaticket.it/wms_images/secure/cartecultura_logo_h120.jpg",
    },
  ];




  const [expanded, setExpanded] = React.useState<string | boolean>("");

  return (
    <Container maxWidth={"lg"} sx={{ paddingX: "1.5rem", marginY: "1rem" }}>
      {!hasPayed ? (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-8/12">
            <div className="relative border-solid border-2 border-gray-500 rounded-md p-3">
              <div className="absolute items-center flex top-4 right-4 gap-1">
                <LockIcon fontSize="small" className="!text-green-500" />
                <Typography
                  variant="body2"
                  fontWeight={500}
                  className="!text-green-500"
                >
                  Transazione sicura
                </Typography>
              </div>
              <Typography variant="h5" textTransform={"uppercase"}>
                Payment
              </Typography>
              <Typography variant="body1">
                Codice Transazione NPLBSKT40129435310
              </Typography>
              <Typography variant="body1" mb={1}>
                Acquirente User
              </Typography>
              <FormControl className="w-full">
                <FormLabel
                  id="consegna-biglietti"
                  sx={{ color: "#444", fontSize: 14 }}
                >
                  Scegli come preferisci pagare.
                </FormLabel>
                <Divider
                  sx={{
                    display: "flex",
                    margin: "0.75rem 0",
                  }}
                />
                <Box>
                  <RadioGroup
                    value={value}
                    onChange={(event) => handleChange(event, expanded)}
                    name="consegna-biglietti"
                    sx={{
                      flexDirection: "column",
                      padding: "0 0.75rem",
                      gap: 2,
                    }}
                  >
                    {options.map((option, i) => (
                      <Accordion
                        expanded={expanded === `panel${i}`}
                        onChange={(event, newExpanded) =>
                          handleChange(event, newExpanded ? `panel${i}` : false)
                        }
                      >
                        <AccordionSummary
                          aria-controls={`panel${i}d-content`}
                          id={`panel${i}d-header`}
                        >
                          <div className="flex justify-between w-full">
                            <CustomRadio
                              key={option.value}
                              value={option.value}
                              label={option.label}
                            />
                            <Image
                              className="object-contain"
                              src={option.img}
                              alt="Metodo di Pagamento"
                              width={60}
                              height={60}
                            />
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Button
                            onClick={() => setHasPayed(true)}
                            variant="contained"
                            label={`PAGA CON ${option.label}`}
                          />
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </RadioGroup>
                </Box>
              </FormControl>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <CartBox isPayment />
          </div>
        </div>
      ) : (
        <>
          <Typography variant="h1" fontWeight="300" className="!text-black">
            Grazie per il tuo acquisto!
          </Typography>
          <Typography variant="body1">
            A breve arriverà una mail all'indirizzo indicato contenente il
            riepilogo del tuo ordine.
          </Typography>
          {/* //TO DO:Cambiare il path dei biglietti */}
          <Link
            href="/MockData/ticket-NapoliBasket.pdf"
            download
            sx={{ display: "inline-block", mt: 2 }}
          >
            Clicca qui per scaricare i tuoi biglietti
          </Link>
        </>
      )}
    </Container>
  );
};

export default Payment;
