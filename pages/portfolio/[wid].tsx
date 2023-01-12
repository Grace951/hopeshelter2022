import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Layout from '../../components/layout';
import type { NextPageWithLayout } from '../_app';
import data from '../../data/works.json';

const Container = styled.div`
  display: flex;
  line-height: 1.8;
`;

const Info = styled.div`
  padding: ${(props) => props.theme.layout.spacing(1, 0)};
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: ${(props) => props.theme.layout.spacing(2, 1)};
  font-size: ${(props) => props.theme.font.size.xlarge};
`;

const Desc = styled.div`
  padding: ${(props) => props.theme.layout.spacing(3)};
  margin: ${(props) => props.theme.layout.spacing(0, 0, 1.5)};
  background-color: #efefef;
  font-size: ${(props) => props.theme.font.size.base};
`;

const Back = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  background-color: #efefef;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Relative = styled.div`
  padding: ${(props) => props.theme.layout.spacing(3, 0)};
`;

const RelativeImgs = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RelativeImgStyles = css`
  max-width: 30%;
  margin: ${(props) => props.theme.layout.spacing(0, 0.4, 0, 0)};
  display: block;
  img {
    width: 100%;
    max-height: 100%;
    border: 1px solid #eeee;
  }
`;

const RelativeImg = styled.div`
  ${RelativeImgStyles}
`;

const RelativeLink = styled(Link)`
  ${RelativeImgStyles}
`;

const RelativeTitle = styled.div`
  padding: ${(props) => props.theme.layout.spacing(2, 0.5)};
  font-size: ${(props) => props.theme.font.size.large};
`;

const Picture = styled.div`
  padding: ${(props) => props.theme.layout.spacing(0, 3)};
  flex: 1;
  img {
    width: 100%;
  }
`;

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  const { wid = '0' } = router.query;
  const id = parseInt(wid);
  const details = data[id];
  return (
    <>
      <Head>
        <title>Hope Shelter - {details.title}</title>
        <meta name="description" content={details.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Info>
          <Title>{details.title}</Title>
          <Desc>{details.desc}</Desc>
          <Back onClick={back}>Back</Back>
          {details?.relative?.img?.length > 0 && (
            <Relative>
              <RelativeTitle>相關作品</RelativeTitle>
              <RelativeImgs>
                {details.relative.img.map((img, i: number) => {
                  const relativeDetails = data[img.index];
                  const ImgComp = (
                    <img
                      src={img.src}
                      alt={
                        (relativeDetails?.title || '') +
                        '\n' +
                        (relativeDetails?.desc || '')
                      }
                      title={
                        (relativeDetails?.title || '') +
                        '\n' +
                        (relativeDetails?.desc || '')
                      }
                    />
                  );
                  return (
                    !!img?.src &&
                    (img.index ? (
                      <RelativeLink
                        key={i}
                        href={`/portfolio/${img.index}`}
                        rel="noreferrer"
                      >
                        {ImgComp}
                      </RelativeLink>
                    ) : (
                      <RelativeImg>{ImgComp}</RelativeImg>
                    ))
                  );
                })}
              </RelativeImgs>
            </Relative>
          )}
        </Info>
        <Picture>
          <img src={details.img} alt={details.title + '\n' + details.desc} />
        </Picture>
      </Container>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
