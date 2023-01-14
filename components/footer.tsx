import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.base};
  padding: ${({ theme }) => theme.layout.spacing(2)};
  color: #707070;
  background: ${({ theme }) => theme.bgColors.dark};
`;

const FooterComp = () => (
  <Footer>&copy; 2023 ChingChing Yeh. All Rights Reserved.</Footer>
);

export default FooterComp;
