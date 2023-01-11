import type { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>Home</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter</title>
        <meta name="description" content="Grace Yeh's personal web site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
