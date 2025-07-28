import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const ArrowOneIcon = ({
  className,
  fill = 'currentColor',
  height = 158,
  width = 83,
}: IIcon) => (
  <Icon
    className={className}
    fixedSize={true}
    height={height}
    viewBox="0 0 83 158"
    width={width}
  >
    <path
      d="M82.5 1.5V1.5C64.5507 1.5 50 16.0507 50 34L50 109C50 131.368 31.8675 149.5 9.5 149.5V149.5"
      stroke={fill}
      strokeDasharray="6 6"
      strokeWidth="3"
    />
    <path d="M7.5 143L2 150L7.5 156.5" stroke={fill} strokeWidth="3" />
  </Icon>
);
