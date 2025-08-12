/**
 * Возвращает оставшееся время до следующего факта
 */
export const getTimeUntilNextFact = () => {
  const now = new Date();
  const nextFactTime = new Date();

  nextFactTime.setHours(24, 0, 0, 0);

  const diffMs = nextFactTime.getTime() - now.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  if (hours > 0) {
    return `${hours} ч ${minutes} мин`;
  }

  return `${minutes} мин`;
};
