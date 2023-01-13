import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { Ubuntu } from '@next/font/google';
import { breakpoint } from '../themes/index';
import MenuComp from './menu';

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

const HeaderLiStyles = css`
  padding: ${(props) => props.theme.layout.spacing(3, 2)};
  font-weight: 300;
  font-style: italic;
  font-size: ${(props) => props.theme.font.size.large};
  cursor: pointer;
  color: ${(props) =>
    props.active === 'true'
      ? props.theme.colors.logoGreen
      : props.theme.colors.primary};
  &:link {
    color: ${(props) =>
      props.active === 'true'
        ? props.theme.colors.logoGreen
        : props.theme.colors.primary};
  }
  &:visited {
    color: ${(props) =>
      props.active === 'true'
        ? props.theme.colors.logoGreen
        : props.theme.colors.primary};
  }
  &:hover {
    color: ${(props) => props.theme.colors.logoGreen};
  }
  &:active {
    color: ${(props) =>
      props.active === 'true'
        ? props.theme.colors.logoGreen
        : props.theme.colors.primary};
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

const HeaderLinkLi = styled(Link)`
  ${HeaderLiStyles}
`;

const HeaderLi = styled.div`
  ${HeaderLiStyles}
  width: auto;
  position: relative;
`;

const Menu = styled(MenuComp)`
  display: none;
  position: absolute;
  left: 100%;
  top: 20px;
  @media all and (max-width: ${breakpoint.mobile}px) {
    top: 30px;
    left: 0;
  }
  ${HeaderLi}:hover & {
    display: block;
  }
`;

const HeaderLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const NavComp = () => {
  const router = useRouter();
  const go = useCallback(
    (e, data) => {
      e.preventDefault();
      router.push(data.link);
    },
    [router]
  );
  const route = router.route;
  const items = [
    {
      text: 'Frontend App',
      link: '/portfolio/f2e',
      key: '/portfolio/f2e',
    },
    {
      text: 'Graphic Design',
      link: '/portfolio/graphic',
      key: '/portfolio/graphic',
    },
    {
      text: 'Editorial',
      link: '/portfolio/editoral',
      key: '/portfolio/editoral',
    },
  ];

  return (
    <Navbar>
      <Container className={ubuntu.className}>
        <Logo href="/"></Logo>
        <HeaderLinks>
          <HeaderLinkLi href="/" active={route === '/' ? 'true' : ''}>
            Home
          </HeaderLinkLi>
          <HeaderLinkLi
            href="/aboutme"
            active={route === '/aboutme' ? 'true' : ''}
          >
            About Me
          </HeaderLinkLi>
          <HeaderLi
            id="portfolioLink"
            active={route.indexOf('/portfolio/') !== -1 ? 'true' : ''}
          >
            Portfolio
            <Menu items={items} ItemCallback={go} activeKey={route}></Menu>
          </HeaderLi>
        </HeaderLinks>
      </Container>
    </Navbar>
  );
};

export default NavComp;
