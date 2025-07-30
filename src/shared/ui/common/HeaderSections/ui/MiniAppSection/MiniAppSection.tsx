import { cn } from '@heroui/react';
import Link from 'next/link';
import { HiLink } from 'react-icons/hi';
import { MdArrowOutward } from 'react-icons/md';

import { AppRouteEnum } from '@/shared/constants';
import { formatDate } from '@/shared/lib/text';
import { Flex, Text } from '@/shared/ui/custom';

import EventDiamond from '@public/images/minecraft/EventDiamond.webp';
import Popcorn from '@public/images/minecraft/Popcorn.webp';

import styles from './miniAppSection.module.scss';

import type { FC } from 'react';

interface MiniAppSectionProps {
  isVisible: boolean
}

const miniApps = [
  {
    createdAt: '2025-08-01T00:00:00+03:00',
    description: 'Каждый день — новый факт. На любой вкус и цвет',
    href: AppRouteEnum.APP_DAILY_FACTS,
    icon: (
      <img
        alt="Popcorn"
        className={cn('text-danger', styles.icon)}
        src={Popcorn.src}
      />
    ),
    title: 'Ежедневные факты',
  },
  {
    description: 'Я даже и не понял. Довольно очено даже как-то...',
    disabled: true,
    href: 'В разработке',
    icon: (
      <img
        alt="Minecraft event diamond"
        className={cn('text-blue-500', styles.icon)}
        src={EventDiamond.src}
      />
    ),
    title: 'Продуктивность',
  },
];

export const MiniAppSection: FC<MiniAppSectionProps> = ({ isVisible }) => (
  <div
    className={styles.wrapper}
    id="resources"
    style={{ display: isVisible ? 'grid' : 'none' }}
  >
    {miniApps.map(({ createdAt, description, disabled, href, icon, title }) => (
      <Link
        className={cn(styles.card, { [styles.disabled]: disabled })}
        href={href}
        key={title}
        target="_blank"
      >
        <MdArrowOutward className={styles.outward} size={18} />
        <Flex gap="gap-3" vertical={true}>
          {icon}
          <Flex gap="gap-1" vertical={true}>
            <Text size="text-sm" weight="font-semibold">{title}</Text>
            <Text color="text-default-600" size="text-xs-sm">{description}</Text>
          </Flex>
        </Flex>
        <Flex
          align="items-center"
          className="mt-auto"
          gap="gap-2"
          justify="justify-between"
        >
          <Text className="mt-auto flex w-max items-center gap-1 rounded-full border border-default-400 bg-default-300/50 px-2 py-0.5" font="code" size="text-xs">
            <HiLink />
            {href}
          </Text>
          <Text color="text-default-500" size="text-xs">{formatDate(createdAt)}</Text>
        </Flex>
        <Text
          className={cn('mt-1.5', styles.open)}
          color="text-primary-600"
          font="code"
          size="text-sm"
          weight="font-extralight"
        >
          Открыть приложение
          {' ->'}
        </Text>
      </Link>
    ))}
  </div>
);
