'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { type FC, memo, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/shared/lib/common';

import { type EmojiType } from './data';
import { usePerformance } from '../performance';
import { getEmojiData } from './getEmojiData';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface EmojiProps {
  className?: string
  emoji: EmojiType
  size?: number | string
}

const EmojiComponent: FC<EmojiProps> = ({ className, emoji, size = '1.1em' }) => {
  const { inView, ref } = useInView({ rootMargin: '100px', triggerOnce: true });
  const [isLoaded, setIsLoaded] = useState(false);

  const { src, type } = useMemo(() => getEmojiData(emoji), [emoji]);

  if (!src) return emoji;

  return (
    <span
      aria-label={emoji}
      className={cn('inline-flex align-text-bottom relative', className)}
      ref={ref}
      style={{
        fontSize: size,
        height: size,
        minHeight: size,
        minWidth: size,
        width: size,
      }}
    >
      <span
        aria-hidden={true}
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-opacity',
          isLoaded ? 'opacity-0' : 'opacity-100',
        )}
      >
        {emoji}
      </span>
      {inView ? type === 'animation' ? (
        <>
          <Lottie
            animationData={src}
            autoplay={true}
            loop={true}
            onDOMLoaded={() => setIsLoaded(true)}
            style={{ height: '100%', width: '100%' }}
          />
          <span
            aria-hidden={true}
            className="absolute inset-0 select-text text-transparent"
          >
            {emoji}
          </span>
        </>
      ) : (
        <Image
          alt={emoji}
          height={100}
          onLoad={() => setIsLoaded(true)}
          src={src}
          style={{ height: '100%', width: '100%' }}
          width={100}
        />
      ) : null}
    </span>
  );
};

export const Emoji: FC<EmojiProps> = memo((props) => {
  const { isDisabledAnimEmoji } = usePerformance();

  if (isDisabledAnimEmoji) {
    return props.emoji;
  }

  return <EmojiComponent {...props} />;
});

Emoji.displayName = 'Emoji';
