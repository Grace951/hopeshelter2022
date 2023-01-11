import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({
  weight: ['300'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const Navbar = styled.header`
  width: 100%;
  height: ${(props) => props.theme.layout.header.height};
  border-bottom: 1px solid #dadada;
  position: sticky;
  top: 0;
  background-color: #fff;
  /* box-shadow: 3px 3px 8px rgb(0 0 0 / 30%); */
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.layout.content.maxWidth};
  margin: 0 auto;
  display: flex;
`;

const HeaderLinkLi = styled.li`
  padding: ${(props) => props.theme.layout.spacing(3)}
    ${(props) => props.theme.layout.spacing(2)};
  font-weight: 300;
  font-style: italic;
  font-size: ${(props) => props.theme.font.size.large};
  a:link {
    color: #333333;
  }
  a:visited {
    color: #333333;
  }
  a:hover {
    color: ${(props) => props.theme.colors.grassGreen};
  }

  a:active {
    color: #333333;
  }
`;

const HeaderLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  #amateurLink {
    width: auto;
    padding-top: ${(props) => props.theme.layout.spacing(2)};
    position: relative;
    &:hover div {
      display: block;
    }
  }
`;

const HeaderSubLinks = styled.div`
  display: none;
  padding: ${(props) => props.theme.layout.spacing(0.4)}
    ${(props) => props.theme.layout.spacing(2)};
  white-space: nowrap;
  font-size: ${(props) => props.theme.font.size.base};
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #383838;
  font-style: normal;
  color: #aaa;
`;

const HeaderSubLinkDiv = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1.2)}
    ${(props) => props.theme.layout.spacing(1.6)};
  &:hover {
    color: ${(props) => props.theme.colors.grassGreen};
  }
  cursor: pointer;
`;

const HeaderLink = ({ href, id = '', children }) => (
  <HeaderLinkLi id={id}>
    {href ? <Link href={href}>{children}</Link> : children}
  </HeaderLinkLi>
);
const HeaderSubLink = ({ href, children }) => {
  const router = useRouter();
  const go = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return <HeaderSubLinkDiv onClick={go}>{children}</HeaderSubLinkDiv>;
};

const NavComp = () => (
  <Navbar>
    <Container className={ubuntu.className}>
      <Link href="/">
        <Image
          width="239"
          height="129"
          src="/images/logo.png"
          alt="hope shelter design web"
        />
      </Link>
      <HeaderLinks>
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/aboutme">About Me</HeaderLink>
        <HeaderLink id="amateurLink" href="">
          Amateur
          <HeaderSubLinks>
            <HeaderSubLink href="/amateur/f2e">Front-end App</HeaderSubLink>
            <HeaderSubLink href="/amateur/graphic">
              Graphic Design
            </HeaderSubLink>
            <HeaderSubLink href="/amateur/editoral">Editorial</HeaderSubLink>
          </HeaderSubLinks>
        </HeaderLink>
      </HeaderLinks>
    </Container>
  </Navbar>
);

export default NavComp;
