import { useEffect } from 'react';

/**
 * Хук для сокрытия/показа компонентов странички, когда модалка с score открыта. Что-бы было как по макету.
 */
export const useModalStyles = (isModalOpen: boolean) => {
  useEffect(() => {
    const eco = document.getElementById('eco');
    const header = document.getElementById('header-puffins');

    if (eco && header) {
      eco.style.opacity = isModalOpen ? '0' : '1';
      header.style.zIndex = isModalOpen ? '200' : '20';
    }
  }, [isModalOpen]);
};
