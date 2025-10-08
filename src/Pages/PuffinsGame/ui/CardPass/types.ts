export interface CardPassProps {
  id: number;
  level: number;
  xp: number;
  progressFill: number;
  /**
   * Флаг, уменьшенная ли это карточка.
   */
  isSmall?: boolean;
  /**
   * Флаг, особая ли это карточка(золотистый цвет).
   */
  isSpecial: boolean;
  /**
   * Флаг, получена ли награда из карточки.
   */
  isGet: boolean;
  /**
   * Статус карточки.
   */
  status: 'completed' | 'current' | 'locked';
}
