import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import { breakpoint, BreakpointKey } from '../themes/index';
import { preLoadImg } from '../tools';

let prevImgRatios = [];
const getImgRatios = (urls: string[]) => {
  const promises = urls.map((url) => {
    return preLoadImg(url);
  });
  return Promise.all(promises).then((imgs: HTMLImageElement[]) =>
    imgs.map((img: HTMLImageElement) => img.height / img.width)
  );
};
const Waterfall = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 1em;
  grid-auto-flow: row dense;
  grid-auto-rows: 0.04fr;

  @media all and (max-width: ${breakpoint.desktop}px) {
    grid-auto-rows: 0.04fr;
    grid-template-columns: repeat(4, 1fr);
  }

  @media all and (max-width: ${breakpoint.laptop}px) {
    grid-auto-rows: 0.04fr;
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: ${breakpoint.tablet}px) {
    grid-auto-rows: 0.046fr;
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: ${breakpoint.mobile}px) {
    grid-auto-rows: 0.02fr;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.layout.spacing(0.5, 2, 1.5, 2)};

  @media all and (max-width: ${breakpoint.desktop}px) {
    max-width: ${breakpoint.laptop}px;
  }
  @media all and (max-width: ${breakpoint.laptop}px) {
    max-width: ${breakpoint.tablet}px;
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    max-width: ${breakpoint.mobile}px;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    max-width: 320px;
  }
`;

const WaterfallItem = styled(Link)<{ imgratio: number }>`
  width: 100%;
  grid-row: auto / span ${({ imgratio }) => Math.round(imgratio * 26) + 14};

  @media all and (max-width: ${breakpoint.desktop}px) {
    grid-row: auto / span ${({ imgratio }) => Math.round(imgratio * 27) + 12};
  }
  @media all and (max-width: ${breakpoint.laptop}px) {
    grid-row: auto / span ${({ imgratio }) => Math.round(imgratio * 25) + 12};
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    grid-row: auto / span ${({ imgratio }) => Math.round(imgratio * 22) + 16};
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    grid-row: auto / span ${({ imgratio }) => Math.round(imgratio * 28) + 14};
  }

  color: #ddd;
  box-shadow: 1px 1px 8px rgb(0 0 0 / 20%);
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 3px 3px 15px rgb(0 0 0 / 80%);
  }
  img {
    border-bottom: 1px solid #d1d1d1;
  }
`;

const Info = styled.div`
  padding: ${({ theme }) => theme.layout.spacing(1.4)};
  color: #434343;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  height: 20px;
  color: #000000;
  font-size: ${({ theme }) => theme.font.size.base};
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Text = styled.div`
  flex: 1;
  color: #434343;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const Grid = (props) => {
  const { data, InfoComp } = props;
  const [imgRatios, setImgRatios] = useState<number[]>(prevImgRatios);
  const [dimesion, setDimesion] = useState<BreakpointKey>('desktop');
  const urls = data.map((item) => item.url);
  const getDimension = () => {
    if (window.innerWidth >= breakpoint.bigDesktop) {
      return 'bigDesktop';
    } else if (window.innerWidth >= breakpoint.desktop) {
      return 'desktop';
    } else if (window.innerWidth >= breakpoint.laptop) {
      return 'laptop';
    } else if (window.innerWidth >= breakpoint.tablet) {
      return 'tablet';
    } else if (window.innerWidth >= breakpoint.mobile) {
      return 'mobile';
    }
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      const currentDimension = getDimension();
      if (currentDimension !== dimesion) {
        setDimesion(currentDimension);
      }
    }, 500);
    debouncedHandleResize();
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [dimesion]);

  useEffect(() => {
    if (prevImgRatios.length === urls.length) {
      return;
    }
    getImgRatios(urls).then((newImgRatios: number[]) => {
      prevImgRatios = [...newImgRatios];
      setImgRatios(prevImgRatios);
    });
  }, [urls]);

  return (
    <Container>
      <Waterfall>
        {data.map((item, i: number) => {
          const imgRatio = imgRatios[i];
          return (
            <WaterfallItem
              key={i}
              imgratio={imgRatio}
              href={`/portfolio/${item.index}`}
              rel="noreferrer"
            >
              {<img width="100%" src={item.url} alt={item.text} />}
              {InfoComp && <InfoComp data={item} />}
              {!InfoComp && (item.title || item.text) && (
                <Info>
                  {item.title && <Title>{item.title}</Title>}
                  {item.text && <Text>{item.text}</Text>}
                </Info>
              )}
            </WaterfallItem>
          );
        })}
      </Waterfall>
    </Container>
  );
};

export default Grid;
