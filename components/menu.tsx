import type { ElementType, FC, MouseEvent } from 'react';

import styled from 'styled-components';

import { breakpoint } from '../themes/index';
import { MenuItem } from '../typings';

const Container = styled.div`
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
  font-size: ${({ theme }) => theme.font.size.base};
  font-style: normal;
  background-color: ${({ theme }) => theme.colors.mostGray};
`;

const Item = styled.div<{ $active: boolean }>`
  padding: ${({ theme }) => theme.layout.spacing(1.4, 3)};
  text-transform: capitalize;
  border-bottom: 1px solid #000;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.logoGreen : theme.colors.lightGray};
  &:hover {
    color: ${({ theme }) => theme.colors.logoGreen};
  }
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${({ theme }) => theme.layout.spacing(1.2, 2, 1, 2)};
  }
`;

interface Props {
  items: MenuItem[];
  className?: string;
  ItemComp?: ElementType<{ key: number | string; data: MenuItem }>;
  ItemCallback: (e: MouseEvent<HTMLElement>, item: MenuItem) => void;
  activeKey: string;
}

const Menu: FC<Props> = ({
  items = [],
  className,
  ItemComp,
  ItemCallback,
  activeKey = '',
}) => (
  <Container className={className}>
    {items?.map((item, idx) => {
      const callback = (e: MouseEvent<HTMLElement>) => {
        ItemCallback(e, item);
      };
      return ItemComp ? (
        <ItemComp key={idx} data={item}>
          {item.text}
        </ItemComp>
      ) : (
        <Item key={idx} onClick={callback} $active={activeKey === item.key}>
          {item.text}
        </Item>
      );
    })}
  </Container>
);

export default Menu;
