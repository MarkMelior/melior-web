/**
 * Парсинг ключевых моментов из описания YouTube под заголовком "📍 Ключевые моменты"
 * @param {string} description - полный текст описания видео
 * @returns {string[]} - массив строк с ключевыми моментами
 */
export const parseYoutubeDescriptionKeyPoints = (description: string): string[] => {
  // Ищем секцию от заголовка "📍 Ключевые моменты" до следующего пустого заголовка или конца текста
  const sectionMatch = description.match(/📍\s*Ключевые моменты([\s\S]*?)(?:\n#|$)/);

  if (!sectionMatch) {
    return [];
  }

  const sectionText = sectionMatch[1];
  // Разбиваем на строки
  const lines = sectionText.split(/\r?\n/);

  // Извлекаем текст ключевых моментов и фильтруем только строки
  const points = lines
    .map((line) => {
      const m = line.match(/^\s*\d+\.?\s*-?\s*(.+)$/);

      return m ? m[1].trim() : null;
    })
    .filter((point): point is string => point !== null);

  return points;
};
