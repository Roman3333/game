import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * Кастомный класс для input.
   */
  className?: string;
  /**
   * Кастомный класс для обёртки input.
   */
  wrapperClassName?: string;
  /**
   * Еще 1 флаг на страничке создания приложения. Добавляет иконки галочка/крестик если поле заполнено/не заполнено корректно. Используется вместе с флагом isCreateApp.
   */
  isValueValid?: boolean;
  /**
   * Сообщение ошибки.
   */
  message?: string;
  /**
   * Заглавие инпута.
   */
  label?: string;
  /**
   * Флаг инпута-поиска, добавляет иконку и логику.
   */
  isSearch?: boolean;
  /**
   * Тип инпута, по умолчанию primary.
   */
  variant?: 'primary' | 'secondary' | 'search';
  /**
   * Размер шрифта, по умолчанию m(20/24).
   */
  fontSize?: 's' | 'm';
  /**
   * Колбек на клик по кнопке.
   */
  onClickBtn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
