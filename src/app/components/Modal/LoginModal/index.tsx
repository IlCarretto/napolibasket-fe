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
import React, { CSSProperties, useState } from "react";
import * as S from "./style";
import Login from "../../Forms/Login";
import Register from "../../Forms/Register";
import Link from "next/link";

type TLoginModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ showModal, setShowModal }: TLoginModal) => {
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [isLoginForm, setIsLoginForm] = useState(true);

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
    width: "50%",
  };

  const underlinedStyle: CSSProperties = {
    textDecoration: "underline",
    fontSize: 14,
    textAlign: "center",
    display: "block",
    marginTop: 8,
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
          <Grid xs={12} lg={5}>
            <Box p={3}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                textTransform={"uppercase"}
              >
                {isLoginForm ? "Accedi" : "Registrati"}
              </Typography>
              {isLoginForm ? <Login setShowModal={setShowModal}/> : <Register setShowModal={setShowModal}/>}
              {isLoginForm && (
                <>
                  <Typography mt={1} variant="body2" className="text-center">
                    Sei un nuovo utente?
                  </Typography>
                  <button
                    onClick={() => setIsLoginForm(false)}
                    type="button"
                    className="text-sm hover:underline w-full"
                  >
                    Clicca qui per registrarti gratuitamente
                  </button>
                </>
              )}
              <Typography mt={1} variant="body1" fontSize={12}>
                Questo sito è protetto da reCAPTCHA e si applicano le norme
                sulla Privacy e i Termini di Servizio di Google
              </Typography>
              {isLoginForm ? (
                <Link style={underlinedStyle} href="/">
                  Ho dimenticato la password
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLoginForm(true)}
                  style={underlinedStyle}
                >
                  Hai già un account? Clicca qui per accedere
                </button>
              )}
            </Box>
          </Grid>
          <Grid
            xs={12}
            lg={2}
            className="md:flex md:items-center md:justify-center"
          >
            <Divider
              sx={{
                "&::before, &::after": {
                  borderColor: "rgba(0,0,0,.22)",
                },
              }}
              className="pl-3 pe-3 lg:pl-0 lg:pe-0 lg:pt-3 lg:pb-3"
              orientation={isLgScreen ? "horizontal" : "vertical"}
            >
              oppure
            </Divider>
          </Grid>
          <Grid xs={12} lg={5}>
            <Box p={3}>Accedi con google</Box>
          </Grid>
        </Grid>
        <Box></Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
