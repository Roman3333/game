import { useState } from 'react';
import clsx from 'clsx';
import { ButtonPuffin, InputPuffin, Title } from '@/shared/ui';
import { LeaderBoardItem } from '../LeaderBoardItem/LeaderBoardItem';
import { LeaderBoardProps } from './types';
import Gold from '@/shared/assets/svg/gold.svg?react';
import './LeaderBoard.scss';

const tabs = [
  { label: 'Daily', value: 'day' },
  { label: 'Weekly', value: 'week' },
  { label: 'All time', value: 'all' },
];
//TODO: убрать data
const data = [
  { id: 1, rank: 1, avatar: '/images/avatar-card.png', name: 'Dmitry Ch', coins: 250000 },
  {
    id: 2,
    rank: 2,
    avatar: '/images/avatar-card.png',
    name: 'Dmitry Chaffy',
    coins: 250,
  },
  {
    id: 3,
    rank: 3,
    avatar: '/images/avatar-card.png',
    name: 'Elena Troyanskaya',
    coins: 25000,
  },
  { id: 4, rank: 4, avatar: '/images/avatar-card.png', name: 'Dmitry Ch', coins: 15000 },
  { id: 5, rank: 5, avatar: '/images/avatar-card.png', name: 'Dmitry Ch', coins: 45000 },
  { id: 6, rank: 6, avatar: '/images/avatar-card.png', name: 'Dmitry Ch', coins: 15000 },
  { id: 7, rank: 7, avatar: '/images/avatar-card.png', name: 'Dmitry Ch', coins: 45000 },
  { id: 8, rank: 8, avatar: '/images/avatar-card.png', name: 'Dmitry Ch', coins: 15000 },
  { id: 9, rank: 9, avatar: '/images/avatar-card.png', name: 'Dmitry Ch', coins: 45000 },
  {
    id: 10,
    rank: 10,
    avatar: '/images/avatar-card.png',
    name: 'Dmitry Ch',
    coins: 15000,
  },
  {
    id: 11,
    rank: 11,
    avatar: '/images/avatar-card.png',
    name: 'Dmitry Ch',
    coins: 45000,
  },
  {
    id: 12,
    rank: 12,
    avatar: '/images/avatar-card.png',
    name: 'Dmitry Ch',
    coins: 15000,
  },
  {
    id: 13,
    rank: 13,
    avatar: '/images/avatar-card.png',
    name: 'Dmitry Ch',
    coins: 45000,
  },
  {
    id: 14,
    rank: 14,
    avatar: '/images/avatar-card.png',
    name: 'Dmitry Ch',
    coins: 15000,
  },
];

export const LeaderBoard = (props: LeaderBoardProps) => {
  const { isLeaderBoardOpen, setIsLeaderBoardOpen } = props;
  const [activeTab, setactiveTab] = useState('day');
  const [search, setSearch] = useState('');

  return (
    <div
      className={clsx('rush-leaderboard', {
        ['active']: isLeaderBoardOpen,
      })}
    >
      <div className="header-rush__wrapper">
        <ButtonPuffin
          className="rush-leaderboard__back"
          weight="bold"
          size="m"
          variant="rush"
          onClick={() => setIsLeaderBoardOpen(false)}
        >
          BACK TO GAME
        </ButtonPuffin>

        <Title className="rush-leaderboard__title" type="h2">
          Leaderboard
        </Title>

        <div className="rush-leaderboard__right">
          <ButtonPuffin
            className="rush-leaderboard__place"
            weight="bold"
            size="m"
            variant="rush"
          >
            {null}
          </ButtonPuffin>
          <div className="rush-leaderboard__stat">
            <span className="rush-leaderboard__text">Leaderboard place:</span>
            <span className="rush-leaderboard__num">{`#${12384}`}</span>
          </div>
        </div>
      </div>

      <div className="rush-leaderboard__table">
        <div className="rush-leaderboard__top">
          <div className="rush-leaderboard__left">
            <div className="rush-leaderboard__tabs">
              {tabs.map(({ label, value }) => (
                <div
                  key={value}
                  className={clsx('rush-leaderboard__tab', {
                    ['active']: value === activeTab,
                  })}
                  onClick={() => setactiveTab(value)}
                >
                  {label}
                </div>
              ))}
            </div>

            <InputPuffin
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="search"
              fontSize="s"
              placeholder="Search by name"
              onClickBtn={() => setSearch('')}
            />
          </div>

          <div className="rush-leaderboard__diamond">
            <div className="rush-leaderboard__diamond-top">
              <Gold width={32} height={32} />
              <span className="rush-leaderboard__diamond-text">
                Top 1 player will receive the Diamond Cannon!
              </span>
            </div>
            <div className="rush-leaderboard__diamond-time">{'16:32:24'}</div>
          </div>
        </div>

        <div className="rush-leaderboard__titles">
          <div className="rush-leaderboard__titl">PLACE</div>
          <div className="rush-leaderboard__titl">PLAYER</div>
          <div className="rush-leaderboard__titl">Value</div>
        </div>

        <div className="rush-leaderboard__items">
          {data.map((item) => (
            <LeaderBoardItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
