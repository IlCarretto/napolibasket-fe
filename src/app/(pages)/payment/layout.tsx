import { Box } from "@mui/material";

function PaymentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ color: "#444", "& .MuiTypography-root": { color: "#444" } }}>
      {children}
    </Box>
  );
}

export default PaymentLayout;
