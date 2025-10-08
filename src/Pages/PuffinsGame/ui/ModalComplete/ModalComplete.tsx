import { useState } from 'react';
import { Modal, ButtonPuffin, CheckboxPuffin, Title } from '@/shared/ui';
import clsx from 'clsx';
import { ModalCompleteProps } from './types';
import './ModalComplete.scss';

export const ModalComplete = (props: ModalCompleteProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      title: 'Step 1: Connect Twitter',
      text: 'Link your Twitter account to get started',
    },
    {
      title: 'Step 2: Connect to Drip',
      text: 'Link your Twitter account with Drip to access your points.',
      button: (
        <ButtonPuffin
          className="complete-puffins__btn"
          weight="bold"
          variant="drip"
          disabled={activeStep !== 1}
        >
          CONNECT TO DRIP
        </ButtonPuffin>
      ),
    },
    {
      title: 'Complete!',
      text: 'Your account is fully set up. You now have access to our app.',
    },
  ];

  const handleStepChange = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      handlelCloseModal={() => setIsModalOpen(false)}
      title="Complete Your Account Setup"
      sizeTitle="l"
    >
      <form className="complete-puffins">
        {steps.map((step, index) => {
          const stepIndex = index + 1;
          const checked = activeStep >= stepIndex;
          const isActive = activeStep + 1 === stepIndex;

          return (
            <div
              key={stepIndex}
              className={clsx('complete-puffins__item', {
                active: isActive,
              })}
            >
              <CheckboxPuffin
                className="complete-puffins__checkbox"
                disabled
                checked={checked}
                variant="m"
                onCheckedChange={() => handleStepChange(stepIndex)}
              />

              <div className="complete-puffins__right">
                <Title type="h3" weight="regular" variant="secondary" font="play-story">
                  {step.title}
                </Title>
                <p className="complete-puffins__text">{step.text}</p>
                {step.button}
              </div>
            </div>
          );
        })}

        <ButtonPuffin
          className="complete-puffins__btn"
          variant="img"
          type="submit"
          disabled={activeStep !== 3}
        >
          {activeStep === 3 ? (
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
