import Image from 'next/image';
import Link from 'next/link';

import { APP_NAME, AppRouteEnum } from '@/shared/constants';
import { Tooltip } from '@/shared/ui/client';

import IceCube from '@public/images/interface/ice-cube.png';

import styles from './headerLogo.module.scss';

export const HeaderLogo = () => (
  <div className={styles.wrapper}>
    <Tooltip content="<- Кубик льда" placement="right">
      <Link className={styles.logo} href={AppRouteEnum.MAIN} title={APP_NAME}>
        <Image
          alt={APP_NAME}
          fetchPriority="high"
          height={512}
          priority={true}
          src={IceCube}
          title={APP_NAME}
          width={512}
        />
      </Link>
    </Tooltip>
  </div>
);
