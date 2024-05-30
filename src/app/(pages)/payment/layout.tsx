import { Box } from "@mui/material";

function PaymentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{
      minHeight: "calc(100vh - 66px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#444", "& .MuiTypography-root": { color: "#444" }
    }}>
      {children}
    </Box >
  );
}

export default PaymentLayout;
