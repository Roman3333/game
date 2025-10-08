/**
 * Возвращает CSS-градиент для прогресс-бара.
 * Закрашивает линию в зависимости от процента (0–100).
 */
export const getProgressGradient = (percent: number) => {
  const value = Math.max(0, Math.min(100, percent));

  return `linear-gradient(
    90deg,
    #F09F1C 0%,
    #F8D84A ${value}%,
    transparent ${value}%,
    transparent 100%
  )`;
};
