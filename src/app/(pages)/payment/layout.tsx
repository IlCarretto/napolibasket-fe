import { Box, useTheme } from "@mui/material";

function PaymentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      {children}
    </Box >
  );
}

export default PaymentLayout;
