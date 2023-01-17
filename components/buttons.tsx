import styled from 'styled-components';

import fontClasses from '../styles/fonts';

export const Button = styled.div`
  user-select: none;
  cursor: pointer;
  text-transform: capitalize;
`;

export const LinkButton = styled.a`
  margin: ${({ theme }) => theme.layout.spacing(0, 0.4, 0, 0)};
  padding: ${({ theme }) => theme.layout.spacing(0.3, 2)};
  user-select: none;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.light};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.logoGreen};
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const Close = styled(Button)`
  width: 40px;
  height: 40px;
  display: flex;
  color: ${({ theme }) => theme.colors.lightGray};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  font-weight: 100;
  font-size: ${({ theme }) => theme.font.size.xlarge};
`;

export const CloseButton = (props) => (
  <Close
    {...props}
    className={`${props.className || ''} ${fontClasses.lato.className}`}
  >
    &times;
  </Close>
);

export const GoButton = styled(LinkButton)`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.logoGreen};
  line-height: 3.5rem;
`;
