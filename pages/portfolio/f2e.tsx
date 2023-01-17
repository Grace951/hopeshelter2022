import Head from 'next/head';

import type { ReactElement } from 'react';

import styled from 'styled-components';

import Layout from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import SiteShelf from '../../components/siteShelf';
import data from '../../data/f2eWorks.json';
import type { NextPageWithLayout } from '../_app';

const Shelves = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1, 2)};
`;

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <PageTitle> Frontend 作品 </PageTitle>
      <Shelves>
        {data.map((item, id) => {
          return <SiteShelf key={id} {...item} />;
        })}
      </Shelves>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter - Amateur Frontend App</title>
        <meta name="description" content="Amateur frontend app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
