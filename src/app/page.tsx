import dynamic from 'next/dynamic';
import path from 'path';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';
import { Header } from '@/widgets/(articles)/Header';

import { AppRouteEnum, PublicImages } from '@/shared/constants';
import { LongArrowRightIcon } from '@/shared/icons';
import { Emoji } from '@/shared/lib/emoji';
import { MDXRemote, getMdx } from '@/shared/lib/mdx';
import { Flex, Text } from '@/shared/ui';

import { ArticleModal, ArticlesCategoryEnum, getArticleListByCategory } from '@/entities/articles';

import { MainLayout } from '@/core/layouts/main';

import ArticlePage from './articles/[category]/[name]/page';

import type { MDXComponents } from 'mdx/types';

export default async function Home({ searchParams }: { searchParams: Promise<{ category: string, name: string }> }) {
  const dir = path.join(process.cwd(), 'src', 'app', 'index.mdx');
  const { content } = await getMdx(dir);

  const params = await searchParams;

  const components: MDXComponents = {
    StackButtons: dynamic(() =>
      import('@/shared/ui').then((mod) => mod.StackButtons),
    ),
  };

  const { articles } = await getArticleListByCategory(ArticlesCategoryEnum.FRONTEND);

  return (
    <MainLayout>
      <div className="pointer-events-none relative mb-4 mt-[158px] select-none">
        <img
          alt="Banner"
          className="min-h-32 min-w-full object-cover xl:h-full"
          src={PublicImages.misc.Banner}
        />
      </div>
      <div className="mx-auto max-w-4xl">
        <Flex
          className="relative md:flex-row"
          gap="gap-8"
          justify="justify-between"
          vertical={true}
        >
          <Header
            className="mb-0 mt-5"
            classNames={{ description: 'text-[1.075rem] font-light' }}
            description={(
              <Text className="leading-8">
                Я Frontend-разработчик из Сбер&nbsp;
                <Emoji emoji="❇️" />
                . Здесь я делюсь своим опытом из разных сфер и вдохновляю людей на новые идеи
              </Text>
            )}
            isCenter="md"
            title={(
              <Flex align="items-center" gap="gap-2">
                <Emoji emoji="👋" />
                Привет, меня зовут Марк (:
              </Flex>
            )}
          />
          <img
            alt="3д модель сердца"
            className="pointer-events-none mx-16 -mt-16 max-w-56 select-none"
            src={PublicImages.misc.Heart}
          />
        </Flex>
        <Flex className="mt-16" gap="gap-8" vertical={true}>
          <Text
            className="flex items-center gap-2"
            color="text-default-400"
            size="text-3xl"
            weight="font-extralight"
          >
            Мои статьи
            <LongArrowRightIcon className="-mb-1" />
          </Text>
          <CategoryCard articles={articles.slice(0, 4)} />
        </Flex>
        <MDXRemote components={components} source={content} />
      </div>

      {params?.category && params?.name ? (
        <ArticleModal link={`${AppRouteEnum.ARTICLES}/${params.category}/${params.name}`}>
          <ArticlePage params={Promise.resolve({ category: params.category, name: params.name })} />
        </ArticleModal>
      ) : null}
    </MainLayout>
  );
}
