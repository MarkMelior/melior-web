import Link from 'next/link';

import { YoutubeIcon } from '@/shared/icons';
import { cn } from '@/shared/lib/common';
import { formatDate } from '@/shared/lib/text';

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
}

export const YoutubeVideo: FC<YoutubeVideoProps> = async ({
  className,
  publishedAt,
  title,
  videoId,
}) => (
  <Flex className={cn(styles.wrapper, className)} gap="gap-3" vertical={true}>
    <Link
      className={styles.link}
      href={`https://www.youtube.com/watch?v=${videoId}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt="YouTube video preview"
        className={styles.thumbnail}
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      />
      <ArrowOutward />
      <YoutubeIcon className={styles.icon} />
    </Link>
    <Flex gap="gap-1" vertical={true}>
      <Text
        className={styles.title}
        color="text-default-500"
        size="text-sm"
        weight="font-semibold"
      >
        {title}
      </Text>
      <Text color="text-default-300" size="text-xs">
        {formatDate(publishedAt)}
      </Text>
    </Flex>
  </Flex>
);
