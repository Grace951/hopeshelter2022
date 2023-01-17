import type { FC } from 'react';
import { useState, useEffect } from 'react';

import { preLoadImg } from '../tools';
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

  return <img {...props} style={{ opacity }} />;
};

export default LoadImg;
