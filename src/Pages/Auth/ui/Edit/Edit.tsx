import { useState, useEffect } from 'react';
import { Modal, ButtonPuffin, InputPuffin, Title } from '@/shared/ui';
import { EditProps } from './types';
import X from '@/shared/assets/svg/x.svg?react';
import Discord from '@/shared/assets/svg/discord.svg?react';
import Step from '@/shared/assets/svg/step-1.svg?react';
import './Edit.scss';

export const Edit = ({ setStep }: EditProps) => {
  const [username, setUsername] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!username.trim()) {
        setIsUsernameValid(false);
        setErrorMessage('(please enter your username)');
        return;
      }

      setIsUsernameValid(true);
      setErrorMessage('');
      setStep(3);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (username.trim()) {
      setIsUsernameValid(true);
      setErrorMessage('');
      return;
    }
  }, [username]);

  return (
    <Modal isModalOpen={true} isHideBg={false} wrapperClassname="auth-modal">
      <div className="auth-modal__top">
        <Title type="h3" size="xs" font="montserrat" weight="medium">
          Edit Profile
        </Title>
        <div className="auth-modal__progress">
          <span className="auth-modal__steps">1/3</span>
          <Step />
        </div>
      </div>
      <p className="auth-modal__text">
        To share achievements, make sure you make them visible first
      </p>

      <form className="auth-modal__form" onSubmit={handleSubmit}>
        <InputPuffin
          wrapperClassName="auth-modal__input-wrapper"
          className="auth-modal__input"
          fontSize="s"
          value={username}
          isValueValid={isUsernameValid}
          onChange={(e) => setUsername(e.target.value)}
          label="Enter Username"
          message={errorMessage}
        />

        <div className="auth-modal__btns">
          <ButtonPuffin className="auth-modal__social" variant="x" weight="semibold">
            <span>Connect X</span>
            <X width={32} height={32} />
          </ButtonPuffin>

          <ButtonPuffin
            className="auth-modal__social"
            variant="discord"
            weight="semibold"
          >
            <span>Connect Discord</span>
            <Discord width={32} height={32} />
          </ButtonPuffin>
        </div>

        <ButtonPuffin
          className="auth-modal__btn"
          variant="save"
          type="submit"
          font="montserrat"
          weight="semibold"
        >
          Save & Go to Profile
        </ButtonPuffin>
      </form>
    </Modal>
  );
};
