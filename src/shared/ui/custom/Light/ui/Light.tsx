import Image from 'next/image';

import { PublicImages } from '@/shared/constants';
import { cn } from '@/shared/lib/common';

import styles from './light.module.scss';

import type { FC } from 'react';

interface LightProps {
  variant?: 'first' | 'second' | 'two'
}

export const Light: FC<LightProps> = () => (
  <div className="pointer-events-none z-light select-none">
    <div
      className={cn(
        'absolute top-0 inset-x-0 flex justify-center overflow-hidden max-h-screen',
        styles.fadeIn,
      )}
    >
      <div className="flex w-[108rem] flex-none justify-end">
        <picture>
          <source srcSet={PublicImages.interface.Light} type="image/avif" />
          <Image
            alt="light"
            className="w-[71.75rem] max-w-none flex-none dark:hidden"
            decoding="async"
            height={668}
            src={PublicImages.interface.Light}
            width={2296}
          />
        </picture>

        <picture>
          <source srcSet={PublicImages.interface.LightDark} type="image/avif" />
          <Image
            alt="light"
            className="hidden w-[90rem] max-w-none flex-none dark:block"
            decoding="async"
            height={1232}
            src={PublicImages.interface.LightDark}
            width={2880}
          />
        </picture>
      </div>
    </div>
    {/* <BluredLight /> */}
  </div>
);
