import { Tooltip as ReactTooltip } from 'react-tooltip';
import clsx from 'clsx';
import { TooltipProps } from './types';
import './Tooltip.scss';

export const Tooltip = (props: TooltipProps) => {
  const {
    isOpen,
    content,
    tooltipId,
    place = 'top-end',
    offset = -16,
    className,
  } = props;

  return (
    <ReactTooltip
      className={clsx('puffins-tooltip', className)}
      anchorSelect={`[data-tooltip-id="${tooltipId}"]`}
      render={() => <div>{content}</div>}
      place={place}
      delayHide={150}
      delayShow={150}
      noArrow
      opacity={1}
      isOpen={isOpen}
      offset={offset}
    />
  );
};

Tooltip.displayName = 'Tooltip';
