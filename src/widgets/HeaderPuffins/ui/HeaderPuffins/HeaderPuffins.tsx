import { Link } from 'react-router-dom';
import { Links } from '../Links/Links';
import { Information } from '../Information/Information';
import Logo from '@/shared/assets/svg/logo-puffins.svg?react';
import './HeaderPuffins.scss';

export const HeaderPuffins = () => {
  return (
    <header id="header-puffins" className="header-puffins">
      <div className="container-puffins">
        <div className="header-puffins__wrapper">
          <Links />

          <Link to="/puffins" className="header-puffins__wrapper-link">
            <Logo />
          </Link>

          <Information />
        </div>
      </div>
    </header>
  );
};
