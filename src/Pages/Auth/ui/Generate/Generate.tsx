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
                src={'/images/avatar-score.png'}
                width={140}
                height={140}
                alt="Your avatar"
                className="auth-modal__avatar"
              />

              <div className="auth-modal__score-centr">
                <span className="auth-modal__score-name">{'Dch_crypt'}</span>
                <span className="auth-modal__score-rang">???</span>
                <div className="auth-modal__score-items">
                  <div className="auth-modal__score-item">
                    <span className="auth-modal__score-opacity">Transactions:</span>
                    <span className="auth-modal__score-value">???</span>
                  </div>
                  <div className="auth-modal__score-item">
                    <span className="auth-modal__score-opacity">Active days/weeks:</span>
                    <span className="auth-modal__score-value">???</span>
                  </div>
                  <div className="auth-modal__score-item">
                    <span className="auth-modal__score-opacity">
                      Posts about abstract:
                    </span>
                    <span className="auth-modal__score-value">???</span>
                  </div>
                </div>
              </div>

              <div className="auth-modal__score-right">
                <span className="auth-modal__score-abs">ABSTRACT SCORE</span>
                <span className="auth-modal__score-count">???</span>
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
