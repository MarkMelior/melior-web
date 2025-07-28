import { MdArrowOutward } from 'react-icons/md';

import { cn } from '@/shared/lib/common';

import styles from './arrowOutward.module.scss';

import type { FC } from 'react';

interface ArrowOutwardProps {
  className?: string
}

export const ArrowOutward: FC<ArrowOutwardProps> = ({ className }) => (
  <MdArrowOutward className={cn(styles.arrow, className)} />

);
