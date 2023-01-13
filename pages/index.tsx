import type { ReactElement } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';
import PageTitle from '../components/pageTitle';
import PinterestGrid from '../components/pinterestGrid';
import type { NextPageWithLayout } from './_app';
import data from '../data/recentWorks.json';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => props.theme.layout.spacing(0.5, 2, 1.5, 2)};
`;

const Page: NextPageWithLayout = () => {
  const images = data.map((item) => ({
    url: item.images?.[0] || item.fullsrc,
    text: item.note,
    index: item.index,
  }));
  return (
    <Container>
      <PageTitle>休閒時的塗鴉</PageTitle>
      <PinterestGrid data={images} />
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
