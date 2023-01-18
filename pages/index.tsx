import Head from 'next/head';
import Link from 'next/link';

import type { ReactElement } from 'react';

import styled from 'styled-components';

import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout';
import LoadImg from '../components/loadImg';
import PageTitle from '../components/pageTitle';
import PinterestGrid from '../components/pinterestGrid';
import data from '../data/recentWorks.json';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.layout.spacing(0, 2, 1.5, 2)};
`;

const WorkItemElement = styled(Link)`
  img {
    border-bottom: 1px solid #d1d1d1;
  }
`;

const Info = styled.div<{ height: number }>`
  max-height: ${({ height }) => height};
  padding: ${({ theme }) => theme.layout.spacing(1.4)};
  color: #434343;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  flex: 1;
  color: #434343;
  font-size: ${({ theme }) => theme.font.size.small};
`;

interface WorkItem {
  url: string;
  text: string;
  index: string;
  link: string;
}

const Page: NextPageWithLayout = () => {
  const infoHeight = 100;
  const images: WorkItem[] = data.map((item) => ({
    url: item.images?.[0] || item.fullsrc,
    text: item.note,
    index: item.index,
    link: `/portfolio/${item.index}`,
  }));
  const imgUrls: string[] = data.map(
    (item) => item.images?.[0] || item.fullsrc
  );
  const ratios: number[] = data.map((item) => item.imgRatio);

  const ContentComp = ({ item }: { item: WorkItem }) => (
    <WorkItemElement
      href={item.link}
      rel="noreferrer"
      aria-label="Visit to get detail information"
    >
      <LoadImg width="100%" src={item.url} alt={item.text} />
      <Info height={infoHeight}>
        <Text>{item.text}</Text>
      </Info>
    </WorkItemElement>
  );
  return (
    <Container>
      <PageTitle>休閒時的塗鴉</PageTitle>
      <PinterestGrid<WorkItem>
        gap={15}
        itemWidth={260}
        data={images}
        imgUrls={imgUrls}
        ContentComp={ContentComp}
        infoHeight={infoHeight}
        ratios={ratios}
      />
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
