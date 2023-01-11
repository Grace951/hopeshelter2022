import { Open_Sans } from '@next/font/google';
import styled from 'styled-components';

import Navbar from './navbar';
import Footer from './footer';

const opensans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  fallback: [
    '微軟正黑體',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
});

const Main = styled.main`
  width: 100%;
  padding-top: ${(props) => props.theme.layout.spacing(1)};
  max-width: ${(props) => props.theme.layout.content.maxWidth};
  flex: 1;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Main className={opensans.className}>{children}</Main>
      <Footer />
    </Container>
  );
}
