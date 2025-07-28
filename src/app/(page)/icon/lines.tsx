import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const LinesIcon = ({
  className,
  fill = 'currentColor',
  height = 20,
  width = 21,
}: IIcon) => (
  <Icon
    className={className}
    height={height}
    viewBox="0 0 21 20"
    width={width}
  >
    <g clipPath="url(#clip0_58_895)">
      <path
        d="M3.79712 9.48642C7.05165 5.90869 11.1384 3.59992 15.9538 2.63867M7.05165 17.1487C9.86163 15.8034 14.3302 14.7624 18.3646 14.7624"
        stroke={fill}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="3.7"
      />
    </g>
    <defs>
      <clipPath id="clip0_58_895">
        <rect
          fill="white"
          height="19.7895"
          transform="translate(0.60527)"
          width="19.7895"
        />
      </clipPath>
    </defs>
  </Icon>
);
