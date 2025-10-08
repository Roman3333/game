import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Контент модалки.
   */
  children: ReactNode;
  /**
   * Флаг открытия модалки.
   */
  isModalOpen: boolean;
  /**
   * Колбек на закрытие модалки.
   */
  handlelCloseModal?: () => void;
  /**
   * Текст title.
   */
  title?: string;
  /**
   * Размер title модалки, по умолчанию xl.
   */
  sizeTitle?: 'l' | 'xl';
  /**
   * Тип рызмытия заднего фона модалки, по умолчанию default.
   */
  overlayVariant?: 'default' | 'light';
  /**
   * Кастомный класс для wrapper modal.
   */
  wrapperClassname?: string;
  /**
   * Кастомный класс для title.
   */
  className?: string;
  /**
   * Флаг для затемнения bg, по умолчанию true, не затемняем bg только в модалке во время авторизации.
   */
  isHideBg?: boolean;
}
