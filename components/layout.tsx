import { Open_Sans } from '@next/font/google';
import styled from 'styled-components';

import Navbar from './navbar';
import FooterComp from './footer';

const opensans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const Main = styled.main`
  width: 100%;
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

const NavbarComp = styled(Navbar)`
  width: 100%;
  max-width: ${(props) => props.theme.layout.content.maxWidth};
  margin: 0 auto;
  border-bottom: 1px solid #dadada;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <NavbarComp />
      <Main className={opensans.className}>{children}</Main>
      <FooterComp />
    </Container>
  );
}
