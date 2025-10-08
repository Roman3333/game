import { useState } from 'react';
import { ButtonPuffin, Title } from '@/shared/ui';
import { ModalComplete } from '../ModalComplete/ModalComplete';
import Error from '@/shared/assets/svg/error.svg?react';
import './IncompleteAccount.scss';

export const IncompleteAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="incomplete">
        <Error className="incomplete__icon" width={38} height={38} />

        <div className="incomplete__column">
          <Title type="h3" weight="regular" variant="danger" font="play-story">
            Incomplete Account
          </Title>
          <p className="incomplete__text">
            Please link your Twitter / X and Discord accounts to continue.
          </p>
        </div>

        <ButtonPuffin
          className="incomplete__btn"
          variant="complete"
          weight="bold"
          onClick={() => setIsModalOpen(true)}
        >
          COMPLETE ACCOUNT SETUP
        </ButtonPuffin>
      </div>

      <ModalComplete isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
