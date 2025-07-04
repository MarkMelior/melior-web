import { Logo } from '@/shared/icons';
import { cn } from '@/shared/lib/common';

import styles from './pageLoader.module.scss';

import type { FC } from 'react';

interface PageLoaderProps {
  className?: string
  fullScreen?: boolean
}

export const PageLoader: FC<PageLoaderProps> = async ({
  className,
  fullScreen,
}) => (
  <section
    className={cn(
      styles.wrapper,
      {
        [styles.fullScreen]: fullScreen,
      },
      className,
    )}
  >
    <div className="scale-[1.75]">
      <div className={styles.loader}>
        <span className={styles.spinner} />
        <Logo />
      </div>
      <p>Загрузка...</p>
    </div>
  </section>
);
