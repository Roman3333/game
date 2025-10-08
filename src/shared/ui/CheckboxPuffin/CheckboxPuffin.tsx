import { forwardRef, ChangeEvent } from 'react';
import clsx from 'clsx';
import { ICheckboxProps } from './types';
import './CheckboxPuffin.scss';

type L = HTMLLabelElement;

export const CheckboxPuffin = forwardRef<L, ICheckboxProps>((props, ref) => {
  const {
    onCheckedChange = () => undefined,
    className,
    variant = 's',
    checked,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckedChange(e);
  };

  return (
    <label className={clsx('checkbox-puffin', className)} ref={ref}>
      <input
        className={clsx('checkbox-puffin__input', variant)}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-label="Checkbox"
        {...rest}
      />
    </label>
  );
});

CheckboxPuffin.displayName = 'Checkbox';
