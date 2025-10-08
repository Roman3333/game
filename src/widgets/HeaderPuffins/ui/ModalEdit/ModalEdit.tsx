import { useState, useEffect } from 'react';
import { validateEmail } from '@/shared/utils';
import { Modal, ButtonPuffin, InputPuffin } from '@/shared/ui';
import { ModalEditProps } from './types';
import X from '@/shared/assets/svg/x.svg?react';
import Discord from '@/shared/assets/svg/discord.svg?react';
import Cross from '@/shared/assets/svg/cross.svg?react';
import './ModalEdit.scss';

export const ModalEdit = (props: ModalEditProps) => {
  const { isModalEditOpen, setIsModalEditOpen } = props;
  const [username, setUsername] = useState('');
  const [ref, setRef] = useState('');
  const [email, setEmail] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isRefValid, setIsRefValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [errorUserMessage, setErrorUserMessage] = useState('');
  const [errorRefMessage, setErrorRefMessage] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let isValid = true;

      if (!username.trim()) {
        setIsUsernameValid(false);
        setErrorUserMessage('(please enter your username)');
        isValid = false;
      } else {
        setIsUsernameValid(true);
        setErrorUserMessage('');
      }

      if (!ref.trim()) {
        setIsRefValid(false);
        setErrorRefMessage('(please enter your refcode)');
        isValid = false;
      } else {
        setIsRefValid(true);
        setErrorRefMessage('');
      }

      if (!email.trim()) {
        setIsEmailValid(false);
        setErrorEmailMessage('(please enter your email)');
        isValid = false;
      } else if (!validateEmail(email)) {
        setIsEmailValid(false);
        setErrorEmailMessage('(invalid email address)');
        isValid = false;
      } else {
        setIsEmailValid(true);
        setErrorEmailMessage('');
      }

      if (!isValid) return;

      setIsUsernameValid(true);
      setIsRefValid(true);
      setIsEmailValid(true);
      setErrorUserMessage('');
      setErrorRefMessage('');
      setErrorEmailMessage('');
    } catch (error: any) {
      // setErrorUserMessage(error.message);
      // setErrorRefMessage(error.message);
      // setErrorEmailMessage(error.message)
    }
  };

  const onCloseModal = () => {
    setIsModalEditOpen(false);
    setErrorRefMessage('');
    setErrorUserMessage('');
    setErrorEmailMessage('');
  };

  useEffect(() => {
    if (username.trim()) {
      setIsUsernameValid(true);
      setErrorUserMessage('');
      return;
    }
  }, [username]);

  useEffect(() => {
    if (ref.trim()) {
      setIsRefValid(true);
      setErrorRefMessage('');
      return;
    }
  }, [ref]);

  return (
    <Modal
      isModalOpen={isModalEditOpen}
      title="EDIT PROFILE"
      handlelCloseModal={onCloseModal}
    >
      <form className="puffins-edit" onSubmit={handleSubmit}>
        <div className="puffins-edit__inputs">
          <InputPuffin
            className="puffins-edit__input"
            value={username}
            isValueValid={isUsernameValid}
            onChange={(e) => setUsername(e.target.value)}
            label="Enter NEW Username"
            message={errorUserMessage}
          />

          <InputPuffin
            className="puffins-edit__input"
            value={ref}
            isValueValid={isRefValid}
            onChange={(e) => setRef(e.target.value)}
            label="Enter NEW Refcode"
            message={errorRefMessage}
          />

          <InputPuffin
            className="puffins-edit__input"
            value={email}
            isValueValid={isEmailValid}
            onChange={(e) => setEmail(e.target.value)}
            label="Enter NEW Email"
            message={errorEmailMessage}
          />
        </div>

        <div className="puffins-edit__btns">
          <div className="puffins-edit__btns-item">
            <ButtonPuffin variant="x" size="l" font="play-story">
              <span>CONNECT X</span>
              <X width={56} height={56} />
            </ButtonPuffin>

            <button className="puffins-edit__btns-x" type="button">
              <Cross className="puffins-edit__btns-icon" />
            </button>
          </div>

          <div className="puffins-edit__btns-item">
            <ButtonPuffin variant="discord" size="l" font="play-story">
              <span>CONNECT DISCORD</span>
              <Discord width={56} height={56} />
            </ButtonPuffin>

            <button className="puffins-edit__btns-discord" type="button">
              <Cross className="puffins-edit__btns-icon" />
            </button>
          </div>
        </div>

        <ButtonPuffin className="puffins-edit__submit" variant="img" type="submit">
          {username && ref ? (
            <img
              src="/images/btn-small-active.png"
              width={326}
              height={70}
              alt="Btn active"
            />
          ) : (
            <img
              src="/images/btn-small-disabled.png"
              width={326}
              height={70}
              alt="Btn disabled"
            />
          )}
        </ButtonPuffin>
      </form>
    </Modal>
  );
};
