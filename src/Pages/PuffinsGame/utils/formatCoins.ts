/**
 * Форматирует числовое значение с пробелами между тысячами. Пример: пришло 10000, станет 10 000.
 */
export const formatCoins = (value: number | string): string => {
  if (value === null || value === undefined) return '';
  const num = Number(value);
  if (isNaN(num)) return String(value);

  return num.toLocaleString('ru-RU').replace(/,/g, ' ');
};
