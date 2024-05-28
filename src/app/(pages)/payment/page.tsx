"use client";
import {
  Box,
  Container,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
  styled,
  useTheme,
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
  "&:not(:last-child)": {},
  "&::before": {},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  padding: 0,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {},
  "& .MuiAccordionSummary-content": {},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

const Payment = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
      label: "Satispay",
      value: "satispay",
      img: "https://backendcdn.vivaticket.it/wms_images/secure/satispay-red2.png",
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

  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Container maxWidth={"lg"} sx={{ paddingX: "1.5rem", marginY: "1rem" }}>
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
                  onChange={handleChange}
                  name="consegna-biglietti"
                  sx={{ flexDirection: "column", padding: "0 0.75rem", gap: 2 }}
                >
                  {options.map((option, i) => (
                    <Accordion
                      expanded={expanded === `panel${i}`}
                      onChange={handleChangeAccordion(`panel${i}`)}
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
                            src={option.img}
                            alt="Metodo di Pagamento"
                            width={60}
                            height={60}
                          />
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button
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
          <CartBox />
        </div>
      </div>
    </Container>
  );
};

export default Payment;
