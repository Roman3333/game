import clsx from 'clsx';
import { MenuProps } from './types';
import Cross from '@/shared/assets/svg/cross-menu.svg?react';
import Link from '@/shared/assets/svg/link.svg?react';
import X from '@/shared/assets/svg/x.svg?react';
import './Menu.scss';
import { Title } from '@/shared/ui';

const links = [
  { href: 'https://www.google.com/webhp?hl=ru', label: 'puffinsgame.xyz', Icon: Link },
  { href: 'https://www.google.com/webhp?hl=ru', label: '@puffinsgameverse', Icon: Link },
  { href: 'https://www.google.com/webhp?hl=ru', label: '@puffins_game', Icon: X },
];

export const Menu = (props: MenuProps) => {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <div
      className={clsx('rush-menu', {
        ['active']: isMenuOpen,
      })}
    >
      <div className="rush-menu__top">
        <Title className="rush-menu__title" type="h1" font="bowlby" weight="regular">
          PUFFINS
        </Title>

        <button className="rush-menu__btn" onClick={() => setIsMenuOpen(false)}>
          <Cross />
        </button>
      </div>

      <ul className="rush-menu__ul">
        {links.map(({ href, label, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rush-menu__link"
            >
              <Icon width={24} height={24} />
              <span className="rush-menu__label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
