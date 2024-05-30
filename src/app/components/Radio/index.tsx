import React from "react";
import { Radio, FormControlLabelProps } from "@mui/material";
import * as S from "./style";

interface CustomRadioProps
  extends Omit<FormControlLabelProps, "control" | "label"> {
  label: React.ReactNode;
  value: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  value,
  ...props
}) => {
  return (
    <S.CustomFormControlLabel
      className="w-full"
      value={value}
      label={
        <>
          <S.CustomRadio className="custom-radio" />
          {label}
        </>
      }
      control={<Radio sx={{ display: "none" }} />}
      {...props}
    />
  );
};

export default CustomRadio;
