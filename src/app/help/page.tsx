import { NotFound as NotFoundContent } from '@/widgets/NotFound';

import { APP_NAME } from '@/shared/constants';

import type { Metadata } from 'next';

export default function Help() {
  return (
    <NotFoundContent
      description="Ждите, скоро я сделаю эту страницу"
      emoji="😎"
      title="Страница в разработке"
    />
  );
}

export const metadata: Metadata = {
  description:
    `Раздел сайта ${APP_NAME} находится в разработке. Совсем скоро здесь появятся новые статьи, практические гайды и свежие решения для разработчиков. Заглядывайте позже, чтобы узнать о последних технологиях и лучших практиках фронтенда.`,
  title: `В разработке :: ${APP_NAME}`,
};
