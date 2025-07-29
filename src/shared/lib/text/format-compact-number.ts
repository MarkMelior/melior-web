export function formatCompactNumber(value: number, locale: 'ru' | 'en' = 'ru'): string {
  const formatter = new Intl.NumberFormat(locale, {
    compactDisplay: 'short',
    maximumFractionDigits: 1,
    notation: 'compact',
  });

  return formatter.format(value);
}
