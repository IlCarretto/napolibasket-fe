"use client";
import React from "react";
import { Button as MuiButton, ButtonProps, styled } from "@mui/material";

type TButtonProps = {
  label: string | JSX.Element;
  icon?: JSX.Element;
};

function Button({
  label,
  icon,
  variant = "contained",
  ...props
}: TButtonProps & ButtonProps) {
  return (
    <CustomMuiButton
      disableElevation
      variant={variant}
      startIcon={icon}
      {...props}
    >
      {label}
    </CustomMuiButton>
  );
}

export default Button;

const CustomMuiButton = styled(MuiButton)(() => ({
  borderRadius: "0",
}));
