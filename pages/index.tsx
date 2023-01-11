import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import data from '../data/recentWorks.json';

const titleHeight = 64;
const Waterfall = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.8em 1em;
  grid-auto-flow: row dense;
  grid-auto-rows: 20px;
`;

const WaterfallItem = styled.div`
  width: 100%;
  grid-row: auto / span
    ${(props) =>
      Math.floor((props.imgHeight + titleHeight - props.imgHeight * 0.3) / 20)};
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
  font-size: 14px;
`;

const Title = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.layout.spacing(4)};
  color: #000;
  font-size: ${(props) => props.theme.font.size.xlarge};
  text-align: center;
`;

const Page: NextPageWithLayout = () => {
  const [heights, setHeights] = useState<number[]>(data.map((item) => 0));

  useEffect(() => {
    const newHeights = [];
    for (let i = 0; i < heights.length; i++) {
      const img = document.getElementById(`home_img_${i}`);
      newHeights.push(img.height);
    }
    console.log(newHeights);
    setHeights(newHeights);
  }, []);

  return (
    <div>
      <Title>休閒時的塗鴉</Title>
      <Waterfall>
        {data.map((item, i) => (
          <WaterfallItem key={i} imgHeight={heights[i]}>
            {<img width="100%" id={`home_img_${i}`} src={item.fullsrc} />}
            <Text>{item.note}</Text>
          </WaterfallItem>
        ))}
      </Waterfall>
    </div>
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
