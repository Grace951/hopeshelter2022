import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(3.4)};
  font-size: ${({ theme }) => theme.font.size.xlarge};
  text-align: center;
`;

export default Title;
