import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { ButtonPuffin } from '@/shared/ui';
import { CardPassProps } from './types';
import Check from '@/shared/assets/svg/check.svg?react';
import './CardPass.scss';

export const CardPass = (props: CardPassProps) => {
  const {
    id,
    level,
    xp,
    isSpecial,
    isGet,
    isSmall = false,
    status,
    progressFill,
  } = props;
  const [isGetPrize, setIsGetPrize] = useState(isGet);

  const handleGetPrize = async () => {
    try {
      console.log(id);
      setIsGetPrize(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsGetPrize(isGet);
  }, [isGet]);

  return (
    <div
      className={clsx('puffins-pass', {
        ['small']: isSmall,
      })}
    >
      <div className="puffins-pass__lvl">{`Lvl ${level}`}</div>

      <div
        className={clsx('puffins-pass__wrapper', {
          ['usual']: !isSpecial,
          ['special']: isSpecial,
          ['locked-usual']: status === 'locked' && !isSpecial,
          ['locked-special']: status === 'locked' && isSpecial,
        })}
      >
        <div className="puffins-pass__top">
          <img src="/images/fish-coin.png" alt="Fish" className="puffins-pass__fish" />
          <span className="puffins-pass__xp">{`+${xp}`}</span>
        </div>

        {status === 'locked' ? (
          <>
            <img
              src="/images/box-close.png"
              alt="Box closed"
              draggable={false}
              className="puffins-pass__img-close"
            />
            {isSpecial && (
              <img
                src="/images/box-bg.png"
                alt="Box bg"
                draggable={false}
                className="puffins-pass__img-bg"
              />
            )}
          </>
        ) : isGetPrize ? (
          <>
            <img
              src="/images/box-open.png"
              alt="Box open"
              draggable={false}
              className="puffins-pass__img-open"
            />
            {isSpecial && (
              <img
                src="/images/box-bg.png"
                alt="Box bg"
                draggable={false}
                className="puffins-pass__img-bg"
              />
            )}
          </>
        ) : (
          <>
            <img
              src="/images/box-close.png"
              alt="Box closed"
              draggable={false}
              className="puffins-pass__img-close"
            />
            {isSpecial && (
              <img
                src="/images/box-bg.png"
                alt="Box bg"
                draggable={false}
                className="puffins-pass__img-bg"
              />
            )}
          </>
        )}

        {status !== 'locked' && (
          <>
            {isGetPrize ? (
              <Check className="puffins-pass__check" />
            ) : (
              <ButtonPuffin
                className="puffins-pass__btn"
                font="play-story"
                onClick={handleGetPrize}
                variant="level"
              >
                Claim
              </ButtonPuffin>
            )}
          </>
        )}

        {status === 'locked' && (
          <img
            src="/images/lock.png"
            alt="Fish"
            className="puffins-pass__img-lock"
            draggable={false}
          />
        )}
      </div>

      <div className="puffins-pass__progress">
        <div className="puffins-pass__line" style={{ width: `${progressFill}%` }} />
      </div>

      <div
        className={clsx('puffins-pass__circle', {
          ['current']: status === 'current',
          ['locked']: status === 'locked',
        })}
      >
        {level}
      </div>
    </div>
  );
};
