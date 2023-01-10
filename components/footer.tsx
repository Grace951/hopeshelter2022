import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  font-size: ${(props) => props.theme.font.size.base};
  padding: ${(props) => props.theme.layout.spacing(2)};
  color: #707070;
  background: ${(props) => props.theme.bgColors.secondary};
`;

const FooterComp = () => (
  <Footer>&copy; 2023 ChingChing Yeh. All Rights Reserved.</Footer>
);

export default FooterComp;
