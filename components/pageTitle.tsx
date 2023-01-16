import styled from 'styled-components';
import { breakpoint } from '../themes/index';

const Title = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(3.4)};
  font-size: ${({ theme }) => theme.font.size.xlarge};
  text-align: center;
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${({ theme }) => theme.layout.spacing(1)};
  }
`;

export default Title;
