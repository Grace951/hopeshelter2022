import Link from 'next/link';

import { useRouter } from 'next/router';

import type { FC, MouseEvent } from 'react';
import { useCallback, useState } from 'react';

import styled, { css } from 'styled-components';

import MenuComp from './menu';
import { CloseButton } from '../components/buttons';
import fontClasses from '../styles/fonts';
import { MAX_Z_INDEX_VALUE } from '../styles/variables';
import { breakpoint } from '../themes/index';
import { MenuItem } from '../typings';

const Navbar = styled.header`
  width: 100%;
  height: 5.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgColors.secondary};
  z-index: ${MAX_Z_INDEX_VALUE - 1};

  @media all and (max-width: ${breakpoint.tablet}px) {
    height: 4rem;
  }

  @media all and (max-width: ${breakpoint.mobile}px) {
    height: 2.2rem;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.content.maxWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const Logo = styled(Link)`
  width: 180px;
  height: 100%;
  background: url('/images/logoPure.png') no-repeat right center;
  background-size: contain;
  @media all and (max-width: ${breakpoint.tablet}px) {
    width: 10rem;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    width: 2.4rem;
    background: url('/images/ico.png') no-repeat;
  }
`;

const HeaderLiStyles = css<{ $active: boolean }>`
  padding: ${({ theme }) => theme.layout.spacing(3, 2)};
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.large};
  cursor: pointer;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.logoGreen : theme.colors.primary};
  &:link {
    color: ${({ theme, $active }) =>
      $active ? theme.colors.logoGreen : theme.colors.primary};
  }
  &:visited {
    color: ${({ theme, $active }) =>
      $active ? theme.colors.logoGreen : theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.logoGreen};
  }
  &:active {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.logoGreen : theme.colors.primary};
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    height: 100%;
    padding: ${({ theme }) => theme.layout.spacing(0, 1)};
    display: flex;
    align-items: center;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
    font-size: ${({ theme }) => theme.font.size.base};
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

const MenuWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.mostDark};
  border-radius: 5px;
  position: absolute;
  left: 100%;
  top: 20px;
  @media all and (max-width: ${breakpoint.mobile}px) {
    width: 100%;
    padding: ${({ theme }) => theme.layout.spacing(2, 0, 1)};
    position: fixed;
    left: 0;
    top: 30px;
  }
`;

const Close = styled(CloseButton)`
  color: #aaaaaa;
  display: none;
  @media all and (max-width: ${breakpoint.mobile}px) {
    display: flex;
  }
`;

const Menu = styled(MenuComp)`
  @media all and (max-width: ${breakpoint.mobile}px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const NavComp: FC = () => {
  const router = useRouter();

  const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenu = useCallback(() => {
    setIsShowMenu(true);
  }, []);

  const hideMenu = useCallback(() => {
    setIsShowMenu(false);
  }, []);

  const go = useCallback(
    (e: MouseEvent, data: MenuItem) => {
      setIsShowMenu(false);
      router.push(data.key);
    },
    [router]
  );

  const route = router.route;
  const items: MenuItem[] = [
    {
      text: 'Frontend App',
      key: '/portfolio/f2e',
    },
    {
      text: 'Graphic Design',
      key: '/portfolio/graphic',
    },
    {
      text: 'Editorial',
      key: '/portfolio/editoral',
    },
  ];

  return (
    <Navbar>
      <Container className={fontClasses.ubuntu.className}>
        <Logo href="/" aria-label="Back to Hope Shelter index page"></Logo>
        <HeaderLinks>
          <HeaderLinkLi
            href="/"
            $active={route === '/'}
            aria-label="Back to Hope Shelter index page"
          >
            Home
          </HeaderLinkLi>
          <HeaderLinkLi
            href="/aboutme"
            $active={route === '/aboutme'}
            aria-label="My brief indroduction"
          >
            About Me
          </HeaderLinkLi>
          <HeaderLi
            $active={route.indexOf('/portfolio/') !== -1}
            onMouseEnter={showMenu}
            onMouseLeave={hideMenu}
          >
            Portfolio
            {isShowMenu && (
              <MenuWrap>
                <Close onClick={hideMenu} />
                <Menu items={items} ItemCallback={go} activeKey={route}></Menu>
              </MenuWrap>
            )}
          </HeaderLi>
        </HeaderLinks>
      </Container>
    </Navbar>
  );
};

export default NavComp;
