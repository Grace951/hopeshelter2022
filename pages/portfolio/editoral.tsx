import Head from 'next/head';

import type { ReactElement } from 'react';

import styled from 'styled-components';

import { GoButton } from '../../components/buttons';
import Layout from '../../components/layout';
import LoadImg from '../../components/loadImg';
import PageTitle from '../../components/pageTitle';
import { tablet } from '../../themes/index';
import type { NextPageWithLayout } from '../_app';

const Books = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Book = styled.div`
  width: 49%;
  padding: ${({ theme }) => theme.layout.spacing(3)};
  background-color: ${({ theme }) => theme.bgColors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;
  ${tablet(`{
    width: 100%;
  }`)}
`;

const BookTitle = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(0, 1, 1, 0)};
  font-size: ${({ theme }) => theme.font.size.large};
  color: ${({ theme }) => theme.colors.primary};
  align-self: flex-start;
`;

const BookDesc = styled.div`
  width: 100%;
  min-height: 120px;
  margin: ${({ theme }) => theme.layout.spacing(0, 0, 3)};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Picture = styled.a`
  display: flex;
  justify-content: center;
  img {
    max-width: 98%;
  }
`;

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <PageTitle>休閒時的排版作品</PageTitle>
      <Books>
        <Book>
          <BookTitle>業餘作品集</BookTitle>
          <BookDesc>
            這是我的業餘作品集，簡單的自我介紹加上單純大方的作品編排。
            <GoButton
              href="https://issuu.com/grace_yeh/docs/portfilio_issuu"
              aria-label="Visit full vision"
              target="_blank"
              rel="noreferrer"
            >
              Go
            </GoButton>
          </BookDesc>
          <Picture
            href="https://issuu.com/grace_yeh/docs/portfilio_issuu"
            aria-label="Visit full vision"
            target="_blank"
            rel="noreferrer"
          >
            <LoadImg
              src="/images/portfolio/full/portfolio01.jpg"
              alt="作品集 - 這是我的書面作品集，簡單的自我介紹加上單純大方的作品編排。"
              title="作品集 - 這是我的書面作品集，簡單的自我介紹加上單純大方的作品編排。"
            />
          </Picture>
        </Book>
        <Book>
          <BookTitle>公司產品型錄</BookTitle>
          <BookDesc>
            這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。
            <GoButton
              href="https://issuu.com/grace_yeh/docs/______?e=11793034/12474947"
              aria-label="Visit full vision"
              target="_blank"
              rel="noreferrer"
            >
              Go
            </GoButton>
          </BookDesc>
          <Picture
            href="https://issuu.com/grace_yeh/docs/______?e=11793034/12474947"
            aria-label="Visit full vision"
            target="_blank"
            rel="noreferrer"
          >
            <LoadImg
              src="/images/book1/front.jpg"
              alt="公司產品型錄 - 這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。"
              title="公司產品型錄 - 這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。"
            />
          </Picture>
        </Book>
      </Books>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter - Portfolio Editoral</title>
        <meta name="description" content="Portfolio editoral works" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
