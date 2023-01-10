import 'normalize.css/normalize.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { light } from '../themes';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={light}>
      {getLayout(
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}
// https://blog.logrocket.com/build-react-theme-switcher-app-styled-components/
