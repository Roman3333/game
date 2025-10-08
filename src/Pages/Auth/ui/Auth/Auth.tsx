import { useState } from 'react';
import { Connect } from '../Connect/Connect';
import { Edit } from '../Edit/Edit';
import { Generate } from '../Generate/Generate';
import { Share } from '../Share/Share';
import './Auth.scss';

export const Auth = () => {
  const [step, setStep] = useState(1);
  const [isOpenShareModal, setIsOpenShareModal] = useState(true);

  return (
    <section className="section-puffins section-puffins__bg">
      <div className="container-puffins">
        <div className="container-puffins__wrapper">
          {step === 1 && <Connect setStep={setStep} />}

          {step === 2 && <Edit setStep={setStep} />}

          {step === 3 && <Generate setStep={setStep} />}

          {step === 4 && (
            <Share
              setStep={setStep}
              isOpenShareModal={isOpenShareModal}
              setIsOpenShareModal={setIsOpenShareModal}
            />
          )}
        </div>
      </div>
    </section>
  );
};
