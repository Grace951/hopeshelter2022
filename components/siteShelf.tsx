import type { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { breakpoint } from '../themes/index';
import fontClasses from '../styles/fonts';
import Button from './button';
import LoadImg from './loadImg';

const Container = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1, 2, 2)};
  margin: ${({ theme }) => theme.layout.spacing(0, 0, 4)};
  line-height: 1.7;
  border-bottom: 1px solid #eaeaea;
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
  color: #000;
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
`;

const Details = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1, 1.6)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

const TechLogo = styled.a`
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
  color: #fff;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: 2.4;
  border-radius: 18px;
  cursor: pointer;
`;

const GoWrap = styled.div`
  width: 3.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Go = styled.a`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.logoGreen};
  color: white;
  line-height: 3.5rem;
  text-align: center;
`;

const SourceCode = styled.div`
  word-break: break-all;
`;

interface Props {
  webLink: {
    src: string;
    img?: string;
    title: string;
    font?: string;
    fontWeight?: number;
  };
  webTeches: {
    link: string;
    img: string;
  }[];
  brief: string;
  techs: string;
  sourceCode?: string;
  video?: string;
}

const SiteShlef: FC<Props> = ({
  webLink,
  webTeches = [],
  brief = '',
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
          <GoWrap>
            <Go href={webLink.src} target="_blank" rel="noreferrer">
              Go
            </Go>
          </GoWrap>
        </WebLink>
      </Brief>
      <Details>
        <Block>
          {brief}
          {sourceCode && (
            <SourceCode>
              Source code:{' '}
              <a target="_blank" href={sourceCode} rel="noreferrer">
                {sourceCode}
              </a>
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
              <TechLogo
                key={id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
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
