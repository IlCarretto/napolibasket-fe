import { Backdrop, Box, Modal, Typography } from "@mui/material";
import React from "react";
import Button from "../../Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 375,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  "& .MuiTypography-root": {
    color: "inherit",
  },
};

type TReCaptchaModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReCaptchaModal = ({ showModal, setShowModal }: TReCaptchaModal) => {
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
          <Typography id="transition-modal-title" variant="body1" mb={3}>
            Conferma che non sei un robot.
          </Typography>
          <Button
            sx={{ display: "block", marginLeft: "auto" }}
            label={"Chiudi"}
            variant="contained"
            onClick={() => setShowModal(false)}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ReCaptchaModal;
