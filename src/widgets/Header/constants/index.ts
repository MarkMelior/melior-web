import type { HeaderSectionType } from '../types';

interface HeaderSection {
  disabled?: boolean
  label: string
  width: number
}

export const headerSections: Record<
  Exclude<HeaderSectionType, null>,
  HeaderSection
> = {
  about: { label: 'Обо мне', width: 704 },
  apps: { label: 'Мини-приложения', width: 670 },
};
