import { GeistProvider, CssBaseline } from "@geist-ui/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default MyApp;
