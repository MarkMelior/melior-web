'use client';

import { cn } from '@/shared/lib/common';
import { useMouse } from '@/shared/lib/react';

import styles from './glowingLine.module.scss';

import type { CSSProperties, FC } from 'react';

interface GlowingBoxProps {
  className?: string
}

/**
 * @deprecated
 */
export const GlowingLine: FC<GlowingBoxProps> = ({ className }) => {
  const [mousePosition, ref] = useMouse();

  const style = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
    '--spotlight-line-size': '300px',
  } as CSSProperties;

  return (
    <div
      className={cn(styles.wrapper, 'absolute w-full h-[1px]', className)}
      ref={ref}
      style={style}
    />
  );
};
