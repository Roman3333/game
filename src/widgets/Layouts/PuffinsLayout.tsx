import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { HeaderPuffins } from '../HeaderPuffins';
import { HeaderRush } from '../HeaderRush';
import './PuffinsLayout.scss';

export const PuffinsLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isPuffinsPage =
    pathname === '/puffins' || pathname === '/abstract-eco' || pathname === '/raffles';
  const isRushPage = pathname === '/rush';

  return (
    <div
      className={clsx('puffins-layout', {
        ['puffins-layout--puffins-bg']: isPuffinsPage,
        ['puffins-layout--rush-bg']: isRushPage,
      })}
    >
      {isPuffinsPage && <HeaderPuffins />}
      {isRushPage && <HeaderRush />}

      <main>
        <Outlet />
      </main>
    </div>
  );
};
