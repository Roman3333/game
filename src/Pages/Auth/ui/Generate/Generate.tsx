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

      <form className="auth-modal__form" onSubmit={handleSubmit}>
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
