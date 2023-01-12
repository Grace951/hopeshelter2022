import type { ReactElement } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { tablet } from '../../themes/index';
import type { NextPageWithLayout } from '../_app';

const Container = styled.div`
  line-height: 1.8;
`;

const Title = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.layout.spacing(3.4)};
  color: #000;
  font-size: ${(props) => props.theme.font.size.xlarge};
  text-align: center;
`;

const Books = styled.div`
  padding: ${(props) => props.theme.layout.spacing(2)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Book = styled.div`
  width: 49%;
  padding: ${(props) => props.theme.layout.spacing(3)};
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${tablet(`{
    width: 100%;
  }`)}
`;

const BookTitle = styled.div`
  padding: ${(props) => props.theme.layout.spacing(0, 1, 1, 0)};
  font-size: ${(props) => props.theme.font.size.large};
  color: ${(props) => props.theme.colors.logoBrown};
  align-self: flex-start;
`;

const BookDesc = styled.div`
  width: 100%;
  min-height: 120px;
  margin: ${(props) => props.theme.layout.spacing(0, 0, 3)};
  font-size: ${(props) => props.theme.font.size.base};
  color: ${(props) => props.theme.colors.darkGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Go = styled.a`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.logoGreen};
  color: white;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
    <Container>
      <Title>休閒時的排版作品</Title>
      <Books>
        <Book>
          <BookTitle>業餘作品集</BookTitle>
          <BookDesc>
            這是我的業餘作品集，簡單的自我介紹加上單純大方的作品編排。
            <Go
              href="https://issuu.com/grace_yeh/docs/portfilio_issuu"
              target="_blank"
              rel="noreferrer"
            >
              Go
            </Go>
          </BookDesc>
          <Picture
            href="https://issuu.com/grace_yeh/docs/portfilio_issuu"
            target="_blank"
            rel="noreferrer"
          >
            <img
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
            <Go
              href="https://issuu.com/grace_yeh/docs/______?e=11793034/12474947"
              target="_blank"
              rel="noreferrer"
            >
              Go
            </Go>
          </BookDesc>
          <Picture
            href="https://issuu.com/grace_yeh/docs/______?e=11793034/12474947"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/book1/front.jpg"
              alt="公司產品型錄 - 這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。"
              title="公司產品型錄 - 這是一本產品型錄的排版練習，以高對比大標題吸引讀者的目光，並以留白使版面舒適大方。"
            />
          </Picture>
        </Book>
      </Books>
    </Container>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter - Amateur Editoral</title>
        <meta name="description" content="Grace Yeh's personal web site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
