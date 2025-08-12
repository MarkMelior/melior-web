import React from 'react';

import { RoutesEnum } from '@/shared/constants';

import { MinimalLayout } from '@core/layouts/minimal';
import Popcorn from '@public/images/minecraft/Popcorn.webp';

import type { FC, ReactNode } from 'react';

interface DailyFactsLayoutProps {
  children: ReactNode
}

const DailyFactsLayout: FC<DailyFactsLayoutProps> = ({ children }) => (
  <MinimalLayout
    canCloseTopAlert={true}
    className="mx-auto flex min-h-screen max-w-3xl flex-col"
    logoHref={RoutesEnum.APP_DAILY_FACTS}
    logoSrc={Popcorn.src}
    logoTooltip="Попкорн"
    name="Daily Facts"
  >
    {children}
    {/* <Text
      align="text-center"
      className="pb-8 pt-6"
      color="text-default-300"
      size="text-sm"
      weight="font-light"
    >
      {`Осталось ${getTimeUntilNextFact()} до нового факта`}
    </Text> */}
  </MinimalLayout>
);

export const revalidate = 86400; // 24 hours

export default DailyFactsLayout;
