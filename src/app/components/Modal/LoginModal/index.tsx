import {
  Backdrop,
  Box,
  Divider,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Button from "../../Button";
import * as S from "./style";

type TLoginModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ showModal, setShowModal }: TLoginModal) => {
  const theme = useTheme();
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
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
        <S.LoginHero />
        <Grid container>
          <Grid xs={12} md={5}>
            <Box p={3}>
              <Typography id="transition-modal-title" variant="body1" mb={3}>
                Vivi le tue emozioni!
              </Typography>
              <Typography>Sei un nuovo utente?</Typography>
              <button type="button">
                Clicca qui per registrarti gratuitamente
              </button>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={2}
            className="md:flex md:items-center md:justify-center"
          >
            <Divider orientation={isTabletScreen ? "horizontal" : "vertical"}>
              oppure
            </Divider>
          </Grid>
          <Grid xs={12} md={5}>
            <Box p={3}>Accedi con google</Box>
          </Grid>
        </Grid>
        <Box></Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
