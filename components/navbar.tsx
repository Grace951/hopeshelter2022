import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Ubuntu } from '@next/font/google';
import { breakpoint } from '../themes/index';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const Navbar = styled.header`
  width: 100%;
  height: 5.5rem;
  border-bottom: 1px solid #dadada;
  position: sticky;
  top: 0;
  background-color: #fff;

  @media all and (max-width: ${breakpoint.tablet}px) {
    height: 4rem;
  }

  @media all and (max-width: ${breakpoint.mobile}px) {
    height: 2.2rem;
  }
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.layout.content.maxWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const Logo = styled(Link)`
  width: 180px;
  height: 100%;
  background: url('/images/logo.png') no-repeat right center;
  background-size: contain;
  img {
    max-height: 100%;
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    width: 10rem;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    width: 2.4rem;
    background: url('/images/ico.png') no-repeat;
  }
`;

const HeaderLinkLi = styled.li`
  padding: ${(props) => props.theme.layout.spacing(3, 2)};
  font-weight: 300;
  font-style: italic;
  font-size: ${(props) => props.theme.font.size.large};
  a:link {
    color: #333333;
  }
  a:visited {
    color: #333333;
  }
  a:hover {
    color: ${(props) => props.theme.colors.logoGreen};
  }
  a:active {
    color: #333333;
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    height: 100%;
    padding: ${(props) => props.theme.layout.spacing(0, 1)};
    display: flex;
    align-items: center;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${(props) => props.theme.font.size.base};
    font-style: normal;
    display: flex;
    align-items: center;
  }
`;

const HeaderLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  #portfolioLink {
    width: auto;
    padding-top: ${(props) => props.theme.layout.spacing(2)};
    position: relative;
    &:hover div {
      display: block;
    }
  }
`;

const HeaderSubLinks = styled.div`
  display: none;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
  font-size: ${(props) => props.theme.font.size.base};
  font-style: normal;
  position: absolute;
  left: 100%;
  top: 20px;
  background-color: #383838;
  color: #aaa;
  @media all and (max-width: ${breakpoint.mobile}px) {
    font-weight: normal;
    top: 30px;
    left: 0;
  }
`;

const HeaderSubLinkDiv = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1.4, 3)};
  border-bottom: 1px solid #000;
  &:hover {
    color: ${(props) => props.theme.colors.logoGreen};
  }
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    padding: ${(props) => props.theme.layout.spacing(1.2, 2)};
  }
`;

const HeaderLink = ({ href, id = '', children }) => (
  <HeaderLinkLi id={id}>
    {href ? <Link href={href}>{children}</Link> : children}
  </HeaderLinkLi>
);
const HeaderSubLink = ({ href, children }) => {
  const router = useRouter();
  const go = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return <HeaderSubLinkDiv onClick={go}>{children}</HeaderSubLinkDiv>;
};

const NavComp = () => (
  <Navbar>
    <Container className={ubuntu.className}>
      <Logo href="/"></Logo>
      <HeaderLinks>
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/aboutme">About Me</HeaderLink>
        <HeaderLink id="portfolioLink" href="">
          Portfolio
          <HeaderSubLinks>
            <HeaderSubLink href="/portfolio/f2e">Frontend App</HeaderSubLink>
            <HeaderSubLink href="/portfolio/graphic">
              Graphic Design
            </HeaderSubLink>
            <HeaderSubLink href="/portfolio/editoral">Editorial</HeaderSubLink>
          </HeaderSubLinks>
        </HeaderLink>
      </HeaderLinks>
    </Container>
  </Navbar>
);

export default NavComp;
