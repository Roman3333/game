import { forwardRef, MouseEvent } from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner/Spinner';
import { ButtonProps } from './types';
import './ButtonPuffin.scss';

type TButton = HTMLButtonElement;

export const ButtonPuffin = forwardRef<TButton, ButtonProps>((props, ref) => {
  const {
    children,
    isLoading,
    isDisabled,
    onClick = () => undefined,
    className = '',
    variant = 'primary',
    weight = 'regular',
    size = 's',
    type = 'button',
    font = 'rowdies',
    ...rest
  } = props;

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled || isLoading) {
      return;
    }

    onClick(e);
  };

  return (
    <button
      className={clsx('button-puffins', variant, weight, size, font, className, {
        loading: isLoading,
      })}
      type={type}
      disabled={isDisabled}
      onClick={onButtonClick}
      ref={ref}
      {...rest}
    >
      {isLoading ? <Spinner isCenter /> : children}
    </button>
  );
});

ButtonPuffin.displayName = 'Button';
