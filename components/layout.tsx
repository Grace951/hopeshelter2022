import styled from 'styled-components';

import fontClasses from '../styles/fonts';
import { mobileMin } from '../themes/index';
import Navbar from './navbar';
import Footer from './footer';

const Main = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.content.maxWidth};
  padding: ${({ theme }) => theme.layout.spacing(2, 0)};
  font-size: ${({ theme }) => theme.font.size.base};
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
      <Main className={fontClasses.ubuntu.className}>{children}</Main>
      <Footer />
    </Container>
  );
}
