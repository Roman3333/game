import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { ButtonPuffin, Modal, Title } from '@/shared/ui';
import { ShareProps } from './types';
import Arrow from '@/shared/assets/svg/arrow-thin.svg?react';
import Step from '@/shared/assets/svg/step-3.svg?react';
import Copy from '@/shared/assets/svg/copy.svg?react';
import X from '@/shared/assets/svg/x-gray.svg?react';
import './Share.scss';

export const Share = (props: ShareProps) => {
  const { isAuth = true, isOpenShareModal, setIsOpenShareModal, setStep } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isSkip, setIsSkip] = useState(false);

  const navigate = useNavigate();

  const handleShare = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSkip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      isModalOpen={isOpenShareModal}
      handlelCloseModal={() => setIsOpenShareModal(false)}
      isHideBg={false}
      wrapperClassname={clsx('auth-modal auth-modal--big', {
        ['show-close-btn']: !isAuth,
      })}
    >
      <div className="auth-modal__top">
        <div className="auth-modal__left">
          {setStep && (
            <button className="auth-modal__back" onClick={() => setStep(3)}>
              <Arrow className="auth-modal__arrow" />
            </button>
          )}
          <Title type="h3" size="xs" font="montserrat" weight="medium">
            Share your Puffin Score
          </Title>
        </div>
        {isAuth && (
          <>
            {isSkip ? (
              <button className="auth-modal__skip" onClick={() => navigate('puffins')}>
                Skip
              </button>
            ) : (
              <div className="auth-modal__progress">
                <span className="auth-modal__steps">3/3</span>
                <Step />
              </div>
            )}
          </>
        )}
      </div>
      <p className="auth-modal__text">
        To share achievements, make sure you make them visible first
      </p>

      <form className="auth-modal__form" onSubmit={handleShare}>
        <div className="auth-modal__actions">
          <ButtonPuffin
            className="auth-modal__actions-btn"
            variant="copy"
            font="montserrat"
            weight="medium"
          >
            Copy image
            <Copy className="auth-modal__actions-copy" width={24} height={24} />
          </ButtonPuffin>
          <ButtonPuffin
            className="auth-modal__actions-btn"
            variant="save"
            font="montserrat"
            weight="medium"
            isLoading={isLoading}
            type="submit"
          >
            Share on X
            <X className="auth-modal__actions-x" width={19} height={22} />
          </ButtonPuffin>
        </div>
      </form>
    </Modal>
  );
};
