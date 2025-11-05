export interface ModalBuyProps {
  /**
   * id карточки, не знаю нужен он или нет
   */
  currentSquad: number;
  /**
   * Флаг, открыта ли модалка
   */
  isModalOpen: boolean;
  /**
   * Колбэк на закрытие модалки
   */
  setIsModalOpen: (isModalOpen: boolean) => void;
}
