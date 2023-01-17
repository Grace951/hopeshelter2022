import Head from 'next/head';

import Image from 'next/image';

import type { ReactElement } from 'react';

import styled from 'styled-components';

import type { NextPageWithLayout } from './_app';
import { LinkButton } from '../components/buttons';
import Layout from '../components/layout';
import data from '../data/abouts.json';
import { breakpoint } from '../themes/index';

const Container = styled.div`
  line-height: 1.6;
`;

const Block = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(2, 4)};
  margin: ${({ theme }) => theme.layout.spacing(4)};
  border: 1px solid #ddd;
  border-radius: 5px;
  @media all and (max-width: ${breakpoint.laptop}px) {
    padding: ${({ theme }) => theme.layout.spacing(2)};
    margin: ${({ theme }) => theme.layout.spacing(2)};
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const TopBlock = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(2, 4)};
  margin: ${({ theme }) => theme.layout.spacing(4)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #ddd;
  border-radius: 5px;
  @media all and (max-width: ${breakpoint.laptop}px) {
    padding: ${({ theme }) => theme.layout.spacing(2)};
    margin: ${({ theme }) => theme.layout.spacing(2)};
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
  padding: ${({ theme }) => theme.layout.spacing(1, 0)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${({ theme }) => theme.layout.spacing(1)};
  }
`;

const BoxWraps = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1.8, 2.4)};
  background-color: #f4f4f4;
  border-radius: 5px;
  flex: 1;
  @media all and (max-width: ${breakpoint.laptop}px) {
    padding: ${({ theme }) => theme.layout.spacing(1.8, 1.4)};
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.xlarge};
`;

const Brief = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(0.4, 0, 0.4, 1.8)};
  font-size: ${({ theme }) => theme.font.size.base};
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
  padding: ${({ theme }) => theme.layout.spacing(0, 2.4, 2)};
  background-color: #f4f4f4;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Socail = styled.div`
  margin: ${({ theme }) => theme.layout.spacing(0, 3, 1, 0)};
  display: flex;
  align-items: center;
  img {
    margin: ${({ theme }) => theme.layout.spacing(0, 1, 0, 0)};
  }
  a {
    word-break: break-all;
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

const BriefsWrap = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1.8, 2.4)};
  background-color: #f4f4f4;
  border-radius: 5px;
`;

const InnerBox = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1)};
  font-size: ${({ theme }) => theme.font.size.base};
`;

const InnerNote = styled.div`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: 300;
  color: #888;
`;

const InnerText = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
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
  font-size: ${({ theme }) => theme.font.size.small};
`;

const SkillsTitle = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.large};
`;

const Skill = styled.div`
  min-width: 60px;
  padding: ${({ theme }) => theme.layout.spacing(0.5, 1)};
  color: #888;
  font-weight: 300;
  display: flex;
  align-items: center;
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${({ theme }) => theme.layout.spacing(0.5)};
  }
`;

const SkillsWrap = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(1.8)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

const Page: NextPageWithLayout = () => {
  return (
    <Container>
      <Block>
        <Title> I am Grace Yeh </Title>
        <BriefsWrap>
          {data.briefs.map((brief, idx) => (
            <Brief key={idx}>{brief}</Brief>
          ))}
        </BriefsWrap>
        <SocailsWrap>
          {data.socails.map((brief, idx) => (
            <Socail key={idx}>
              <Image
                src={brief.img}
                width={brief.imgWidth}
                height={brief.imgHeight}
                alt={brief.text}
              />
              <a href={brief.href} target="_blank" rel="noreferrer">
                {brief.href}
              </a>
            </Socail>
          ))}
        </SocailsWrap>
      </Block>
      <TopBlock>
        <SubBlock>
          <Title> {data.experiences?.title}</Title>
          <BoxWraps>
            {data.experiences?.timelines?.map((experience, idx) => (
              <InnerBox key={idx}>
                {experience.title && <InnerText>{experience.title}</InnerText>}
                {experience.desc && <InnerDesc>{experience.desc}</InnerDesc>}
                {experience.note && <InnerNote>{experience.note}</InnerNote>}
              </InnerBox>
            ))}
          </BoxWraps>
        </SubBlock>
        <SubBlock>
          <Title>{data.frontendApp?.title}</Title>
          <BoxWraps>
            {data.frontendApp?.items?.map((item, idx) => (
              <InnerBox key={idx}>
                <InnerText>{item.title}</InnerText>
                <Buttons>
                  {item.source && (
                    <LinkButton
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </LinkButton>
                  )}
                  {item.visit && (
                    <LinkButton
                      href={item.visit}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </LinkButton>
                  )}
                </Buttons>
              </InnerBox>
            ))}
          </BoxWraps>
        </SubBlock>
        <SubBlock>
          <Title>{data.exercises?.title}</Title>
          <BoxWraps>
            {data.exercises?.items?.map((item, idx) => (
              <InnerBox key={idx}>
                <InnerText>{item.title}</InnerText>
                <Buttons>
                  {item.source && (
                    <LinkButton
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </LinkButton>
                  )}
                  {item.demo && (
                    <LinkButton
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </LinkButton>
                  )}
                </Buttons>
              </InnerBox>
            ))}
          </BoxWraps>
        </SubBlock>
      </TopBlock>
      <Block>
        <Title> Skills </Title>
        {data.skillTypes.map((item, idx) => (
          <Box key={idx}>
            <SkillsTitle> {item.title}</SkillsTitle>
            <SkillsWrap>
              {item?.skills?.map((skill, i) => (
                <Skill key={i}>
                  <Image
                    width={skill.width}
                    height={skill.height}
                    src={skill.img}
                    alt={skill.text}
                    title={skill.text}
                  />
                </Skill>
              ))}
            </SkillsWrap>
          </Box>
        ))}
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
