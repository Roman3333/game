import { useState, useRef } from 'react';
import { useOutsideClick, useBodyOverflow } from '@/shared/hooks';
import { Title } from '@/shared/ui';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { useModalStyles } from '../../hooks/useModalStyles';
import { getFill } from '../../utils/getFill';
import { CardPass } from '../CardPass/CardPass';
import Cross from '@/shared/assets/svg/cross.svg?react';
import './Soon.scss';

const data = [
  {
    id: 1,
    level: 1,
    xp: 40,
    isSpecial: false,
    isGet: true,
  },
  {
    id: 2,
    level: 2,
    xp: 50,
    isSpecial: false,
    isGet: false,
  },
  {
    id: 3,
    level: 3,
    xp: 60,
    isSpecial: false,
    isGet: false,
  },
  {
    id: 4,
    level: 4,
    xp: 70,
    isSpecial: false,
    isGet: false,
  },
  {
    id: 5,
    level: 5,
    xp: 120,
    isSpecial: true,
    isGet: false,
  },
  {
    id: 6,
    level: 6,
    xp: 30,
    isSpecial: false,
    isGet: false,
  },
  {
    id: 7,
    level: 7,
    xp: 25,
    isSpecial: false,
    isGet: false,
  },
  {
    id: 8,
    level: 8,
    xp: 110,
    isSpecial: false,
    isGet: false,
  },
  {
    id: 9,
    level: 9,
    xp: 80,
    isSpecial: false,
    isGet: false,
  },
  {
    id: 10,
    level: 10,
    xp: 140,
    isSpecial: true,
    isGet: false,
  },
];

export const Soon = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const wrapperRef = useRef(null);

  const user = {
    name: 'Vlad',
    lvl: 2.7,
  };

  useOutsideClick(wrapperRef, () => setisModalOpen(false), []);
  useBodyOverflow(isModalOpen);

  const { scrollRef, onMouseDown, onMouseMove, onMouseUp, onWheel } =
    useHorizontalScroll<HTMLDivElement>();
  useModalStyles(isModalOpen);

  return (
    <>
      <div
        id="puffins-soon"
        className="puffins-soon"
        onClick={() => setisModalOpen(true)}
      >
        <div className="puffins-soon__mini">
          {data.slice(0, 3).map((item) => {
            return (
              <CardPass
                key={item.id}
                {...item}
                progressFill={getFill(user.lvl, item.level)}
                isSmall
                status={
                  item.level < Math.floor(user.lvl)
                    ? 'completed'
                    : item.level === Math.floor(user.lvl)
                    ? 'current'
                    : 'locked'
                }
              />
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <>
          <div ref={wrapperRef} className="puffins-soon__modal">
            <div className="puffins-soon__top">
              <Title className="puffins-soon__title" size="xxl" weight="regular">
                Level Up Pass
              </Title>

              <button className="puffins-soon__btn" onClick={() => setisModalOpen(false)}>
                <Cross className="puffins-soon__icon" />
              </button>
            </div>

            <div
              className="puffins-soon__cards"
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onWheel={onWheel}
            >
              {data.map((item) => {
                return (
                  <CardPass
                    key={item.id}
                    {...item}
                    progressFill={getFill(user.lvl, item.level)}
                    status={
                      item.level < Math.floor(user.lvl)
                        ? 'completed'
                        : item.level === Math.floor(user.lvl)
                        ? 'current'
                        : 'locked'
                    }
                  />
                );
              })}
            </div>
          </div>

          <div className="puffins-soon__bg" />
        </>
      )}
    </>
  );
};
