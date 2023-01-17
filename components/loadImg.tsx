import type { FC } from 'react';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { preLoadImg } from '../tools';

const Img = styled.img`
  transition: opacity 0.3s linear;
`;

interface Props {
  src: string;
  className?: string;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
}

const LoadImg: FC<Props> = (props) => {
  const { src } = props;
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (!src) {
      return;
    }

    preLoadImg(src).then(() => {
      setOpacity(1);
    });
  }, [src]);

  return <Img {...props} style={{ opacity }} />;
};

export default LoadImg;
