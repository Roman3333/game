import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './Links.scss';

const links = [
  { label: 'DASHBOARD', value: '/puffins' },
  { label: 'ABSTRACT ECO', value: '/abstract-eco' },
  { label: 'RAFFLES', value: '/raffles' },
];

export const Links = () => {
  return (
    <div className="puffins-links">
      <ul className="puffins-links__ul">
        {links.map(({ label, value }) => (
          <li key={value} className="puffins-links__li">
            <NavLink
              to={value}
              className={({ isActive }) =>
                clsx('puffins-links__link', { ['puffins-links__link--active']: isActive })
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
