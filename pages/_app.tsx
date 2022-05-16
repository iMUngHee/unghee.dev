import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@components/Layout';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { store } from '@libs/redux/store';
import { DefaultSeo } from 'next-seo';
import DEFAULT_SEO from '@libs/DefaultSEO';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Provider store={store}>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Layout>
            <AnimatePresence
              exitBeforeEnter
              initial={true}
              onExitComplete={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0 });
                }
              }}
            >
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
