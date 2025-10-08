import { JSX } from 'react';
import clsx from 'clsx';
import { TitleProps } from './types';
import './Title.scss';

export const Title = (props: TitleProps) => {
  const {
    children,
    type = 'h2',
    size = 's',
    variant = 'primary',
    weight = 'bold',
    font = 'rowdies',
    className,
    ...rest
  } = props;
  const Tag: keyof JSX.IntrinsicElements = type;

  return (
    <Tag
      className={clsx('puffin-title', size, variant, weight, font, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

Title.displayName = 'Title';
