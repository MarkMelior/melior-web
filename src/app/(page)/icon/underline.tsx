import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const UnderlineIcon = ({
  className,
  fill = 'currentColor',
  height = 11,
  width = 89,
}: IIcon) => (
  <Icon
    className={className}
    height={height}
    viewBox="0 0 89 11"
    width={width}
  >
    <path
      d="M3.03509 8.22815C33.6153 1.22801 72.2428 1.22778 86.7281 4.8658"
      stroke={fill}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="3.7"
    />
  </Icon>
);
