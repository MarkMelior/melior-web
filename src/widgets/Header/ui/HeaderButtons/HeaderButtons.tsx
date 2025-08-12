import { Flex, Text } from '@/shared/ui';

import { Drawer } from './Drawer';

import styles from './headerButtons.module.scss';

import type { FC } from 'react';

interface HeaderButtonsProps {
  name?: string
}

export const HeaderButtons: FC<HeaderButtonsProps> = ({ name }) => (
  <Flex className="pointer-events-auto" gap="gap-4" justify="justify-end">
    <Text className={styles.name} font="rouge">
      {name ?? 'Melior Web'}
    </Text>
    <Drawer />
  </Flex>
);
