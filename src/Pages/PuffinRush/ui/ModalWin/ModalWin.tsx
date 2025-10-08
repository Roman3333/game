import { Modal, Title, ButtonPuffin } from '@/shared/ui';
import { ModalWinProps } from './types';
import Distance from '@/shared/assets/svg/distance.svg?react';
import './ModalWin.scss';

export const ModalWin = (props: ModalWinProps) => {
  const { isModalOpen, setIsOpenModal } = props;

  return (
    <Modal
      isModalOpen={isModalOpen}
      handlelCloseModal={() => setIsOpenModal(false)}
      wrapperClassname="rush-win"
      isHideBg={false}
    >
      <div className="rush-win__top">
        <img
          src="/images/stars.png"
          width={213}
          height={112}
          alt="Stars"
          className="rush-win__img"
        />

        <Title className="rush-win__title" weight="regular" font="bowlby">
          GAME OVER!
        </Title>
      </div>

      <div className="rush-win__win">Your Win</div>

      <div className="rush-win__eth">
        <span className="rush-win__count">{`${0.000356}`}</span>{' '}
        <span className="rush-win__text">ETH</span>
      </div>

      <div className="rush-win__items">
        <div className="rush-win__item">
          <div className="rush-win__left">
            <Distance />
          </div>
          <div className="rush-win__right">
            <span className="rush-win__suptitle">Distance</span>
            <span className="rush-win__number">{`${123.7}m`}</span>
          </div>
        </div>

        <div className="rush-win__item">
          <div className="rush-win__left">{`${1.5}x`}</div>
          <div className="rush-win__right">
            <span className="rush-win__suptitle">Multiplier</span>
            <span className="rush-win__number">{`x${2.5}`}</span>
          </div>
        </div>
      </div>

      <ButtonPuffin className="rush-win__btn" variant="cash" size="m" font="bowlby">
        Cash out
      </ButtonPuffin>
    </Modal>
  );
};
