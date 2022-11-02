import "../styles/globals.scss";
import "../styles/tailwind.scss";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system"
    >
      <GoogleAnalytics trackPageViews strategy="lazyOnload" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
