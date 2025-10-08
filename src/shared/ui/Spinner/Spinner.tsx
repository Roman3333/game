import clsx from 'clsx';
import { SpinnerProps } from './types';
import './Spinner.scss';

export const Spinner = (props: SpinnerProps) => {
  const { className, isCenter } = props;

  return (
    <div
      className={clsx('puffins-spinner', className, {
        ['centr']: isCenter,
      })}
    >
      <div className="puffins-spinner__circle" id="a"></div>
      <div className="puffins-spinner__circle" id="b"></div>
      <div className="puffins-spinner__circle" id="c"></div>
    </div>
  );
};
