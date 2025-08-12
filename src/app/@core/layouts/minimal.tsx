import { Header } from '@/widgets/Header';

import type { RoutesEnum } from '@/shared/constants';
import { cn } from '@/shared/lib/common';
import { Light } from '@/shared/ui';

import type { ReactNode } from 'react';

interface MinimalLayoutProps {
  canCloseTopAlert?: boolean
  children: ReactNode
  className?: string
  logoHref?: RoutesEnum
  logoSrc?: string
  logoTooltip?: string
  name?: string
}

export const MinimalLayout = ({
  canCloseTopAlert,
  children,
  className,
  logoHref,
  logoSrc,
  logoTooltip,
  name,
}: MinimalLayoutProps) => (
  <>
    <Header
      canCloseTopAlert={canCloseTopAlert}
      logoHref={logoHref}
      logoSrc={logoSrc}
      logoTooltip={logoTooltip}
      name={name}
    />
    <Light />
    <div className={cn('px-4 sm:px-6 md:px-8', className)}>
      {children}
    </div>
  </>
);
