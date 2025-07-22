"use client";
import { Box, CircularProgress, TextField } from "@mui/material";
import React, { useEffect } from "react";
import Button from "../../Button";
import { useFormState } from "react-dom";
import { loginUserAction } from "@/app/data/actions/auth-actions";
import { ZodErrors } from "../ZodErrors";
import { useFormStatus } from "react-dom";
import { useAuthDispatch } from "@/app/context/AuthContext";

const initialState = {
  data: null,
  zodErrors: null,
  message: null,
};

function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full"
      variant="contained"
      label={"Accedi"}
      startIcon={
        pending && (
          <CircularProgress
            size={24}
            sx={{
              color: "#FFF",
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )
      }
    />
  );
}

const Login = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAuthDispatch();
  const [formState, formAction] = useFormState(loginUserAction, initialState);

  useEffect(() => {
    if (formState.login) {
      dispatch({ type: "LOGIN" });
      setShowModal(false);
    }
  }, [formState]);

  return (
    <form action={formAction}>
      <Box mt={2}>
        <TextField
          fullWidth
          type="email"
          className="contained"
          placeholder="Email"
          name="email"
        />
        <ZodErrors error={formState?.zodErrors?.email} />
      </Box>
      <Box mt={2}>
        <TextField
          fullWidth
          type="password"
          className="contained"
          placeholder="Password"
          name="password"
        />
        <ZodErrors error={formState?.zodErrors?.password} />
      </Box>
      <Box mt={2}>
        <Submit />
      </Box>
    </form>
  );
};

export default Login;
