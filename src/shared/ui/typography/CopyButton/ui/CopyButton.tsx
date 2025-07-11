'use client';

import { LuCheck, LuCopy } from 'react-icons/lu';

import { useCopy } from '@/shared/lib/text';
import { Button, Tooltip } from '@/shared/ui/client';

import type { FC } from 'react';

interface CopyButtonProps {
  copiedText?: string
  text: string
}

export const CopyButton: FC<CopyButtonProps> = ({ copiedText = 'Код скопирован', text }) => {
  const { copy, isCopied } = useCopy();

  return (
    <Tooltip content="Скопировать код" placement="top">
      <Button
        className="text-default-400 hover:text-default-200"
        data-copied={isCopied}
        isDisabled={isCopied}
        isIconOnly={true}
        onPress={() => copy(text, { content: copiedText })}
        radius="sm"
        size="sm"
        variant="light"
      >
        <LuCheck
          className="fade-in absolute scale-50 text-success-400 opacity-0 transition-all group-hover:text-success-600 group-data-[copied=true]:scale-100 group-data-[copied=true]:opacity-100"
          size={18}
        />
        <LuCopy
          className="fade-out absolute scale-100 text-default-400 opacity-100 transition-all group-hover:text-default-600 group-data-[copied=true]:scale-50 group-data-[copied=true]:opacity-0"
          size={18}
        />
      </Button>
    </Tooltip>
  );
};
