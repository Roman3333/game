import { ButtonPuffin } from '@/shared/ui';
import { formatCoins } from '@/Pages/PuffinsGame';
import { getFormattedTime } from '../../utils/getFormattedTime';
import { CardProps } from './types';
import Clock from '@/shared/assets/svg/clock.svg?react';
import Gateway from '@/shared/assets/svg/gateway.svg?react';
import './Card.scss';

export const Card = (props: CardProps) => {
  const {
    id,
    img,
    time,
    status,
    level,
    title,
    text,
    user,
    points,
    isOnlyHolders,
    handleOpenBuyModal,
  } = props;

  const handleEnter = async () => {
    try {
      if (status === 'ended') return;
      handleOpenBuyModal && handleOpenBuyModal(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${img})` }} className="raffles-card">
      <div className="raffles-card__time">
        <Clock />
        <span className="raffles-card__date">{getFormattedTime(time)}</span>
      </div>

      <div className="raffles-card__content">
        <div className="raffles-card__top">
          <span className="raffles-card__nft">NFT</span>
          <div className="raffles-card__status-wrap">
            {level && <span className="raffles-card__lvl">{`For ${level}+ Level`}</span>}
            <span className="raffles-card__status">
              {status === 'active' ? 'Active' : 'Has Ended'}
            </span>
          </div>
        </div>

        <div className="raffles-card__title" title={title}>
          {title}
        </div>

        {isOnlyHolders && (
          <div className="raffles-card__holders">
            <Gateway />
            <span className="raffles-card__holders-text">For Puffin Holders Only</span>
          </div>
        )}

        {status === 'active' ? (
          <p className="raffles-card__text" title={text}>
            {text}
          </p>
        ) : (
          <>
            <p className="raffles-card__grats">Congratulations to</p>
            <p className="raffles-card__user">
              {`@${user}`} <span>!</span>
            </p>
          </>
        )}

        <div className="raffles-card__bottom">
          <div className="raffles-card__points">
            <img src="/images/fish-coin.png" width={24} height={24} alt="Fish" />
            <span className="raffles-card__count">{formatCoins(points)}</span>
          </div>
          <ButtonPuffin
            onClick={handleEnter}
            variant="raffles"
            isDisabled={status === 'ended'}
          >
            {status === 'active' ? 'ENTER NOW' : 'ENDED'}
          </ButtonPuffin>
        </div>
      </div>
    </div>
  );
};
