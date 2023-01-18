import type { FC, MouseEvent } from 'react';
import { useState } from 'react';

import styled from 'styled-components';

import { Button, GoButton, LinkButton } from './buttons';
import LoadImg from './loadImg';
import fontClasses from '../styles/fonts';
import { breakpoint } from '../themes/index';

const Container = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1, 2, 2)};
  margin: ${({ theme }) => theme.layout.spacing(0, 0, 4)};
  line-height: 1.7;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${({ theme }) => theme.layout.spacing(0, 0, 1)};
  }
`;

const Brief = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.layout.spacing(0, 1)};
  display: flex;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
`;

const Block = styled.div`
  width: 44%;
  padding: ${({ theme }) => theme.layout.spacing(0, 1)};
  @media all and (max-width: ${breakpoint.mobile}px) {
    width: 98%;
  }
`;

const WebLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const WebLogo = styled.a`
  display: block;
  img {
    max-width: 100%;
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    max-width: 120px;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    max-width: 100px;
  }
`;

const WebTitle = styled.a`
  padding: ${({ theme }) => theme.layout.spacing(1.4, 0)};
  margin: ${({ theme }) => theme.layout.spacing(0, 2)};
  display: block;
  position: relative;
  top: 0px;
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.xlarge};
  line-height: 1;
  @media all and (max-width: ${breakpoint.mobile}px) {
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.size.large};
    padding: ${({ theme }) => theme.layout.spacing(0)};
    margin: ${({ theme }) => theme.layout.spacing(0, 1, 0, 0.4)};
  }
`;

const Details = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1, 1.6)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.secondary};
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${({ theme }) => theme.layout.spacing(0)};
  }
`;

const TechLogos = styled.div`
  margin: ${({ theme }) => theme.layout.spacing(1, 0)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  @media all and (max-width: ${breakpoint.mobile}px) {
    padding: ${({ theme }) => theme.layout.spacing(0, 0)};
    justify-content: center;
  }
`;

const Tech = styled.div`
  @media all and (max-width: ${breakpoint.mobile}px) {
    padding: ${({ theme }) => theme.layout.spacing(1, 0, 0)};
  }
`;

const TechLogo = styled.div`
  margin: ${({ theme }) => theme.layout.spacing(0.2, 0.4)};
  min-width: 40px;
  height: 40px;
  img {
    max-height: 100%;
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    min-width: 30px;
    height: 30px;
  }
`;

const ViewVideo = styled(Button)`
  width: 200px;
  padding: ${({ theme }) => theme.layout.spacing(0, 2)};
  margin: ${({ theme }) => theme.layout.spacing(1, 0, 2)};
  background-color: ${({ theme }) => theme.colors.logoGreen};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: 2.4;
  border-radius: 20px;
  cursor: pointer;
`;

const SourceCode = styled(LinkButton)`
  width: 160px;
  padding: ${({ theme }) => theme.layout.spacing(0, 2)};
  margin: ${({ theme }) => theme.layout.spacing(1, 0, 2)};
  background-color: ${({ theme }) => theme.colors.logoGreen};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: 2.4;
  border-radius: 20px;
  cursor: pointer;
`;

const BriefDesc = styled.div`
  margin: ${({ theme }) => theme.layout.spacing(1, 0)};
`;

const GoWrap = styled.div`
  width: 3.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface Props {
  webLink: {
    src?: string;
    img?: string;
    title: string;
    font?: string;
    fontWeight?: number;
  };
  webTeches: {
    link: string;
    img: string;
  }[];
  brief: string[];
  techs: string;
  sourceCode?: string;
  video?: string;
}

const SiteShlef: FC<Props> = ({
  webLink,
  webTeches = [],
  brief = [],
  techs = '',
  sourceCode = '',
  video = '',
}) => {
  const [showSnap, showShowSnap] = useState(false);

  const viewSnap = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    showShowSnap(!showSnap);
  };

  const titleStyle: { fontWeight?: number } = {};
  if (webLink.fontWeight) {
    titleStyle.fontWeight = webLink.fontWeight;
  }

  return (
    <Container>
      <Brief>
        <WebLink>
          <WebLogo href={webLink.src} target="_blank" rel="noreferrer">
            {webLink.img && <LoadImg src={webLink.img} />}
          </WebLogo>
          <WebTitle
            className={`${fontClasses[webLink.font].className}`}
            style={titleStyle}
          >
            {webLink.title}
          </WebTitle>
          {!!webLink.src && (
            <GoWrap>
              <GoButton href={webLink.src} target="_blank" rel="noreferrer">
                Go
              </GoButton>
            </GoWrap>
          )}
        </WebLink>
      </Brief>
      <Details>
        <Block>
          {brief.map((item: string, i: number) => (
            <BriefDesc key={i}>{item}</BriefDesc>
          ))}
          {sourceCode && (
            <SourceCode target="_blank" href={sourceCode} rel="noreferrer">
              Source code
            </SourceCode>
          )}
          {video && (
            <ViewVideo onClick={viewSnap}>
              {showSnap ? 'Hide demo video' : 'View demo video'}
            </ViewVideo>
          )}
        </Block>
        <Block>
          <Tech>{techs}</Tech>
          <TechLogos>
            {webTeches.map((item, id) => (
              <TechLogo key={id}>
                <LoadImg src={item.img} />
              </TechLogo>
            ))}
          </TechLogos>
        </Block>
      </Details>
      {video && showSnap && (
        <video width="100%" controls autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </Container>
  );
};

export default SiteShlef;
