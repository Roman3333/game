/**
 * Закрашиваем линию в зависимости от уовня юзера.
 */
export const getFill = (userLvl: number, cardLevel: number) => {
  const currentLevel = Math.floor(userLvl);
  const progress = userLvl - currentLevel;

  if (cardLevel < currentLevel) {
    return 100;
  }

  if (cardLevel === currentLevel) {
    return progress * 100;
  }

  return 0;
};
