export interface FormatDateOptions {
  hasTime?: boolean
  showYear?: boolean
}

export const formatDate = (
  date: Date | string | undefined,
  options?: FormatDateOptions,
): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const { hasTime, showYear = true } = options ?? {};

  return (
    (date?.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      ...(hasTime && {
        hour: '2-digit',
        minute: '2-digit',
      }),
      ...(showYear && {
        year: 'numeric',
      }),
    }) ?? '').replace(/[\u00A0 ]?г\.(,?)/, '$1')
  );
};
