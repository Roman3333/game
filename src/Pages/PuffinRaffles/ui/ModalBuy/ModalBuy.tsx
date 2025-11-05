import { useState } from 'react';
import { Modal, ButtonPuffin, Title } from '@/shared/ui';
import { formatCoins } from '@/Pages/PuffinsGame';
import { ModalBuyProps } from './types';
import Ticket from '@/shared/assets/svg/ticket.svg?react';
import Plus from '@/shared/assets/svg/plus.svg?react';
import Minus from '@/shared/assets/svg/minus.svg?react';
import './ModalBuy.scss';

export const ModalBuy = (props: ModalBuyProps) => {
  const { currentSquad, isModalOpen, setIsModalOpen } = props;
  const [ticket, setTicket] = useState(5);
  const ticketPrice = 32;
  const totalPrice = ticket * ticketPrice;

  const handleIncrement = () => {
    setTicket((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (ticket > 1) {
      setTicket((prevValue) => prevValue - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(currentSquad, totalPrice);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      wrapperClassname="raffles-buy"
      handlelCloseModal={() => setIsModalOpen(false)}
    >
      <Title type="h3" size="l" variant="secondary">
        BUY TICKETS
      </Title>

      <div className="raffles-buy__balance">
        <div className="raffles-buy__text">Your Balance</div>
        <div className="raffles-buy__wrapper">
          <img src="/images/fish-coin.png" width={20} height={20} alt="Fish" />
          <span className="raffles-buy__count">{formatCoins(2800)}</span>
        </div>
      </div>

      <form className="raffles-buy__form" onSubmit={handleSubmit}>
        <div className="raffles-buy__actions">
          <button className="raffles-buy__actions-btn" onClick={handleDecrement}>
            <Minus width={24} height={24} />
          </button>
          <div className="raffles-buy__actions-centr">
            <span className="raffles-buy__actions-value">{ticket}</span>
            <Ticket width={40} height={40} />
          </div>
          <button className="raffles-buy__actions-btn" onClick={handleIncrement}>
            <Plus width={24} height={24} />
          </button>
        </div>

        <ButtonPuffin className="raffles-buy__btn" type="submit" variant="raffles">
          <span className="raffles-buy__btn-text">BUY FOR</span>
          <img src="/images/fish-coin.png" width={20} height={20} alt="Fish" />
          <span className="raffles-buy__btn-text">{totalPrice}</span>
        </ButtonPuffin>
      </form>

      <div className="raffles-buy__total">
        <div>
          <div className="raffles-buy__tickets">YOUR Total tickets </div>
          <div className="raffles-buy__your-tickets">
            <Ticket width={18} height={18} />
            <span className="raffles-buy__number">{formatCoins(80)}</span>
          </div>
        </div>
        <div>
          <div className="raffles-buy__tickets">Total tickets in pool</div>
          <div className="raffles-buy__number">{formatCoins(23453)}</div>
        </div>
      </div>
    </Modal>
  );
};
