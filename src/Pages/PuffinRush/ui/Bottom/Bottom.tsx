import { useState } from 'react';
import clsx from 'clsx';
import { ButtonPuffin, InputPuffin } from '@/shared/ui';
import { ModalWin } from '../ModalWin/ModalWin';
import Turtle from '@/shared/assets/svg/turtle.svg?react';
import Parrot from '@/shared/assets/svg/parrot.svg?react';
import Hair from '@/shared/assets/svg/hair.svg?react';
import Lightning from '@/shared/assets/svg/lightning.svg?react';
import Ethereum from '@/shared/assets/svg/ethereum.svg?react';
import Wallet from '@/shared/assets/svg/wallet.svg?react';
import './Bottom.scss';

const tabs = [
  {
    value: 'turtle',
    Icon: Turtle,
  },
  {
    value: 'parrot',
    Icon: Parrot,
  },
  {
    value: 'hair',
    Icon: Hair,
  },
  {
    value: 'lightning',
    Icon: Lightning,
  },
];
const bets = [
  { label: '.0005', value: '0005' },
  { label: '.0025', value: '0025' },
  { label: '.01', value: '01' },
  { label: '.02', value: '02' },
];

export const Bottom = () => {
  const [activeTab, setActiveTab] = useState('hair');
  const [bet, setBet] = useState('0005');
  const [isCustom, setIsCustom] = useState(false);
  const [customSum, setCustomSum] = useState('0.5');
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  //TODO: убрать
  const user = {
    name: 'Vlad',
    balans: 0.0175,
  };

  const handleStart = async () => {
    if (isCustom && !customSum.trim()) {
      setErrorMessage('Please enter your custom bet');
      return;
    }

    setErrorMessage('');

    const form = {
      animal: activeTab,
      sum: isCustom ? customSum : bet,
    };

    try {
      console.log(form);
      setIsOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rush-bottom">
      <div className="rush-bottom__left">
        <div className="rush-bottom__left-item">
          <span className="rush-bottom__left-text">ALTITUDE</span>
          <span className="rush-bottom__left-count">{`${0.0}m`}</span>
        </div>

        <div className="rush-bottom__left-item">
          <span className="rush-bottom__left-text">DISTANCE</span>
          <span className="rush-bottom__left-count">{`${0.0}m`}</span>
        </div>

        <div className="rush-bottom__left-item">
          <span className="rush-bottom__left-text">MULTIPLIER</span>
          <span className="rush-bottom__left-count">{`×${6.6}`}</span>
        </div>
      </div>

      <ButtonPuffin
        className="rush-bottom__start"
        font="play-story"
        onClick={handleStart}
        variant="start"
      >
        START
      </ButtonPuffin>

      <div className="rush-bottom__right">
        <div className="rush-bottom__right-tabs">
          {tabs.map(({ value, Icon }) => (
            <div
              key={value}
              className={clsx('rush-bottom__right-tab', {
                ['active']: value === activeTab,
              })}
              onClick={() => setActiveTab(value)}
            >
              <Icon />
            </div>
          ))}
        </div>

        <div className="rush-bottom__right-wrapper">
          <span className="rush-bottom__right-span">BET</span>

          {isCustom ? (
            <InputPuffin
              value={customSum}
              onChange={(e) => {
                let val = e.target.value;
                val = val.replace(/[^0-9.]/g, '');
                const parts = val.split('.');

                if (parts.length > 2) {
                  val = parts[0] + '.' + parts.slice(1).join('');
                }

                setCustomSum(val);
              }}
              onClickBtn={() => setIsCustom(false)}
              variant="secondary"
              fontSize="s"
              message={errorMessage}
            />
          ) : (
            <div className="rush-bottom__right-bets">
              {bets.map(({ value, label }) => (
                <div
                  key={value}
                  className={clsx('rush-bottom__right-bet', {
                    ['active']: value === bet,
                  })}
                  onClick={() => setBet(value)}
                >
                  {label}
                </div>
              ))}
            </div>
          )}

          <div className="rush-bottom__right-eth">
            <Wallet />

            <Ethereum />

            <span className="rush-bottom__right-count">{`${user.balans} ETH`}</span>

            <button
              className={clsx('rush-bottom__right-btn', {
                ['active']: isCustom,
              })}
              onClick={() => setIsCustom(!isCustom)}
            >
              CUSTOM BET
            </button>
          </div>
        </div>
      </div>

      <ModalWin isModalOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />

      <div
        className={clsx('header-rush__blur', {
          ['active']: isOpenModal,
        })}
        onClick={() => setIsOpenModal(false)}
      ></div>
    </div>
  );
};
