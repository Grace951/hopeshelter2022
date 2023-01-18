import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';

import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';

import type { NextPage } from 'next';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { MAX_Z_INDEX_VALUE } from '../styles/variables';
import { themes, breakpoint } from '../themes';
import { ThemeType } from '../typings';
import { Button } from '../components/buttons';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const SwitchTheme = styled(Button)`
  padding: ${({ theme }) => theme.layout.spacing(1, 2)};
  position: fixed;
  background-color: ${({ theme }) => theme.colors.logoGreen};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  right: 5%;
  top: 84px;
  z-index: ${MAX_Z_INDEX_VALUE - 2};
  @media all and (max-width: ${breakpoint.tablet}px) {
    top: 60px;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    top: 30px;
  }
`;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      {getLayout(
        <>
          <GlobalStyle />
          <SwitchTheme onClick={toggleTheme}>Switch Theme</SwitchTheme>
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}
// https://blog.logrocket.com/build-react-theme-switcher-app-styled-components/
