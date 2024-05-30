import { Backdrop, Box, Modal } from "@mui/material";
import React from "react";
import DatiUtilizzatore from "../../Forms/DatiUtilizzatore";

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
          <DatiUtilizzatore setShowModal={setShowModal}/>
        </Box>
      </Modal>
    </div>
  );
};

export default DatiUtilizzatoreModal;
