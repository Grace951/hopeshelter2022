import type { FC } from 'react';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { preLoadImg } from '../tools';

const Img = styled.img<{ $fillBg: boolean }>`
  transition: opacity 0.1s linear;
  background-color: ${({ $fillBg }) => ($fillBg ? 'white' : 'transparent')};
  border-radius: ${({ $fillBg }) => ($fillBg ? '3px' : '0')};
  padding: ${({ $fillBg }) => ($fillBg ? '2px' : '0')};
`;

interface Props {
  src: string;
  className?: string;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  fillBg?: boolean;
}

const LoadImg: FC<Props> = ({ fillBg, src, ...props }) => {
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (!src) {
      return;
    }

    preLoadImg(src).then(() => {
      setOpacity(1);
    });
  }, [src]);

  return <Img {...props} $fillBg={fillBg} src={src} style={{ opacity }} />;
};

export default LoadImg;
