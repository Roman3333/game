import { useState, useRef } from 'react';
import clsx from 'clsx';
import { ButtonPuffin } from '@/shared/ui';
import { useOutsideClick } from '@/shared/hooks';
import { ModalEdit } from '../ModalEdit/ModalEdit';
import { ModalBonus } from '../ModalBonus/ModalBonus';
import { PopupProps } from './types';
import Arrow from '@/shared/assets/svg/arrow.svg?react';
import Settings from '@/shared/assets/svg/settings.svg?react';
import Copy from '@/shared/assets/svg/copy.svg?react';
import Exit from '@/shared/assets/svg/exit.svg?react';
import './Popup.scss';

export const Popup = (props: PopupProps) => {
  const { wrapperRef, isOpenPopup, setIsOpenPopup } = props;
  const popupRef = useRef(null);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalBonusOpen, setIsModalBonusOpen] = useState(false);

  useOutsideClick(wrapperRef, () => setIsOpenPopup(false), [popupRef]);

  return (
    <>
      <div
        ref={popupRef}
        className={clsx('puffins-popap', {
          active: isOpenPopup,
        })}
      >
        <div className="puffins-popap__top">
          <img
            src={'/images/avatar-popup.png'}
            width={120}
            height={120}
            alt="Avatar"
            className="puffins-popap__avatar"
          />

          <div className="puffins-popap__stat">
            <div className="puffins-popap__name">{'Dmitry CH'}</div>

            <div className="puffins-popap__items">
              <div className="puffins-popap__item">
                <span className="puffins-popap__left">XP</span>
                <span className="puffins-popap__right">{'8000 / 12000'}</span>
              </div>

              <ButtonPuffin
                className="puffins-popap__item"
                weight="bold"
                variant="popup"
                onClick={() => {
                  setIsModalBonusOpen(true);
                  setIsOpenPopup(false);
                }}
              >
                <span className="puffins-popap__left">Bonus:</span>
                <span className="puffins-popap__right factor">{'x1,5'}</span>
                <Arrow />
              </ButtonPuffin>
            </div>
          </div>
        </div>

        <div className="puffins-popap__bottom">
          <div className="puffins-popap__bottom-top">
            <span className="puffins-popap__bottom-ref">Ref Number:</span>
            <span className="puffins-popap__bottom-count">{12}</span>
          </div>

          <ButtonPuffin
            className="puffins-popap__copy puffins-popap__item"
            weight="medium"
            variant="popup"
          >
            <span className="puffins-popap__copy-left">
              {'https://join.puffins.com/dch'}
            </span>

            <div className="puffins-popap__copy-right">
              <Copy />
              <span className="puffins-popap__copy-span">Copy</span>
            </div>
          </ButtonPuffin>

          <div className="puffins-popap__bottom-btns">
            <ButtonPuffin
              weight="bold"
              variant="orange"
              onClick={() => {
                setIsModalEditOpen(true);
                setIsOpenPopup(false);
              }}
            >
              <Settings />
              Settings
            </ButtonPuffin>

            <ButtonPuffin variant="danger" onClick={() => alert('Тестовый выход =)')}>
              <Exit />
            </ButtonPuffin>
          </div>
        </div>
      </div>

      <ModalEdit
        isModalEditOpen={isModalEditOpen}
        setIsModalEditOpen={setIsModalEditOpen}
      />

      <ModalBonus
        isModalBonusOpen={isModalBonusOpen}
        setIsModalBonusOpen={setIsModalBonusOpen}
      />
    </>
  );
};
