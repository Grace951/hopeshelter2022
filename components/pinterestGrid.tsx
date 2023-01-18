import { useState, useEffect, useMemo } from 'react';
import type { ElementType } from 'react';

import debounce from 'lodash/debounce';
import styled from 'styled-components';

import { breakpoint, BreakpointKey } from '../themes/index';
import { preLoadImg } from '../tools';

// eslint-disable-next-line fp/no-let
let prevImgRatios = [];

const getImgRatios = (imgUrls: string[]) => {
  const promises = imgUrls.map((url) => {
    return preLoadImg(url);
  });
  return Promise.all(promises).then((imgs: HTMLImageElement[]) =>
    imgs.map((img: HTMLImageElement) => img.height / img.width)
  );
};

const Container = styled.div<{
  maxWidths: number[];
  gap: number;
  minWidth: number;
}>`
  max-width: ${({ maxWidths }) => maxWidths[0]}px;
  margin: 0 auto;
  padding: ${({ theme, gap }) =>
    theme.layout.spacing(0.5, gap / 10, 1.5, gap / 10)};

  @media all and (max-width: ${breakpoint.desktop}px) {
    max-width: ${({ maxWidths }) => maxWidths[1]}px;
  }
  @media all and (max-width: ${breakpoint.laptop}px) {
    max-width: ${({ maxWidths }) => maxWidths[2]}px;
  }
  @media all and (max-width: ${breakpoint.tablet}px) {
    max-width: ${({ maxWidths }) => maxWidths[3]}px;
  }
  @media all and (max-width: ${breakpoint.mobile}px) {
    width: ${({ minWidth }) => minWidth}px;
  }
`;

const Waterfall = styled.div<{ itemCounts: number[]; gap: number }>`
  display: grid;
  grid-template-columns: repeat(${({ itemCounts }) => itemCounts[0]}, 1fr);
  grid-gap: ${({ gap }) => gap}px;
  grid-auto-flow: row dense;

  @media all and (max-width: ${breakpoint.desktop}px) {
    grid-template-columns: repeat(${({ itemCounts }) => itemCounts[1]}, 1fr);
  }

  @media all and (max-width: ${breakpoint.laptop}px) {
    grid-template-columns: repeat(${({ itemCounts }) => itemCounts[2]}, 1fr);
  }

  @media all and (max-width: ${breakpoint.tablet}px) {
    grid-template-columns: repeat(${({ itemCounts }) => itemCounts[3]}, 1fr);
  }

  @media all and (max-width: ${breakpoint.mobile}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WaterfallItem = styled.div<{
  heightCount: number;
}>`
  width: 100%;
  grid-row: auto / span ${({ heightCount }) => heightCount};
  box-shadow: 1px 1px 8px rgb(0 0 0 / 20%);
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  &:hover {
    box-shadow: 3px 3px 15px rgb(0 0 0 / 80%);
  }
`;

interface Props<DataType> {
  data: DataType[];
  imgUrls: string[];
  itemWidth: number;
  gap: number;
  infoHeight: number;
  ContentComp: ElementType<{ item: DataType }>;
  ratios?: number[];
}

const Grid = <DataType extends unknown>({
  data,
  imgUrls,
  ContentComp,
  itemWidth,
  gap,
  infoHeight,
  ratios,
}: Props<DataType>) => {
  const minItemWidthOnMobile = Math.min(itemWidth, 320);
  const gridUnit = gap;
  const breakPointWidths = useMemo(
    () => [
      breakpoint.desktop,
      breakpoint.laptop,
      breakpoint.tablet,
      breakpoint.mobile,
    ],
    []
  );
  const itemCountsPerBreakPoint = useMemo(
    () => breakPointWidths.map((item) => Math.floor(item / itemWidth)),
    [breakPointWidths, itemWidth]
  );

  const containerMaxWidths = useMemo(
    () =>
      itemCountsPerBreakPoint.map(
        (item) => itemWidth * item + gridUnit * (item + 1)
      ),
    [itemCountsPerBreakPoint, itemWidth, gridUnit]
  );

  const [imgRatios, setImgRatios] = useState<number[]>(ratios || prevImgRatios);
  const [dimesion, setDimesion] = useState<BreakpointKey>('desktop');
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
    if (!ratios || prevImgRatios.length === imgUrls.length) {
      return;
    }
    getImgRatios(imgUrls).then((newImgRatios: number[]) => {
      prevImgRatios = [...newImgRatios];
      setImgRatios(prevImgRatios);
    });
  }, [ratios, imgUrls]);

  return (
    <Container
      gap={gap}
      maxWidths={containerMaxWidths}
      minWidth={minItemWidthOnMobile + gap * 2}
    >
      <Waterfall itemCounts={itemCountsPerBreakPoint} gap={gap}>
        {data.map((item: DataType, i: number) => {
          const imgRatio = imgRatios[i] || 1.4;
          const heightCount = Math.round(
            (imgRatio * itemWidth + infoHeight) / gridUnit
          );
          return (
            <WaterfallItem key={i} heightCount={heightCount}>
              {ContentComp && <ContentComp item={item} />}
            </WaterfallItem>
          );
        })}
      </Waterfall>
    </Container>
  );
};

export default Grid;
