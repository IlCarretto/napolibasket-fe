import {
  Backdrop,
  Box,
  ButtonGroup,
  Modal,
  TextField,
  styled,
} from "@mui/material";
import React from "react";
import Button from "../../Button";
import PrecompilaButton from "../../Button/PrecompilaButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

type TDatiUtilizzatoreModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DatiUtilizzatoreModal = ({
  showModal,
  setShowModal,
}: TDatiUtilizzatoreModal) => {
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
          <Box display={"flex"} flexWrap={"wrap"}>
            <CustomTextField
              className="flex-100 md:flex-50"
              label="Nome/Name"
              focused
            />
            <CustomTextField
              className="flex-100 md:flex-50"
              label="Cognome/LastName"
              focused
            />
            <CustomTextField
              className="flex-100 md:flex-50"
              type="number"
              label="Numero/Mobile"
              focused
            />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <ButtonGroup sx={{ gap: 1 }}>
              <Button
                label={"Cancella"}
                variant="contained"
                id="transition-modal-title"
                onClick={() => setShowModal(false)}
              />
              <PrecompilaButton />
            </ButtonGroup>
            <Button
              sx={{ display: "block", marginLeft: "auto" }}
              label={"Salva"}
              variant="contained"
              onClick={() => setShowModal(false)}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DatiUtilizzatoreModal;

const CustomTextField = styled(TextField)(() => ({
  padding: "0 15px 15px 0",
}));
