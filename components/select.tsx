import { useState } from 'react';
import styled from 'styled-components';
import MenuComp from "./menu"

const Menu = styled(MenuComp)`
    position: absolute;
    left: 0;
    top: 36px;
`;

const Container = styled.div`
  width: 108px;
  height: 36px;
  padding: ${(props) => props.theme.layout.spacing(1, 2)};
  background-color: ${(props) => props.theme.colors.mostGray};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.logoGreen};
  text-transform: capitalize;
  cursor: pointer;
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
    transform: scaleY(${(props) => props.showMenu === "true" ? -1 : 1});
  }
`;


const Select = ({
    items,
    className,
    callback,
    activeKey
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const onClick = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    };

    return (
        <Container className={className} onClick={onClick} showMenu={String(showMenu)}>
            {activeKey}
            {
                showMenu && <Menu
                    items={items}
                    ItemCallback={callback}
                    activeKey={activeKey}
                />
            }
        </Container>
    );
};

export default Select;
