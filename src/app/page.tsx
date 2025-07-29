import dynamic from 'next/dynamic';
import Image from 'next/image';
import path from 'path';

import { CategoryCard } from '@/widgets/(articles)/CategoryCard';

import { StarsIcon } from '@/shared/icons';
import { Emoji } from '@/shared/lib/emoji';
import { MDXRemote, getMdx } from '@/shared/lib/mdx';
import {
  Flex,
  RandomSticker,
  Steps,
  Text,
  Underline,
  YoutubeVideo,
  getYoutubeInfo,
  parseYoutubeDescriptionKeyPoints,
} from '@/shared/ui';

import { ArticlesCategoryEnum, getArticleListByCategory } from '@/entities/articles';

import { MainLayout } from '@core/layouts/main';
import BannerImage from '@public/images/misc/banner.webp';

import { ArrowOneIcon } from './(page)/icon/arrow-one';
import { ArrowTwoIcon } from './(page)/icon/arrow-two';
import { LinesIcon } from './(page)/icon/lines';
import { UnderlineIcon } from './(page)/icon/underline';
import { MyArticlesButton } from './(page)/ui/MyArticlesButton';

import type { MDXComponents } from 'mdx/types';

const YOUTUBE_ID = process.env.NEXT_PUBLIC_YOUTUBE_ID;

export default async function Home() {
  const dir = path.join(process.cwd(), 'src', 'app', 'index.mdx');
  const { content } = await getMdx(dir);
  const { articles } = await getArticleListByCategory(ArticlesCategoryEnum.FRONTEND);

  const { description, publishedAt, title, viewCount } = await getYoutubeInfo(YOUTUBE_ID);
  const keyPoints = parseYoutubeDescriptionKeyPoints(description);

  const components: MDXComponents = {
    Images: dynamic(() => import('./(page)/ui/Images').then((mod) => mod.Images)),
    StackButtons: dynamic(() => import('@/shared/ui').then((mod) => mod.StackButtons)),
  };

  return (
    <MainLayout>
      <div className="pointer-events-none relative z-20 mb-4 mt-[158px] select-none">
        <Image
          alt="Banner"
          className="min-h-40 min-w-full object-cover lg:min-h-0"
          fetchPriority="high"
          height={636}
          priority={true}
          src={BannerImage}
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
            <Text className="text-[2.5rem] leading-[3rem] sm:text-4xl" font="tiny5">
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
        {YOUTUBE_ID ? (
          <Flex
            align="items-center"
            className="mt-16 flex-col-reverse sm:flex-row sm:gap-6"
          >
            <YoutubeVideo
              className="max-w-sm"
              publishedAt={publishedAt}
              title={title}
              videoId={YOUTUBE_ID}
              viewCount={viewCount}
            />
            <ArrowOneIcon className="mb-12 hidden text-primary-400 dark:text-primary-600 md-lg:block" />

            <Flex>
              <Flex gap="gap-2" vertical={true}>
                {/* TITLE */}
                <Flex align="items-center" gap="gap-2">
                  <StarsIcon className="text-primary-400 dark:text-primary-600" />
                  <Flex className="relative pr-[22px]" gap="gap-2">
                    <Text size="text-2xl" weight="font-medium">
                      Посмотри
                    </Text>
                    <Text
                      className="dark:text-primary-600"
                      color="text-primary-400"
                      size="text-2xl"
                      weight="font-bold"
                    >
                      видео
                    </Text>
                    <UnderlineIcon className="absolute -bottom-2 right-3 text-primary-400 dark:text-primary-600" />
                    <LinesIcon className="absolute -top-1.5 right-0 text-primary-400 dark:text-primary-600" />
                  </Flex>
                </Flex>
                {/* STEPS */}
                <Steps className="ml-1" steps={keyPoints} />
              </Flex>
              <ArrowTwoIcon className="-ml-6 mt-4 block text-primary-400 dark:text-primary-600 sm:hidden" />
            </Flex>

          </Flex>
        ) : null}
        <Flex className="mt-16" gap="gap-8" vertical={true}>
          <MyArticlesButton />
          <CategoryCard articles={articles.slice(0, 4)} openInsideModal={true} />
        </Flex>
        <MDXRemote components={components} source={content} />
      </div>
      {/* TODO: Может вынести в Layout? Проблема в то, что в Layout нет searchParams */}
      {/* {search?.category && search?.name ? (
        <ArticleModal link={`${AppRouteEnum.ARTICLES}/${search.category}/${search.name}`}>
          <ArticlePage params={Promise.resolve({ category: search.category, name: search.name })} />
        </ArticleModal>
      ) : null} */}
    </MainLayout>
  );
}
