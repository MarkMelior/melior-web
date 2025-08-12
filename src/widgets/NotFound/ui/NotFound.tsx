import Link from 'next/link';
import { BiSolidDoorOpen } from 'react-icons/bi';

import { RoutesEnum } from '@/shared/constants';
import type { EmojiType } from '@/shared/lib/emoji';
import { Emoji } from '@/shared/lib/emoji';
import { Flex, RandomSticker, Text } from '@/shared/ui';
import { Button } from '@/shared/ui/client';

import styles from './notFound.module.scss';

import type { FC, ReactNode } from 'react';

interface NotFoundProps {
  buttonText?: string
  description?: ReactNode
  emoji?: EmojiType
  title?: string
}

export const NotFound: FC<NotFoundProps> = ({
  buttonText = 'Уйти от сюда',
  description = 'Тебе необходимо покинуть эту страницу',
  emoji,
  title = 'Страница не существует',
}) => (
  <div className={styles.wrapper}>
    <Flex align="items-center" gap="gap-10" vertical={true}>
      <RandomSticker />
      <Flex align="items-center" gap="gap-2" vertical={true}>
        <Text font="tiny5" size="text-4xl">
          {title}
        </Text>
        <Text color="text-default-500">
          {description}
&nbsp;
          {emoji ? <Emoji emoji={emoji} /> : null}
        </Text>
      </Flex>
      <Button
        as={Link}
        color="primary"
        href={RoutesEnum.MAIN}
        size="lg"
        startContent={<BiSolidDoorOpen size={20} />}
        variant="shadow"
      >
        {buttonText}
      </Button>
    </Flex>
  </div>
);
