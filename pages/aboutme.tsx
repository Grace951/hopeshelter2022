import type { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>About Me</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter - About me</title>
        <meta
          name="description"
          content="I am Grace Yeh, with 5 years frontend development experience. Proficient in Typescript, ES6, React with hooks Proactive. Responsible and passionate self-learning team player"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
