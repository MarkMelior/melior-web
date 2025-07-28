import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const ArrowTwoIcon = ({
  className,
  fill = 'currentColor',
  height = 162,
  width = 64,
}: IIcon) => (
  <Icon
    className={className}
    fixedSize={true}
    height={height}
    viewBox="0 0 64 162"
    width={width}
  >
    <path
      d="M55.5 150L55.5 34.5C55.5 16.5507 40.9493 2 23 2V2H0"
      stroke={fill}
      strokeDasharray="6 6"
      strokeWidth="3"
    />
    <path d="M62.5 154L55.5 159.5L49 154" stroke={fill} strokeWidth="3" />
  </Icon>
);
