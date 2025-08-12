import { redirect } from 'next/navigation';
import React from 'react';

import { RoutesEnum } from '@/shared/constants';
import { StarsIcon } from '@/shared/icons';
import { MDXRemote } from '@/shared/lib/mdx';
import { formatDate } from '@/shared/lib/text';
import { Flex, Text } from '@/shared/ui';

import type { Grades } from '@/features/@apps/daily-facts';
import { GRADES, Tabs, getDailyFactByIndex, getIndexFromDay } from '@/features/@apps/daily-facts';

import Popcorn from '@public/images/minecraft/Popcorn.webp';

import type { Metadata } from 'next';
import type { FC } from 'react';

interface DailyFactsFrontendPageProps {
  params?: Promise<{ grade: Grades }>
}

const DailyFactsFrontendPage: FC<DailyFactsFrontendPageProps> = async ({ params }) => {
  const grade = (await params)?.grade as Grades;

  if (!GRADES.includes(grade)) {
    redirect(`${RoutesEnum.APP_DAILY_FACTS_FRONTEND}/junior`);
  }

  const index = await getIndexFromDay(grade);
  const { content } = await getDailyFactByIndex(index, grade);
  const nowDay = formatDate(new Date(), { showYear: false });

  return (
    <Flex className="my-auto pb-28 pt-40" gap="gap-2" vertical={true}>
      <Flex align="items-center" gap="gap-2" justify="justify-center">
        <StarsIcon className="text-primary-400 dark:text-primary-600" />
        <Text
          className="dark:text-primary-600"
          color="text-primary-400"
          font="tiny5"
          size="text-2.5xl"
          weight="font-extrabold"
        >
          {`Факт дня — на ${nowDay}`}
        </Text>
      </Flex>
      <Tabs selected={grade}>
        <MDXRemote source={content} />
      </Tabs>
    </Flex>
  );
};

export const generateStaticParams = async () => (
  GRADES.map((grade) => ({
    grade,
  }))
);

export const metadata: Metadata = {
  description: 'Ежедневные короткие и полезные факты о Frontend-разработке — JavaScript, React, HTML, CSS, а также лучшие практики, советы и лайфхаки для разработчиков любого уровня.',
  icons: {
    icon: Popcorn.src,
  },
  title: 'Daily Facts :: Ежедневные факты про Frontend',
};

export default DailyFactsFrontendPage;
