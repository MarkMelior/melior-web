import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const MdxIcon = ({
  className,
  fill = 'currentColor',
  height = 24,
  width = 24,
}: IIcon) => (
  <Icon
    className={className}
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <svg
      fill={fill}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      x="0"
      xmlns="http://www.w3.org/2000/svg"
      y="0"
    >
      <path d="M.79 7.12h22.42c.436 0 .79.355.79.792v8.176a.79.79 0 0 1-.79.79H.79a.79.79 0 0 1-.79-.79V7.912a.79.79 0 0 1 .79-.791V7.12Zm2.507 7.605v-3.122l1.89 1.89L7.12 11.56v3.122h1.055v-5.67l-2.99 2.99L2.24 9.056v5.67h1.055v-.001Zm8.44-1.845l-1.474-1.473l-.746.746l2.747 2.747l2.745-2.747l-.746-.746l-1.473 1.473v-4h-1.054v4Zm10.041.987l-2.175-2.175l2.22-2.22l-.746-.746l-2.22 2.22l-2.22-2.22l-.747.746l2.22 2.22l-2.176 2.177l.746.746l2.177-2.177l2.176 2.175l.745-.746Z" fill={fill} />
    </svg>
  </Icon>
);
