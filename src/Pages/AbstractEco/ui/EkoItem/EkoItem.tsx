import { Title } from '@/shared/ui';
import { EcoItem } from '../All/types';
import Link from '@/shared/assets/svg/link.svg?react';
import X from '@/shared/assets/svg/x-gray.svg?react';
import Ship from '@/shared/assets/svg/ship.svg?react';
import './EkoItem.scss';

export const EkoItem = (props: EcoItem) => {
  const { img, title, text, isVerified, isParrot, ship, x, link } = props;

  return (
    <div className="eco-item">
      <img
        className="eco-item__img"
        src={img}
        width={64}
        height={64}
        alt={`${title} img`}
      />

      <div className="eco-item__centr">
        <div className="eco-item__top">
          <Title variant="third" font="montserrat">
            {title}
          </Title>

          {isVerified && (
            <img src="/images/check.png" width={20} height={20} alt="Verified" />
          )}

          {isParrot && (
            <img src="/images/parrot.png" width={20} height={20} alt="Parrot" />
          )}
        </div>

        <p className="eco-item__text">{text}</p>
      </div>

      <ul className="eco-item__right">
        <li>
          <a
            className="eco-item__link"
            href={ship}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ship />
          </a>
        </li>
        <li>
          <a
            className="eco-item__link"
            href={x}
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="eco-item__icon x" />
          </a>
        </li>
        <li>
          <a
            className="eco-item__link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link className="eco-item__icon link" />
          </a>
        </li>
      </ul>
    </div>
  );
};
