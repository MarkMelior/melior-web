'use client';

import { Fragment, useState } from 'react';

import { StackData } from '@/shared/constants';
import type { StackProps, StackVariants } from '@/shared/constants';
import { CrossIcon } from '@/shared/icons';
import { cn } from '@/shared/lib/common';
import type { TwRounded } from '@/shared/types';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@/shared/ui/client';

import { Text } from '../Text';

import styles from './stackButtons.module.scss';

interface StackButtonsProps {
  className?: string
  isClickable?: boolean
  isColored?: boolean
  rounded?: TwRounded
  size?: 'xs' | 'sm' | 'md'
  tags?: StackVariants[]
}

export const StackButtons = ({
  className,
  isClickable,
  isColored,
  rounded,
  size = 'sm',
  tags,
}: StackButtonsProps) => {
  const [selectedData, setSelectedData] = useState<StackProps | undefined>(undefined);

  if (!tags) {
    return null;
  }

  return (
    <div className={cn('flex gap-1 flex-wrap', className)}>
      {tags.map((tag) => {
        const stack = StackData[tag];

        return (
          <Button
            className={cn(
              'cursor-default bg-default-500/10 text-default-700',
              {
                'cursor-pointer': isClickable,
                [styles.dot]: isClickable && !!stack?.description,
              },
              rounded,
            )}
            disableRipple={true}
            key={stack?.name}
            onPress={() => !!stack?.description && setSelectedData(stack)}
            size={size}
            startContent={stack?.icon}
            style={{
              backgroundColor: isColored ? stack?.color : undefined,
              color: isColored ? (stack?.isDarkText ? 'black' : 'white') : undefined,
            }}
            variant="flat"
          >
            {stack?.name}
          </Button>
        );
      })}
      {isClickable ? (
        <Modal
          hideCloseButton={true}
          isOpen={!!selectedData}
          onClose={() => setSelectedData(undefined)}
          placement="center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex items-center gap-5">
                  <span
                    className={cn('scale-150', { 'text-default-950': selectedData?.color === 'black' })}
                    style={{ color: selectedData?.color === 'black' ? undefined : selectedData?.color }}
                  >
                    {selectedData?.icon}
                  </span>
                  <Text font="tiny5" size="text-2.5xl">
                    Опыт работы с
                    {' '}
                    {selectedData?.name}
                  </Text>
                </ModalHeader>
                <ModalBody>
                  <Text color="text-default-700">
                    {(selectedData?.description ?? 'Описание отсутствует')
                      .split('\n')
                      .map((line, index) => (
                        <Fragment key={index}>
                          {line}
                          <br />
                        </Fragment>
                      ))}
                  </Text>
                </ModalBody>
                <ModalFooter className="justify-end">
                  <Button
                    color="danger"
                    onPress={onClose}
                    startContent={<CrossIcon height={11} width={11} />}
                    variant="flat"
                  >
                    Закрыть
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : null}
    </div>
  );
};
