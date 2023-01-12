import type { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Layout from '../components/layout';
import { breakpoint } from '../themes/index';
import data from '../data/about.json';
import type { NextPageWithLayout } from './_app';

const Container = styled.div`
  line-height: 1.6;
`;

const Block = styled.div`
  padding: ${(props) => props.theme.layout.spacing(2, 4)};
  margin: ${(props) => props.theme.layout.spacing(4)};
  border: 1px solid #ddd;
  border-radius: 5px;
  @media all and (max-width: ${breakpoint.laptop}px) {
    padding: ${(props) => props.theme.layout.spacing(2)};
    margin: ${(props) => props.theme.layout.spacing(2)};
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const TopBlock = styled.div`
  padding: ${(props) => props.theme.layout.spacing(2, 4)};
  margin: ${(props) => props.theme.layout.spacing(4)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #ddd;
  border-radius: 5px;
  @media all and (max-width: ${breakpoint.laptop}px) {
    padding: ${(props) => props.theme.layout.spacing(2)};
    margin: ${(props) => props.theme.layout.spacing(2)};
  }
`;

const SubBlock = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  @media all and (max-width: ${breakpoint.tablet}px) {
    width: 100%;
  }
`;

const Box = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1, 0)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${(props) => props.theme.layout.spacing(1)};
  }
`;

const BoxWraps = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1.8, 2.4)};
  background-color: #f4f4f4;
  border-radius: 5px;
  flex: 1;
  @media all and (max-width: ${breakpoint.laptop}px) {
    padding: ${(props) => props.theme.layout.spacing(1.8, 1.4)};
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.font.size.xlarge};
`;

const Brief = styled.div`
  padding: ${(props) => props.theme.layout.spacing(0.4, 0, 0.4, 1.8)};
  font-size: ${(props) => props.theme.font.size.base};
  display: flex;
  align-items: center;
  position: relative;
  img {
    max-height: 60px;
    margin-right: 10px;
  }
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #bfbfbf;
    border-radius: 100%;
    position: absolute;
    left: 0;
  }
`;

const SocailsWrap = styled.div`
  padding: ${(props) => props.theme.layout.spacing(0, 2.4, 2)};
  background-color: #f4f4f4;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Socail = styled.div`
  margin: ${(props) => props.theme.layout.spacing(0, 3, 1, 0)};
  display: flex;
  align-items: center;
  img {
    margin: ${(props) => props.theme.layout.spacing(0, 1, 0, 0)};
  }
  a {
    word-break: break-all;
    font-size: ${(props) => props.theme.font.size.base};
  }
`;

const BriefsWrap = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1.8, 2.4)};
  background-color: #f4f4f4;
  border-radius: 5px;
`;

const InnerBox = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1)};
  font-size: ${(props) => props.theme.font.size.base};
`;

const InnerNote = styled.div`
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 300;
  color: #888;
`;

const InnerText = styled.div`
  font-size: ${(props) => props.theme.font.size.base};
  color: black;
  position: relative;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #bfbfbf;
    border-radius: 100%;
    position: absolute;
    left: -16px;
    top: 8px;
  }
`;

const InnerDesc = styled.div`
  font-size: ${(props) => props.theme.font.size.small};
`;

const SkillsTitle = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.font.size.large};
`;

const Skill = styled.div`
  min-width: 60px;
  padding: ${(props) => props.theme.layout.spacing(0.5, 1)};
  color: #888;
  font-weight: 300;
  display: flex;
  align-items: center;
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${(props) => props.theme.layout.spacing(0.5)};
  }
`;

const SkillsWrap = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.layout.spacing(1.8)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

const Button = styled.a`
  width: 6rem;
  height: 2rem;
  margin: ${(props) => props.theme.layout.spacing(0, 0.4, 0, 0)};
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.logoGreen};
  color: white;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Page: NextPageWithLayout = () => {
  return (
    <Container>
      <Block>
        <Title> I am Grace Yeh </Title>
        <BriefsWrap>
          <Brief>With 5 years frontend development experience</Brief>
          <Brief>Proficient in Typescript, ES6, React with hooks</Brief>
          <Brief>
            Proactive, responsible and passionate self-learning team player
          </Brief>
        </BriefsWrap>
        <SocailsWrap>
          <Socail>
            <Image
              src="/images/skills/github.png"
              width="40"
              height="40"
              alt="github"
            />
            <a
              href="https://github.com/Grace951"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Grace951
            </a>
          </Socail>
          <Socail>
            <Image
              src="/images/skills/linkedin.png"
              width="40"
              height="40"
              alt="Linkedin"
            />
            <a
              href="https://www.linkedin.com/in/grace-yeh-b802b012a/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/grace-yeh-b802b012a/
            </a>
          </Socail>
        </SocailsWrap>
      </Block>
      <TopBlock>
        <SubBlock>
          <Title> Experiences</Title>
          <BoxWraps>
            <InnerBox>
              <InnerText> Senior Frontend Developer </InnerText>
              <InnerDesc>Appier Inc.</InnerDesc>
              <InnerNote> 2021 - 2022 </InnerNote>
            </InnerBox>
            <InnerBox>
              <InnerText>Senior Frontend Developer</InnerText>
              <InnerDesc>Delta Electronics, Inc.</InnerDesc>
              <InnerNote> 2017 - 2021 </InnerNote>
            </InnerBox>
            <InnerBox>
              <InnerText>Frontend Developer </InnerText>
              <InnerDesc>Tunyang Information Corp.</InnerDesc>
              <InnerNote> 2015 - 2016 </InnerNote>
            </InnerBox>
            <InnerBox>
              <InnerText> Software Engineer </InnerText>
              <InnerNote>2011 - 2014</InnerNote>
            </InnerBox>
            <InnerBox>
              <InnerText> Firmware Engineer </InnerText>
              <InnerNote> 2006 - 2009</InnerNote>
            </InnerBox>
          </BoxWraps>
        </SubBlock>
        <SubBlock>
          <Title>Frontend App</Title>
          <BoxWraps>
            <InnerBox>
              <InnerText> React App - Hi-Tech Digital CCTV V2</InnerText>
              <Button
                href="https://react-redux-demo-chingching.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </Button>
            </InnerBox>
            <InnerBox>
              <InnerText>React App - Personal Home Page </InnerText>
              <Buttons>
                <Button
                  href="https://github.com/Grace951/hopeshelter2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </Button>
                <Button
                  href="https://github.com/Grace951/hopeshelter2022"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </Button>
              </Buttons>
            </InnerBox>
            <InnerBox>
              <InnerText> Angular App - Hi-Tech Digital CCTV </InnerText>
              <Buttons>
                <Button
                  href="https://github.com/Grace951/angular1-demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </Button>
                <Button
                  href="http://www.hitechdigitalcctv.com.au/#/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </Button>
              </Buttons>
            </InnerBox>
          </BoxWraps>
        </SubBlock>
        <SubBlock>
          <Title>Exercises</Title>
          <BoxWraps>
            <InnerBox>
              <InnerText> Sortable Searchable React Paging Table </InnerText>
              <Buttons>
                <Button
                  href="https://github.com/Grace951/react-table"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </Button>
                <Button
                  href="https://grace951.github.io/react-table/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Button>
              </Buttons>
            </InnerBox>
            <InnerBox>
              <InnerText> React Image Carousel </InnerText>
              <Buttons>
                <Button
                  href="https://github.com/Grace951/react-image-carousel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </Button>
                <Button
                  href="https://grace951.github.io/react-image-carousel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Button>
              </Buttons>
            </InnerBox>
            <InnerBox>
              <InnerText> Little Game - Mine Sweeper </InnerText>
              <Buttons>
                <Button
                  href="https://grace951.github.io/react-minesweeper/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </Button>
                <Button
                  href="https://github.com/Grace951/react-minesweeper"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Button>
              </Buttons>
            </InnerBox>
          </BoxWraps>
        </SubBlock>
      </TopBlock>
      <Block>
        <Title> Skills </Title>
        <Box>
          <SkillsTitle> Modern Javascript</SkillsTitle>
          <SkillsWrap>
            <Skill>
              <Image
                width="40"
                height="40"
                src="/images/skills/typescript.png"
                alt="TypeScript"
                title="TypeScript"
              />
            </Skill>
            <Skill>
              <Image
                width="40"
                height="40"
                src="/images/skills/es6.png"
                alt="ES6"
                title="ES6"
              />
            </Skill>
            <Skill>
              <Image
                width="40"
                height="40"
                src="/images/skills/reactjs.svg"
                alt="React"
                title="React"
              />
            </Skill>
            <Skill>
              <Image
                width="40"
                height="40"
                src="/images/skills/redux.png"
                alt="Redux"
                title="Redux"
              />
            </Skill>
            <Skill>
              <Image
                width="40"
                height="40"
                src="/images/skills/webpack.svg"
                alt="Webpack"
                title="Webpack"
              />
            </Skill>
            <Skill>
              <Image
                width="40"
                height="40"
                src="/images/skills/styledComponent.png"
                alt="styled-components"
                title="styled-components"
              />
            </Skill>
            <Skill>
              <Image
                width="142"
                height="40"
                src="/images/skills/node.png"
                alt="NodeJs"
                title="NodeJs"
              />
            </Skill>
          </SkillsWrap>
        </Box>
        <Box>
          <SkillsTitle>Front-end Development</SkillsTitle>
          <SkillsWrap>
            <Skill>
              <Image
                width="50"
                height="50"
                src="/images/skills/rwd.png"
                alt="RWD"
                title="RWD"
              />
            </Skill>
            <Skill>
              <Image
                width="36"
                height="50"
                src="/images/skills/html5.png"
                alt="HTML5"
                title="HTML5"
              />
            </Skill>
            <Skill>
              <Image
                width="36"
                height="50"
                src="/images/skills/css3.png"
                alt="CSS3"
                title="CSS3"
              />
            </Skill>
            <Skill>
              <Image
                width="53"
                height="40"
                src="/images/skills/sass.png"
                alt="SASS"
                title="SASS"
              />
            </Skill>
            <Skill>
              <Image
                width="40"
                height="40"
                src="/images/skills/bootstrap.png"
                alt="BootStrap"
                title="BootStrap"
              />
            </Skill>
            <Skill>
              <Image
                width="50"
                height="50"
                alt="jQuery"
                title="jQuery"
                src="/images/skills/jquerylogo.png"
              />
            </Skill>
          </SkillsWrap>
        </Box>
        <Box>
          <SkillsTitle>General Skills</SkillsTitle>
          <SkillsWrap>
            <Skill>
              <Image
                width="90"
                height="40"
                src="/images/skills/git.png"
                alt="Git"
                title="Git"
              />
            </Skill>
            <Skill>
              <Image
                width="156"
                height="40"
                src="/images/skills/docker.png"
                alt="Docker"
                title="Docker"
              />
            </Skill>
            <Skill>
              <Image
                width="87"
                height="40"
                src="/images/skills/npm.png"
                alt="NPM"
                title="NPM"
              />{' '}
            </Skill>
            <Skill>
              <Image
                width="40"
                height="39"
                src="/images/skills/photoshop.png"
                alt="PhotoShop"
                title="PhotoShop"
              />
            </Skill>
            <Skill>
              <Image
                width="40"
                height="39"
                src="/images/skills/illustrator.png"
                alt="Illustrator"
                title="Illustrator"
              />
            </Skill>
          </SkillsWrap>
        </Box>
      </Block>
    </Container>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter - About me</title>
        <meta
          name="description"
          content="I am Grace Yeh, with 5 years frontend development experiences. Proficient in Typescript, ES6, React with hooks Proactive. Responsible and passionate self-learning team player"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
