import styled from 'styled-components';
import fontClasses from '../styles/fonts';

export const Button = styled.div`
  user-select: none;
  cursor: pointer;
  text-transform: capitalize;
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
