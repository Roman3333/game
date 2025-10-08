import { ChangeEvent } from 'react';

type Input = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'checked' | 'disabled' | 'className'
>;

export interface ICheckboxProps extends Input {
  /**
   * Состояние checkbox.
   */
  checked: boolean;
  /**
   * Колбек на изменение.
   */
  onCheckedChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Кастомный класс для checkbox.
   */
  className?: string;
  /**
   * Флаг дизейбла для checkbox.
   */
  disabled?: boolean;
  /**
   * Размер чекбокса, по умолчанию s(20x20).
   */
  variant?: 's' | 'm';
}
