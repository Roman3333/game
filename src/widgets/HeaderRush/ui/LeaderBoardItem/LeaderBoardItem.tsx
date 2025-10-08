import clsx from 'clsx';
import { formatCoins } from '@/Pages/PuffinsGame';
import Gold from '@/shared/assets/svg/gold.svg?react';
import Silver from '@/shared/assets/svg/silver.svg?react';
import Bronze from '@/shared/assets/svg/bronze.svg?react';
import Badge from '@/shared/assets/svg/badge.svg?react';
import { LeaderBoardItemProps } from './types';
import './LeaderBoardItem.scss';

export const LeaderBoardItem = (props: LeaderBoardItemProps) => {
  const { rank, avatar, name, coins } = props;

  return (
    <div
      className={clsx('rush-lead', {
        ['gold']: rank === 1,
        ['silver']: rank === 2,
        ['bronze']: rank === 3,
      })}
    >
      <div className="rush-lead__rank">
        {rank === 1 ? (
          <Gold width={40} height={40} />
        ) : rank === 2 ? (
          <Silver width={40} height={40} />
        ) : rank === 3 ? (
          <Bronze width={40} height={40} />
        ) : (
          <Badge width={40} height={40} />
        )}
        <span className="rush-lead__count">{`#${rank}`}</span>
      </div>

      <div className="rush-lead__info">
        <img
          src={avatar}
          className="rush-lead__avatar"
          width={56}
          height={56}
          alt={`${name} avatar`}
        />
        <span className="rush-lead__name">{name}</span>
      </div>

      <div className="rush-lead__coins">{formatCoins(coins)}</div>
    </div>
  );
};
