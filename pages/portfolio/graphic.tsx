import type { ReactElement, MouseEvent } from 'react';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../components/layout';
import MenuComp from '../../components/menu';
import SelectComp from '../../components/select';
import PageTitle from '../../components/pageTitle';
import { breakpoint } from '../../themes/index';
import data from '../../data/graphicDesign.json';
import { GrapgicDesignType, MenuItem } from '../../typings';
import { GRAPHY_DESIGN_TYPE } from '../../constants';
import type { NextPageWithLayout } from '../_app';

const Menu = styled(MenuComp)`
  display: block;
  @media all and (max-width: ${breakpoint.mobile}px) {
    display: none;
  }
`;

const Select = styled(SelectComp)`
  display: none;
  @media all and (max-width: ${breakpoint.mobile}px) {
    display: block;
  }
`;

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.layout.spacing(0.5, 2, 1.5, 2)};
  display: flex;
  @media all and (max-width: ${breakpoint.tablet}px) {
    padding: ${({ theme }) => theme.layout.spacing(0.5, 1, 1.5, 1)};
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    max-width: 320px;
    display: block;
  }
`;

const Left = styled.div`
  width: 200px;
  padding: ${({ theme }) => theme.layout.spacing(1)};
  color: #000;
  @media all and (max-width: ${breakpoint.tablet}px) {
    width: 140px;
  }
`;

const Right = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1)};
  flex: 1;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Item = styled(Link)`
  width: 240px;
  height: 380px;
  margin: ${({ theme }) => theme.layout.spacing(0, 0.4, 1)};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid #eee;
  border-radius: 2px;
  box-shadow: 1px 1px 5px rgb(0 0 0 / 20%);
  &:hover {
    box-shadow: 1px 1px 8px rgb(0 0 0 / 50%);
  }
`;

const Img = styled.div<{ url: string }>`
  width: 100%;
  flex: 1;
  background: url(${({ url }) => url}) no-repeat center;
  background-size: contain;
`;

const ImgTitle = styled.div`
  font-size: ${({ theme }) => theme.font.size.base};
  padding: ${({ theme }) => theme.layout.spacing(1.4, 1)};
  border-bottom: 1px solid #eee;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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

  const items: MenuItem[] = Object.keys(GRAPHY_DESIGN_TYPE).map((item) => ({
    text: item,
    key: item,
  }));

  const filter = (e: MouseEvent, data: MenuItem) => {
    e.preventDefault();
    setType(data.key);
  };

  return (
    <>
      <PageTitle>休閒時的平面設計作品</PageTitle>
      <Box>
        <Left>
          <Select items={items} callback={filter} activeKey={type} />
          <Menu items={items} ItemCallback={filter} activeKey={type} />
        </Left>
        <Right>
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
      </Box>
    </>
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
