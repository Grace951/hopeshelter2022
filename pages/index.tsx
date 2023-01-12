import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import data from '../data/recentWorks.json';
import {
  laptop,
  desktop,
  tablet,
  mobile,
  breakpoint,
  BreakpointKey,
} from '../themes/index';

const titleHeight = 64;
const Waterfall = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 1em;
  grid-auto-flow: row dense;
  grid-auto-rows: 0.04fr;

  ${desktop(`{
    grid-auto-rows: 0.04fr;
    grid-template-columns: repeat(4, 1fr);
  }`)}

  ${laptop(`{
    grid-auto-rows: 0.04fr;
    grid-template-columns: repeat(3, 1fr);
  }`)}

  ${tablet(`{
    grid-auto-rows: 0.046fr;
    grid-template-columns: repeat(2, 1fr);
  }`)}

  ${mobile(`{
    grid-auto-rows: 0.02fr;
    grid-template-columns: repeat(1, 1fr);
  }`)}
`;

const Container = styled.div`
  margin: 0 auto;
  padding: ${(props) => props.theme.layout.spacing(0.5, 2, 1.5, 2)};

  ${desktop(`{
    width: ${breakpoint.laptop}px;
  }`)}
  ${laptop(`{
    width: ${breakpoint.tablet}px;
  }`)}
  ${tablet(`{
    width: ${breakpoint.mobile}px;
  }`)}
  ${mobile(`{
    width: 320px;
  }`)}
`;

const WaterfallItem = styled(Link)`
  width: 100%;
  grid-row: auto / span
    ${(props) => parseInt(parseFloat(props.imgratio) * 26) + 14};

  @media all and (max-width: ${breakpoint.desktop}px) {
    grid-row: auto / span
      ${(props) => parseInt(parseFloat(props.imgratio) * 27) + 12};
  }
  @media all and (max-width: ${breakpoint.laptop}px) {
    grid-row: auto / span
      ${(props) => parseInt(parseFloat(props.imgratio) * 25) + 12};
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    grid-row: auto / span
      ${(props) => parseInt(parseFloat(props.imgratio) * 22) + 16};
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    grid-row: auto / span
      ${(props) => parseInt(parseFloat(props.imgratio) * 28) + 14};
  }

  color: #ddd;
  box-shadow: 1px 1px 8px rgb(0 0 0 / 20%);
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 3px 3px 15px rgb(0 0 0 / 80%);
  }
  img {
    border-bottom: 1px solid #d1d1d1;
  }
`;

const Text = styled.div`
  height: ${titleHeight}px;
  padding: ${(props) => props.theme.layout.spacing(1.4)};
  color: #434343;
  line-height: 1.5;
  font-size: ${(props) => props.theme.font.size.small};
`;

const Title = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.layout.spacing(3.4)};
  color: #000;
  font-size: ${(props) => props.theme.font.size.xlarge};
  text-align: center;
`;

const Page: NextPageWithLayout = () => {
  const [imgRatios, setImgRatios] = useState<number[]>(data.map(() => 0));
  const [dimesion, setDimesion] = useState<BreakpointKey>('desktop');

  // console.log(dimesion);
  const getDimension = () => {
    if (window.innerWidth >= breakpoint.bigDesktop) {
      return 'bigDesktop';
    } else if (window.innerWidth >= breakpoint.desktop) {
      return 'desktop';
    } else if (window.innerWidth >= breakpoint.laptop) {
      return 'laptop';
    } else if (window.innerWidth >= breakpoint.tablet) {
      return 'tablet';
    } else if (window.innerWidth >= breakpoint.mobile) {
      return 'mobile';
    }
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      const currentDimension = getDimension();
      if (currentDimension !== dimesion) {
        setDimesion(currentDimension);
      }
    }, 500);
    debouncedHandleResize();
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [dimesion]);

  useEffect(() => {
    const newImgRatios = [];
    for (let i = 0; i < imgRatios.length; i++) {
      const img = document.getElementById(`home_img_${i}`) as HTMLImageElement;
      newImgRatios.push(img.height / img.width);
    }
    setImgRatios(newImgRatios);
  }, []);

  return (
    <Container>
      <Title>休閒時的塗鴉</Title>
      <Waterfall>
        {data.map((item, i) => {
          const imgRatio = imgRatios[i];
          return (
            <WaterfallItem
              key={i}
              imgratio={imgRatio}
              href={`/amateur/${item.index}`}
            >
              {
                <img
                  width="100%"
                  id={`home_img_${i}`}
                  src={item.fullsrc}
                  alt={item.note}
                />
              }
              <Text>{item.note}</Text>
            </WaterfallItem>
          );
        })}
      </Waterfall>
    </Container>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter - Home</title>
        <meta name="description" content="Grace Yeh's personal web site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
