import { useState } from 'react';
import { ButtonPuffin, Modal, Title } from '@/shared/ui';
import { GenerateProps } from './types';
import Arrow from '@/shared/assets/svg/arrow-thin.svg?react';
import Step from '@/shared/assets/svg/step-2.svg?react';
import Generation from '@/shared/assets/svg/generate.svg?react';
import './Generate.scss';

export const Generate = ({ setStep }: GenerateProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setStep(4);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //TODO:тестовый массив и аватарки, убрать
  const testBadges = Array.from({ length: 29 }, () => ({
    src: '/images/avatar-share.png',
  }));

  return (
    <Modal
      isModalOpen={true}
      isHideBg={false}
      wrapperClassname="auth-modal auth-modal--big"
    >
      <div className="auth-modal__top">
        <div className="auth-modal__left">
          <button className="auth-modal__back" onClick={() => setStep(2)}>
            <Arrow className="auth-modal__arrow" />
          </button>
          <Title type="h3" size="xs" font="montserrat" weight="medium">
            Generate your Score
          </Title>
        </div>
        <div className="auth-modal__progress">
          <span className="auth-modal__steps">2/3</span>
          <Step />
        </div>
      </div>
      <p className="auth-modal__text">
        To share achievements, make sure you make them visible first
      </p>

      <form onSubmit={handleSubmit}>
        <div className="auth-modal__share">
          <div className="auth-modal__card">
            <div className="auth-modal__score">
              <img
                src={'/images/avatar-share.png'}
                width={252}
                height={252}
                alt="Your avatar"
                className="auth-modal__avatar"
              />

              <div className="auth-modal__centr">
                <div className="auth-modal__centr-name">{'Dch_crypt'}</div>
                <div className="auth-modal__centr-rang">{'???'}</div>
                <div className="auth-modal__centr-item">
                  <span className="auth-modal__centr-opacity">ABS Wallet Score :</span>
                  <span className="auth-modal__centr-number">{'???'}</span>
                </div>
                <div className="auth-modal__centr-item">
                  <span className="auth-modal__centr-opacity">X Score :</span>
                  <span className="auth-modal__centr-number">{'???'}</span>
                </div>
                <div className="auth-modal__centr-item">
                  <span className="auth-modal__centr-opacity">ABS Posts :</span>
                  <span className="auth-modal__centr-number">{'???'}</span>
                </div>
              </div>

              <div className="auth-modal__right">
                <div className="auth-modal__right-text">ABSTRACT SCORE</div>
                <div className="auth-modal__right-count">{'???'}</div>
              </div>
            </div>

            {testBadges && testBadges.length && (
              <div className="auth-modal__badges">
                <div className="auth-modal__badges-text">{`ABSTRACT BADGES ${testBadges.length}/36 `}</div>
                <div className="auth-modal__badges-list">
                  {testBadges.map((item, index) => (
                    <img
                      key={index}
                      src={item.src}
                      width={64}
                      height={64}
                      alt="Badge"
                      className="auth-modal__badge"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <Title className="auth-modal__title" weight="regular" font="bowlby">
            #PUFFINS
          </Title>
        </div>

        <ButtonPuffin
          className="auth-modal__btn"
          variant="save"
          type="submit"
          font="montserrat"
          weight="semibold"
          isLoading={isLoading}
        >
          <Generation />
          <span>Generate</span>
        </ButtonPuffin>
      </form>
    </Modal>
  );
};
