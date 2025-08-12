import type { RoutesEnum } from '@/shared/constants';
import { Text } from '@/shared/ui';

import { HeaderAlert } from '../HeaderAlert/HeaderAlert';
import { HeaderButtons } from '../HeaderButtons/HeaderButtons';
import { HeaderLinks } from '../HeaderLinks/HeaderLinks';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

import styles from './header.module.scss';

import type { FC } from 'react';

/**
 * 1) Статьи
 * - Лучшие практики разработки
 *
 * 2) Обо мне
 * - Какие технологии использую
 * - Пройденные курсы
 * - Мой пк
 * - Ссылки (на главном всплытии виджет)
 * - Мои работы
 *
 * 3) Премиум пользователи (сделать посты для людей из бусти)
 *
 * 4) Мини приложения
 * - Заметки
 * - Казино
 * - Нейросети
 *
 * 5) UI core
 *
 * 6) Все ссылки
 */

const getAlertMessage = () => {
  const alertMessage = process.env.NEXT_PUBLIC_ALERT_MESSAGE ?? '';
  const parts = alertMessage.split('$version');

  return parts.flatMap((part, idx) =>
    idx === 0
      ? [part]
      : [
        <Text className="mr-1 decoration-transparent" color="text-secondary" key={idx}>
          {`[v${process.env.NEXT_PUBLIC_APP_VERSION}]`}
        </Text>,
        part,
      ],
  );
};

interface HeaderProps {
  canCloseTopAlert?: boolean
  logoHref?: RoutesEnum
  logoSrc?: string
  logoTooltip?: string
  name?: string
}

export const Header: FC<HeaderProps> = ({ canCloseTopAlert, logoHref, logoSrc, logoTooltip, name }) => (
  <header className={styles.header}>
    <HeaderLogo href={logoHref} src={logoSrc} tooltip={logoTooltip} />
    <HeaderAlert
      canCloseTopAlert={canCloseTopAlert}
      color="secondary"
      title={getAlertMessage()}
    >
      <HeaderLinks canCloseTopAlert={canCloseTopAlert} color="secondary" />
    </HeaderAlert>
    <HeaderButtons name={name} />
    <HeaderMenu />
  </header>
);
