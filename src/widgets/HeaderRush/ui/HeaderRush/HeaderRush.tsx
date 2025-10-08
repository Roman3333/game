import { useState } from 'react';
import clsx from 'clsx';
import { ButtonPuffin } from '@/shared/ui';
import { LeaderBoard } from '../LeaderBoard/LeaderBoard';
import { Menu } from '../Menu/Menu';
import Sound from '@/shared/assets/svg/sound.svg?react';
import Burger from '@/shared/assets/svg/burger.svg?react';
import './HeaderRush.scss';

export const HeaderRush = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLeaderBoardOpen, setIsLeaderBoardOpen] = useState(false);

  return (
    <header className="header-rush">
      <div
        className={clsx('header-rush__wrapper', {
          ['hidden']: isLeaderBoardOpen,
        })}
      >
        <ButtonPuffin
          className="header-rush__lead"
          weight="bold"
          size="m"
          variant="rush"
          onClick={() => setIsLeaderBoardOpen(true)}
        >
          LEADERBOARD
        </ButtonPuffin>

        <div className="header-rush__actions">
          <ButtonPuffin
            className="header-rush__sign"
            weight="bold"
            size="m"
            variant="rush"
          >
            Sign In
          </ButtonPuffin>

          <ButtonPuffin className="header-rush__icon" variant="rush">
            <Sound />
          </ButtonPuffin>

          <ButtonPuffin
            className="header-rush__icon"
            variant="rush"
            onClick={() => setIsMenuOpen(true)}
          >
            <Burger />
          </ButtonPuffin>
        </div>
      </div>

      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <LeaderBoard
        isLeaderBoardOpen={isLeaderBoardOpen}
        setIsLeaderBoardOpen={setIsLeaderBoardOpen}
      />

      <div
        className={clsx('header-rush__blur', {
          ['active']: isMenuOpen || isLeaderBoardOpen,
        })}
        onClick={() => {
          setIsMenuOpen(false);
          setIsLeaderBoardOpen(false);
        }}
      ></div>
    </header>
  );
};
