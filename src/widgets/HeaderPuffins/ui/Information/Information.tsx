import { useState, useRef } from 'react';
import { getProgressGradient } from '../../utils/getProgressGradient';
import { Popup } from '../Popup/Popup';
import './Information.scss';

export const Information = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const wrapperRef = useRef(null);
  const percent = 80;

  return (
    <div className="puffins-information">
      <div className="puffins-information__left">
        <div className="puffins-information__fish">
          <img src="/images/fish-coin.png" width={28} height={28} alt="Avatar" />
        </div>
        <div className="puffins-information__count">{'2800'}</div>
      </div>

      <div
        ref={wrapperRef}
        className="puffins-information__right"
        onClick={() => setIsOpenPopup(!isOpenPopup)}
      >
        <img
          src="/images/avatar-header.png"
          width={64}
          height={68}
          alt="Avatar"
          className="puffins-information__avatar"
        />

        <div className="puffins-information__wrapper">
          <span className="puffins-information__name">{'Dmitry CH'}</span>

          <div className="puffins-information__lvl">
            <span className="puffins-information__number">{'12'}</span>
            <div
              className="puffins-information__line"
              style={{ background: getProgressGradient(percent) }}
            ></div>
          </div>
        </div>
      </div>

      <Popup
        wrapperRef={wrapperRef}
        isOpenPopup={isOpenPopup}
        setIsOpenPopup={setIsOpenPopup}
      />
    </div>
  );
};
