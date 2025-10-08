import { useState } from 'react';
import { Share } from '@/Pages/Auth';
import { useModalStyles } from '../../hooks/useModalStyles';
import { ModalScore } from '../ModalScore/ModalScore';
import Link from '@/shared/assets/svg/link.svg?react';
import X from '@/shared/assets/svg/x-gray.svg?react';
import './Info.scss';

export const Info = () => {
  const [isModalScoreOpen, setIsModalScoreOpen] = useState(false);
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

  useModalStyles(isModalScoreOpen || isModalInfoOpen);

  return (
    <div id="eco" className="eco">
      <div className="eco__top">
        <img
          src={'/images/avatar-info.jpg'}
          width={136}
          height={136}
          alt="Avatar"
          className="eco__avatar"
        />

        <div className="eco__centr">
          <div className="eco__info">
            <span className="eco__name">{'SHIMKEY'}</span>
            <a
              className="eco__link"
              href={'http://x.com'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <X width={19} height={22} />
            </a>

            <div className="eco__medals">
              {true && <div className="eco__medal eco__medal--nft">NFT Holder</div>}

              {true && <div className="eco__medal eco__medal--partner">Partner</div>}

              {true && <div className="eco__medal eco__medal--og">OG</div>}
            </div>
          </div>
          <div className="eco__founder">{'Founder'}</div>
          <span className="eco__hash">{'0x12…34'}</span>
        </div>

        <div className="eco__right">
          <span className="eco__abstract">ABSTRACT SCORE</span>
          <span className="eco__count">{8421}</span>
        </div>
      </div>

      <div className="eco__bottom">
        <div />

        <button className="eco__more" onClick={() => setIsModalInfoOpen(true)}>
          Show more info
        </button>

        <button className="eco__score" onClick={() => setIsModalScoreOpen(true)}>
          <Link className="eco__link" />
          Share score card
        </button>
      </div>

      <ModalScore
        isModalScoreOpen={isModalScoreOpen}
        setIsModalScoreOpen={setIsModalScoreOpen}
      />

      <Share
        isAuth={false}
        isOpenShareModal={isModalInfoOpen}
        setIsOpenShareModal={setIsModalInfoOpen}
      />
    </div>
  );
};
