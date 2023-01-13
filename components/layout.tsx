import { Ubuntu } from '@next/font/google';
import styled from 'styled-components';

import { mobileMin } from '../themes/index';
import Navbar from './navbar';
import Footer from './footer';

const opensans = Ubuntu({
  weight: ['300', '400', '500'],
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
  max-width: ${(props) => props.theme.layout.content.maxWidth};
  padding: ${(props) => props.theme.layout.spacing(2, 0)};
  font-size: ${(props) => props.theme.font.size.base};
  flex: 1;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${mobileMin()}
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
