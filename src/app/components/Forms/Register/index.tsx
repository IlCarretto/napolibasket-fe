import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "../../Button";
import { useFormState } from "react-dom";
import { registerUserAction } from "@/data/actions/auth-actions";
import { ZodErrors } from "../ZodErrors";
import { useAuthDispatch } from "@/app/context/AuthContext";
import theme from "@/app/theme";

const initialState = {
  data: null,
  zodErrors: null,
  message: null,
  login: null,
};

const Register = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAuthDispatch();
  const [formState, formAction] = useFormState(
    registerUserAction,
    initialState
  );

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
        <TextField
          fullWidth
          type="password"
          className="contained"
          placeholder="Conferma password"
          name="confirmPassword"
        />
        <ZodErrors error={formState?.zodErrors?.confirmPassword} />
      </Box>
      <Box mt={2}>
        <FormGroup>
          <CustomFormControlLabel
            required
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={
              <Typography ml={0} fontSize={12}>
                Dichiaro di aver letto e accettato l'informativa sul trattamento
                dei dati personali
              </Typography>
            }
          />
        </FormGroup>
      </Box>
      <Box mt={2}>
        <Button
          disabled={!checked}
          type="submit"
          className="w-full"
          variant="contained"
          label={"Crea il mio account"}
        />
      </Box>
    </form>
  );
};

export default Register;

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  "& .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
}));
