import { Backdrop, Box, Modal, Typography } from "@mui/material";
import React from "react";
import Button from "../../Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  "& .MuiTypography-root": {
    color: "inherit",
  },
};

type TCarrelloScadutoModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CarrelloScadutoModal = ({
  showModal,
  setShowModal,
}: TCarrelloScadutoModal) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={() => setShowModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            fontWeight={500}
            mb={3}
          >
            Carrello scaduto
          </Typography>
          <Typography variant="body1" fontSize={14} mb={2}>
            Siamo spiacenti ma il tempo riservato al pagamento è terminato.
          </Typography>
          <Typography variant="body1" fontSize={14} mb={2}>
            Ti invitiamo a selezionare nuovamente i biglietti desiderati e a
            procedere con un nuovo acquisto
          </Typography>
          <Typography variant="body1" fontSize={14} mb={2}>
            Ti ricordiamo che se non confermi i posti nel tuo carrello entro i
            termini indicati, la transazione viene annullata ed i posti resi
            disponibili per una nuova vendita. Il tempo di prenotazione è
            indicato chiaramente nella pagina di riepilogo del carrello ed
            indica il temrine esatto entro il quale poter effettuare il
            pagamento del titolo.
          </Typography>
          <Button
            className="w-full"
            label={"Chiudi"}
            variant="contained"
            onClick={() => setShowModal(false)}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default CarrelloScadutoModal;
