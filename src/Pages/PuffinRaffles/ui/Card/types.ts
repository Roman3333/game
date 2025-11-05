export interface CardProps {
  id: number;
  time: string;
  img: string;
  status: 'active' | 'ended';
  title: string;
  text: string;
  user: string | null;
  level: number | null;
  points: number;
  isOnlyHolders: boolean;
  handleOpenBuyModal?: (id: number) => void;
}
