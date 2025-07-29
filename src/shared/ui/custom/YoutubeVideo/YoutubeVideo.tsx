import Image from 'next/image';
import Link from 'next/link';

import { YoutubeIcon } from '@/shared/icons';
import { cn } from '@/shared/lib/common';
import { formatCompactNumber, formatDate } from '@/shared/lib/text';

import { ArrowOutward } from '../ArrowOutward';
import { Flex } from '../Layout';
import { Text } from '../Text';

import styles from './youtubeVideo.module.scss';

import type { FC } from 'react';

interface YoutubeVideoProps {
  className?: string
  publishedAt: string
  title: string
  videoId: string
  viewCount?: number
}

export const YoutubeVideo: FC<YoutubeVideoProps> = async ({
  className,
  publishedAt,
  title,
  videoId,
  viewCount,
}) => (
  <Flex className={cn(styles.wrapper, className)} gap="gap-3" vertical={true}>
    <Link
      className={styles.link}
      href={`https://www.youtube.com/watch?v=${videoId}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        alt="YouTube video preview"
        className={styles.thumbnail}
        height={720}
        src={`/images/youtube/${videoId}.webp`}
        width={1280}
      />
      {/* FIXED: Сейчас ютуб не работает в России, поэтому превью не будет отображаться */}
      {/* <img
        alt="YouTube video preview"
        className={styles.thumbnail}
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      /> */}
      <ArrowOutward />
      <YoutubeIcon className={styles.icon} />
    </Link>
    <Flex gap="gap-1" vertical={true}>
      <Text
        className={styles.title}
        color="text-default-600/75"
        size="text-sm"
        title={title}
        weight="font-semibold"
      >
        {title}
      </Text>
      <Flex align="items-center">
        <Text color="text-default-300" size="text-xs-sm">
          {formatDate(publishedAt)}
        </Text>
        {viewCount ? (
          <Text color="text-default-300" size="text-xs-sm">
            {'⠀::⠀просмотров '}
            {formatCompactNumber(viewCount)}
          </Text>
        ) : null}
      </Flex>
    </Flex>
  </Flex>
);
