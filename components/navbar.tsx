import Link from 'next/link';

import type { FC } from 'react';

import styled from 'styled-components';

import fontClasses from '../styles/fonts';
import { MAX_Z_INDEX_VALUE } from '../styles/variables';
import { breakpoint } from '../themes/index';
import { MenuItem } from '../typings';
import HeaderLink from './headerLink';

const Wraper = styled.header`
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

const NavContainer = styled.div`
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

const HeaderLinksContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderLinks: FC<{ navItems: MenuItem[] }> = ({ navItems }) => {
  return (
    <HeaderLinksContainer>
      {navItems.map((navItem: MenuItem) => (
        <HeaderLink key={navItem.key} data={navItem}></HeaderLink>
      ))}
    </HeaderLinksContainer>
  );
};

const Nav: FC<{ navItems: MenuItem[] }> = ({ navItems }) => {
  return (
    <Wraper>
      <NavContainer className={fontClasses.ubuntu.className}>
        <Logo href="/" aria-label="Back to Hope Shelter index page"></Logo>
        <HeaderLinks navItems={navItems} />
      </NavContainer>
    </Wraper>
  );
};

export default Nav;
