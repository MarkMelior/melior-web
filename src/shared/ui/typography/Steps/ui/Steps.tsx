import { cn } from '@/shared/lib/common';
import { Text } from '@/shared/ui/custom';

import type { FC } from 'react';

interface StepsProps {
  className?: string
  steps: string[]
}

export const Steps: FC<StepsProps> = ({ className, steps }) => (
  <ol
    className={cn('relative mb-10 mt-5 space-y-2', className)}
    style={{ counterReset: 'step 0' }}
  >
    {steps.map((step, index) => (
      <li
        className={cn(
          'relative pl-10 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:rounded-md  before:ring-default-100/5 before:bg-default-200 before:text-default-800 before:shadow-none before:highlight-white/5',
          {
            'pb-6 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-default-500/50': !(index === steps.length - 1),
          },
        )}
        key={`${step}-${index}`}
        style={{ counterIncrement: 'step 1' }}
      >
        <Text className="relative -top-px" color="text-default-500" size="text-sm-md">
          {step}
        </Text>
      </li>
    ))}
  </ol>
);
