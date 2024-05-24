import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { montserrat } from "./theme/typography";
import Header from "./components/Header";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReCaptchaProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Header />
              <main>{children}</main>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
