import {
  Backdrop,
  Box,
  ButtonGroup,
  Modal,
  TextField,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Button from "../../Button";
import PrecompilaButton from "../../Button/PrecompilaButton";
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
  const theme = useTheme();

  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

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
            <DatiUtilizzatore />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={isTabletScreen ? "column" : "row"}
          >
            <ButtonGroup
              sx={{
                gap: 1,
                flexDirection: isTabletScreen ? "column-reverse" : "row",
              }}
            >
              <Button
                label={"Cancella"}
                variant="contained"
                id="transition-modal-title"
                onClick={() => setShowModal(false)}
              />
              <PrecompilaButton />
            </ButtonGroup>
            <Button
              sx={{
                display: "block",
                marginLeft: isTabletScreen ? 0 : "auto",
                marginTop: isTabletScreen ? 1 : 0,
              }}
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

