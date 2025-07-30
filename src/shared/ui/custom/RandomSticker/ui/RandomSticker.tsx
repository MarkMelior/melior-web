import { type FC } from 'react';

import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import type { TwRounded } from '@/shared/types';

import styles from './randomSticker.module.scss';

interface RandomStickerProps {
  className?: string
  rounded?: TwRounded
  size?: number
}

export const RandomSticker: FC<RandomStickerProps> = ({ className, rounded = 'rounded-md', size = 180 }) => {
  const stickerList = Object.values(PublicImages.sticker);
  const randomIndex = Math.floor(Math.random() * stickerList.length);
  const src = stickerList[randomIndex];

  return src.endsWith('.webm') ? (
    <video
      autoPlay={true}
      className={cn(styles.sticker, rounded, className)}
      height={size}
      loop={true}
      muted={true}
      playsInline={true}
      src={src}
      width={size}
    />
  ) : (
    <img
      alt="Рандомный стикер"
      className={cn(styles.sticker, rounded, className)}
      src={src}
      style={{ height: size, width: size }}
    />
  );
};
