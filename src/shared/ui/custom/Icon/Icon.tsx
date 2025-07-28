import React from 'react';

import type { ReactNode } from 'react';

export interface IIcon {
  children?: ReactNode
  className?: string
  fill?: string
  fixedSize?: boolean
  height?: string | number
  strokeWidth?: number
  viewBox?: string
  width?: string | number
  xmlns?: string
}

export const Icon = ({
  children,
  className,
  fill = 'none',
  fixedSize,
  height,
  viewBox,
  width,
  xmlns = 'http://www.w3.org/2000/svg',
}: IIcon) => (
  <svg
    className={className}
    fill={fill}
    height={height}
    style={fixedSize ? { minHeight: height, minWidth: width } : undefined}
    viewBox={viewBox ?? `0 0 ${width} ${height}`}
    width={width}
    xmlns={xmlns}
  >
    {children}
  </svg>
);
