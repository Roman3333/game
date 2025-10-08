import { Link } from 'react-router-dom';
import { formatCoins } from '../../utils/formatCoins';
import { LeaderBoardItemProps } from './types';
import Gold from '@/shared/assets/svg/gold.svg?react';
import Silver from '@/shared/assets/svg/silver.svg?react';
import Bronze from '@/shared/assets/svg/bronze.svg?react';
import './LeaderBoardItem.scss';

export const LeaderBoardItem = (props: LeaderBoardItemProps) => {
  const { rank, lvl, coins, link, avatar, name } = props;

  return (
    <div className="puffins-leader">
      <div className="puffins-leader__rank">
        {rank === 1 ? <Gold /> : rank === 2 ? <Silver /> : rank === 3 ? <Bronze /> : rank}
      </div>

      <div className="puffins-leader__info">
        <div className="puffins-leader__left">
          <img
            src={avatar}
            className="puffins-leader__avatar"
            width={40}
            height={40}
            alt={`${name} avatar`}
          />

          <span className="puffins-leader__lvl">{lvl}</span>
        </div>

        <div className="puffins-leader__item">
          <span className="puffins-leader__name" title={name}>
            {name}
          </span>

          <Link
            to={link}
            className="puffins-leader__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </Link>
        </div>
      </div>

      <div className="puffins-leader__coins">{formatCoins(coins)}</div>
    </div>
  );
};
