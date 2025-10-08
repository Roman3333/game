import { useEffect } from 'react';

/**
 * Хук для сокрытия/показа компонентов странички, когда модалка с ящиками открыта. Что-бы было как по макету.
 */
export const useModalStyles = (isModalOpen: boolean) => {
  useEffect(() => {
    const leftEl = document.getElementById('puffins-left');
    const rightEl = document.getElementById('puffins-right');
    const soonEl = document.getElementById('puffins-soon');
    const leaderboardsEl = document.getElementById('puffins-leaderboards');

    if (leftEl) {
      leftEl.style.opacity = isModalOpen ? '0' : '1';
    }

    if (leaderboardsEl) {
      leaderboardsEl.style.opacity = isModalOpen ? '0' : '1';
    }

    if (soonEl) {
      soonEl.style.opacity = isModalOpen ? '0' : '1';
    }

    if (rightEl) {
      rightEl.style.background = isModalOpen ? 'transparent' : '';
    }
  }, [isModalOpen]);
};
