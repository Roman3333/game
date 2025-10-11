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

      <form onSubmit={handleShare}>
        <div className="auth-modal__share">
          <div className="auth-modal__card">
            <div className="auth-modal__score">
              <img
                src={'/images/avatar-score.png'}
                width={140}
                height={140}
                alt="Your avatar"
                className="auth-modal__avatar"
              />

              <div className="auth-modal__score-centr">
                <span className="auth-modal__score-name">{'Dch_crypt'}</span>
                <span className="auth-modal__score-rang">Founder</span>
                <div className="auth-modal__score-items">
                  <div className="auth-modal__score-item">
                    <span className="auth-modal__score-opacity">Transactions:</span>
                    <span className="auth-modal__score-value">123</span>
                  </div>
                  <div className="auth-modal__score-item">
                    <span className="auth-modal__score-opacity">Active days/weeks:</span>
                    <span className="auth-modal__score-value">544</span>
                  </div>
                  <div className="auth-modal__score-item">
                    <span className="auth-modal__score-opacity">
                      Posts about abstract:
                    </span>
                    <span className="auth-modal__score-value">12</span>
                  </div>
                </div>
              </div>

              <div className="auth-modal__score-right">
                <span className="auth-modal__score-abs">ABSTRACT SCORE</span>
                <span className="auth-modal__score-count">8421</span>
              </div>
            </div>

            <div className="auth-modal__images">
              <div className="auth-modal__images-parrots">
                {/* //TODO: возможно тут alt для img нужен другой, я хз. Не понял это
                статичные картинки или их нужно отрисовывать по условию с бека. */}
                <img
                  src={'/images/parrot-1.png'}
                  width={36}
                  height={36}
                  alt="Parrot"
                  className="auth-modal__images-parrot"
                />
                <img
                  src={'/images/parrot-2.png'}
                  width={36}
                  height={36}
                  alt="Parrot"
                  className="auth-modal__images-parrot"
                />
                <img
                  src={'/images/parrot-3.png'}
                  width={36}
                  height={36}
                  alt="Parrot"
                  className="auth-modal__images-parrot"
                />
                <img
                  src={'/images/parrot-4.png'}
                  width={36}
                  height={36}
                  alt="Parrot"
                  className="auth-modal__images-parrot"
                />
                <img
                  src={'/images/parrot-5.png'}
                  width={36}
                  height={36}
                  alt="Parrot"
                  className="auth-modal__images-parrot"
                />
              </div>

              <img
                src={'/images/qr.png'}
                width={52}
                height={52}
                alt="QR code"
                className="auth-modal__images-qr"
              />
            </div>
          </div>

          <Title className="auth-modal__title" weight="regular" font="bowlby">
            #PUFFINS
          </Title>
        </div>

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
