import dynamic from 'next/dynamic';
import Image from 'next/image';
import path from 'path';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';

import { AppRouteEnum, PublicImages } from '@/shared/constants';
import { Emoji } from '@/shared/lib/emoji';
import { MDXRemote, getMdx } from '@/shared/lib/mdx';
import { Flex, Text, Underline } from '@/shared/ui';
import { RandomSticker } from '@/shared/ui/client';

import { ArticleModal, ArticlesCategoryEnum, getArticleListByCategory } from '@/entities/articles';

import { MainLayout } from '@/core/layouts/main';

import { MyArticlesButton } from './(page)/MyArticlesButton';
import ArticlePage from './articles/[category]/[name]/page';

import type { MDXComponents } from 'mdx/types';

interface HomeProps {
  searchParams?: Promise<{ category?: string, name?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const dir = path.join(process.cwd(), 'src', 'app', 'index.mdx');
  const { content } = await getMdx(dir);
  const { articles } = await getArticleListByCategory(ArticlesCategoryEnum.FRONTEND);

  const search = await searchParams;

  const components: MDXComponents = {
    StackButtons: dynamic(() =>
      import('@/shared/ui').then((mod) => mod.StackButtons),
    ),
  };

  return (
    <MainLayout>
      <div className="pointer-events-none relative z-20 mb-4 mt-[158px] select-none">
        <Image
          alt="Banner"
          className="min-h-40 min-w-full object-cover lg:min-h-0"
          height={636}
          src={PublicImages.misc.Banner}
          width={3840}
        />
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <Flex
          align="items-center"
          className="relative min-h-[200px] text-center sm:flex-row sm:text-start"
          gap="gap-6"
          justify="justify-between"
          vertical={true}
        >
          <Flex className="max-w-lg" gap="gap-4" vertical={true}>
            <Text font="tiny5" size="text-4xl">
              <Emoji className="mr-2" emoji="👋" />
              Привет, меня&nbsp;
              <Underline>зовут Марк (:</Underline>
            </Text>
            <Text
              className="text-[1.075rem] leading-8"
              color="text-default-500"
              weight="font-light"
            >
              Я Frontend-разработчик из Сбер&nbsp;
              <Emoji emoji="❇️" />
              . Здесь я делюсь своим опытом из разных сфер и вдохновляю людей на новые идеи
            </Text>
          </Flex>
          <RandomSticker className="mr-6" rounded="rounded-lg" size={200} />
        </Flex>
        <Flex className="mt-16" gap="gap-8" vertical={true}>
          <MyArticlesButton />
          <CategoryCard articles={articles.slice(0, 4)} openInsideModal={true} />
        </Flex>
        <MDXRemote components={components} source={content} />
      </div>
      {/* TODO: Может вынести в Layout? Проблема в то, что в Layout нет searchParams */}
      {search?.category && search?.name ? (
        <ArticleModal link={`${AppRouteEnum.ARTICLES}/${search.category}/${search.name}`}>
          <ArticlePage params={Promise.resolve({ category: search.category, name: search.name })} />
        </ArticleModal>
      ) : null}
    </MainLayout>
  );
}
