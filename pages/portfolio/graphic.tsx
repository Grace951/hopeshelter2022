import type { ReactElement } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Menu from '../../components/menu';
import data from '../../data/graphicDesign.json';
import { GrapgicDesignType } from '../../typings';
import { GRAPHY_DESIGN_TYPE } from '../../constants';
import type { NextPageWithLayout } from '../_app';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => props.theme.layout.spacing(0.5, 2, 1.5, 2)};
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.layout.spacing(3.4)};
  font-size: ${(props) => props.theme.font.size.xlarge};
  text-align: center;
`;

const Left = styled.div`
  width: 300px;
  padding: ${(props) => props.theme.layout.spacing(12, 1, 1)};
  color: #000;
`;

const Right = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1)};
  flex: 1;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled(Link)`
  width: 32%;
  height: 280px;
  margin: ${(props) => props.theme.layout.spacing(0, 0.3, 1)};
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid #eee;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 20%);
  &:hover {
    box-shadow: 1px 1px 8px rgb(0 0 0 / 50%);
  }
`;

const Img = styled.div`
  width: 100%;
  flex: 1;
  background: url(${(props) => props.url}) no-repeat center;
  background-size: contain;
`;

const ImgTitle = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1.4, 1)};
`;

const Page: NextPageWithLayout = () => {
  const [type, setType] = useState<GrapgicDesignType>(
    GRAPHY_DESIGN_TYPE.poster
  );
  const images = data
    .filter((item) => item.category === type)
    .map((item) => ({
      url: item.images?.[0] || item.fullsrc,
      title: item.title,
      index: item.index,
    }));

  const items = Object.keys(GRAPHY_DESIGN_TYPE).map((item) => ({
    text: item,
    key: item,
  }));

  const filter = (e, data) => {
    e.preventDefault();
    setType(data.key);
  };

  return (
    <Container>
      <Left>
        <Menu items={items} ItemCallback={filter} activeKey={type} />
      </Left>
      <Right>
        <Title>休閒時的平面設計作品</Title>
        <Grid>
          {images.map((item, idx) => {
            return (
              <Item key={idx} href={`/portfolio/${item.index}`}>
                <ImgTitle>{item?.title || ''}</ImgTitle>
                <Img url={item.url} />
              </Item>
            );
          })}
        </Grid>
      </Right>
    </Container>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Hope Shelter - Amateur Grapgic Design</title>
        <meta name="description" content="Amateur grapgic design works" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
