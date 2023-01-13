import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.layout.spacing(3.4)};
  font-size: ${(props) => props.theme.font.size.xlarge};
  text-align: center;
`;

export default Title;
