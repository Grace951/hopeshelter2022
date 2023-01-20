import Link from 'next/link';

import { useRouter } from 'next/router';

import type { FC, MouseEvent } from 'react';
import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import MenuComp from './menu';
import { CloseButton } from '../components/buttons';
import { breakpoint } from '../themes/index';
import { MenuItem } from '../typings';

const HeaderLiStyles = css<{ $active: boolean }>`
  padding: ${({ theme }) => theme.layout.spacing(3, 2)};
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.large};
  cursor: pointer;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.logoGreen : theme.colors.primary};

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

const StyledLink = styled(Link)`
  ${HeaderLiStyles}
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
`;

const HeaderLi = styled.li`
  ${HeaderLiStyles}
  width: auto;
  position: relative;
`;

const MenuWrap = styled.ul`
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

const HeaderLink: FC<{ data: MenuItem }> = ({ data }) => {
  const router = useRouter();
  const route = router.route;

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

  if (!data.subItems) {
    return (
      <li>
        <StyledLink
          $active={route === data.key}
          href={data.key}
          aria-label={data.note || ''}
        >
          {data.text}
        </StyledLink>
      </li>
    );
  }
  return (
    <HeaderLi
      $active={route.indexOf(data.key) !== -1}
      aria-label={data.note || ''}
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      {data.text}
      {isShowMenu && (
        <MenuWrap>
          <Close onClick={hideMenu} />
          <Menu
            aria-label="sub-menu"
            items={data.subItems}
            ItemCallback={go}
            activeKey={route}
          ></Menu>
        </MenuWrap>
      )}
    </HeaderLi>
  );
};

export default HeaderLink;
