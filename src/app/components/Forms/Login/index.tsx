import { Box, TextField } from "@mui/material";
import React from "react";
import Button from "../../Button";
import { useFormState } from "react-dom";
import { loginUserAction } from "@/data/actions/auth-actions";
import { ZodErrors } from "../ZodErrors";

const initialState = {
  data: null,
  zodErrors: null,
  message: null,
};

const Login = () => {
  const [formState, formAction] = useFormState(loginUserAction, initialState);

  return (
    <form action={formAction}>
      <Box mt={2}>
        <TextField
          fullWidth
          className="contained"
          placeholder="Email"
          name="email"
        />
        <ZodErrors error={formState?.zodErrors?.email} />
      </Box>
      <Box mt={2}>
        <TextField
          fullWidth
          className="contained"
          placeholder="Password"
          name="password"
        />
        <ZodErrors error={formState?.zodErrors?.password} />
      </Box>
      <Box mt={2}>
        <Button
          type="submit"
          className="w-full"
          variant="contained"
          label={"Accedi"}
        />
      </Box>
    </form>
  );
};

export default Login;
