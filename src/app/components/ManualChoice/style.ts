import { Box, FormControl, styled } from "@mui/material";

export const CustomFormControl = styled(FormControl)(({ theme }) => ({
    "& input": {
        padding: "6px",

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

    "&.MuiFormControl-root": {
        display: "flex",
        flexGrow: 1,
        maxWidth: " max-content"
    },
    "& .MuiSelect-select": {
        padding: "8px"
    }
}));

export const Row = styled(Box)(({ theme }) => ({
    padding: "1rem",
    borderTop: "1px solid rgba(0, 0, 0, .250)",
    display: "flex",
    alignItems: "center",
    justifyContent: " space-between"
}));