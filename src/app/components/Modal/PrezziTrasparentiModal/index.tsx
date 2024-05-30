import { Backdrop, Box, Modal, Typography, useTheme } from "@mui/material";
import React from "react";
import Button from "../../Button";
import PrezziTrasparentiTable from "../../Table/PrezziTrasparentiTable";
import { IPriceForSection } from "@/app/context/type";

type TPrezziTrasparentiModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: IPriceForSection;
};

const PrezziTrasparentiModal = ({
  showModal,
  setShowModal,
  data,
}: TPrezziTrasparentiModal) => {
  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    color: theme.palette.primary.main,
    "& .MuiTypography-root": {
      color: "inherit",
    },
  };
  return (
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
          Prezzi trasparenti
        </Typography>
        <PrezziTrasparentiTable rows={data} />
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            * Iva inclusa
          </Typography>
        </Box>
        <Button
          sx={{ display: "block", marginLeft: "auto", marginTop: 4 }}
          label={"Chiudi"}
          variant="contained"
          onClick={() => setShowModal(false)}
        />
      </Box>
    </Modal>
  );
};

export default PrezziTrasparentiModal;
