import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "@components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
