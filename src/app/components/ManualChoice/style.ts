import { FormControl, styled } from "@mui/material";

export const CustomFormControl = styled(FormControl)(({ theme }) => ({
    "& input": {
        padding: "14px",

    },
    "& label": {
        maxWidth: "none",
        fontSize: 14,
        position: "static",
        transform: "none",
        marginBottom: 2,
    },
    "& fieldset": {
        top: 0,
        border: `1px solid ${theme.palette.primary.main}`,
        borderWidth: 2,
    },
    "& legend": {
        display: "none",
    },
    "& .MuiInputBase-root": {
        width: "100%",

    },
    "&.MuiFormControl-root": {
        display: "flex",
        flexGrow: 1
    },
}));