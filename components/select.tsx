import { FC, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { MenuItem } from '../typings';
import Button from './button';
import MenuComp from './menu';

const Menu = styled(MenuComp)`
  position: absolute;
  left: 0;
  top: 36px;
`;

const Container = styled(Button)<{ showMenu: boolean }>`
  width: 108px;
  height: 36px;
  padding: ${({ theme }) => theme.layout.spacing(1, 2)};
  background-color: ${({ theme }) => theme.colors.mostGray};
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
  callback = (e: MouseEvent<HTMLElement>, item) => {},
  activeKey,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  return (
    <Container className={className} onClick={onClick} showMenu={showMenu}>
      {activeKey}
      {showMenu && (
        <Menu items={items} ItemCallback={callback} activeKey={activeKey} />
      )}
    </Container>
  );
};

export default Select;