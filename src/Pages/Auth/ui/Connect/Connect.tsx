import { ButtonPuffin } from '@/shared/ui';
import { ConnectProps } from './types';

export const Connect = ({ setStep }: ConnectProps) => {
  return (
    <ButtonPuffin variant="img" size="l" onClick={() => setStep(2)}>
      <img src="/images/btn-big.png" width={530} height={319} alt="Btn" />
    </ButtonPuffin>
  );
};
