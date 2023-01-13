import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Ubuntu } from '@next/font/google';
import { breakpoint } from '../themes/index';

const Container = styled.div`
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 50%);
  font-size: ${(props) => props.theme.font.size.base};
  font-style: normal;
  background-color: #383838;
`;

const Item = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1.4, 3)};
  text-transform: capitalize;
  border-bottom: 1px solid #000;
  color: ${(props) => (props.active ? props.theme.colors.logoGreen : '#aaa')};
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

const Menu = ({ items, ItemComp = null, ItemCallback, activeKey = '' }) => {
  console.log('activeKey', activeKey);
  return (
    <Container>
      {items?.map((item, idx) => {
        const callback = (e) => {
          ItemCallback(e, item);
        };
        return ItemComp ? (
          <ItemComp key={idx} data={item}>
            {item.text}
          </ItemComp>
        ) : (
          <Item key={idx} onClick={callback} active={activeKey === item.key}>
            {item.text}
          </Item>
        );
      })}
    </Container>
  );
};

export default Menu;
