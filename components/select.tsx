import type { FC, MouseEvent } from 'react';
import { useState } from 'react';

import styled from 'styled-components';

import { Button } from './buttons';
import MenuComp from './menu';
import { MenuItem } from '../typings';

const Menu = styled(MenuComp)`
  position: absolute;
  left: 0;
  top: 36px;
`;

const Container = styled(Button)<{ showMenu: boolean }>`
  width: 108px;
  height: 36px;
  padding: ${({ theme }) => theme.layout.spacing(1, 2)};
  background-color: ${({ theme }) => theme.colors.mostDark};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.logoGreen};
  position: relative;
  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #ffffff transparent transparent transparent;
    position: absolute;
    right: 10px;
    top: 14px;
    transform: scaleY(${({ showMenu }) => (showMenu ? -1 : 1)});
  }
`;

interface Props {
  items: MenuItem[];
  className?: string;
  callback?: (e: MouseEvent<HTMLElement>, item: MenuItem) => void;
  activeKey: string;
}

const Select: FC<Props> = ({
  items = [],
  className = '',
  callback,
  activeKey,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const selectedItem: MenuItem = items.filter(
    (item) => item.key === activeKey
  )[0];

  return (
    <Container className={className} onClick={onClick} showMenu={showMenu}>
      {selectedItem?.text || ''}
      {showMenu && (
        <Menu items={items} ItemCallback={callback} activeKey={activeKey} />
      )}
    </Container>
  );
};

export default Select;
