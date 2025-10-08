import { PlacesType } from 'react-tooltip';

export interface TooltipProps {
  isOpen: boolean;
  content: any;
  tooltipId: string;
  place?: PlacesType;
  offset?: number;
  className?: string;
}
