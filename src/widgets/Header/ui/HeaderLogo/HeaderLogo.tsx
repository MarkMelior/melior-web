import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME, RoutesEnum } from '@/shared/constants';
import { Tooltip } from '@/shared/ui/client';

import IceCube from '@public/images/interface/ice-cube.png';

import styles from './headerLogo.module.scss';

import type { FC } from 'react';

interface HeaderLogoProps {
  href?: RoutesEnum
  src?: string
  tooltip?: string
}

export const HeaderLogo: FC<HeaderLogoProps> = ({ href, src, tooltip }) => (
  <div className={styles.wrapper}>
    <Tooltip content={`<- ${tooltip ?? 'Кубик льда'}`} placement="right">
      <Link className={styles.logo} href={href ?? RoutesEnum.MAIN} title={APP_NAME}>
        <Image
          alt={APP_NAME}
          className={styles.image}
          fetchPriority="high"
          height={512}
          priority={true}
          src={src ?? IceCube.src}
          title={APP_NAME}
          width={512}
        />
      </Link>
    </Tooltip>
  </div>
);
