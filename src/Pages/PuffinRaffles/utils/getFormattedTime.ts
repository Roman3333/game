/**
 * Вычисляем оставшееся время до окончания события в строку вида:
 * '16 D 2 H 11 M'
 */
export const getFormattedTime = (time: string) => {
  const endDate = new Date(time);
  const now = new Date();

  const diff = endDate.getTime() - now.getTime();

  if (diff <= 0) return '0D 0H 0M';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${days}D ${hours}H ${minutes}M`;
};
