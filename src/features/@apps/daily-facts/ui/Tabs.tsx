'use client';

import { Tabs as HeroTabs, Tab } from '@heroui/react';
import { useRouter } from 'next/navigation';

import { RoutesEnum } from '@/shared/constants';
import { capitalizeFirstLetter } from '@/shared/lib/text';

import { GRADES } from '../constants';

import type { FC, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode
  selected: string | undefined
}

export const Tabs: FC<TabsProps> = ({ children, selected }) => {
  const router = useRouter();

  return (
    <HeroTabs
      className="mx-auto"
      onSelectionChange={(key) => {
        router.push(`${RoutesEnum.APP_DAILY_FACTS_FRONTEND}/${key}`);
      }}
      placement="bottom"
      selectedKey={selected}
    >
      {GRADES.map((grade) => (
        <Tab key={grade} title={capitalizeFirstLetter(grade)}>
          {children}
        </Tab>
      ))}
    </HeroTabs>
  );
};
