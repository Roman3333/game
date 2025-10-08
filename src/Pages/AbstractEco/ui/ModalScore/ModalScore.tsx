import { Modal, ButtonPuffin, Title } from '@/shared/ui';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { ModalScoreProps } from './types';
import Arrow from '@/shared/assets/svg/arrow-double.svg?react';
import X from '@/shared/assets/svg/x-gray.svg?react';
import './ModalScore.scss';

//TODO:убрать фейк дату
const data = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  img: '/images/monkey.jpg',
}));
const date = [
  { date: 'Jul 10', score: 2500 },
  { date: 'Jul 15', score: 5500 },
  { date: 'Jul 20', score: 6800 },
  { date: 'Jul 25', score: 7499 },
  { date: 'Jul 30', score: 8421 },
];

export const ModalScore = (props: ModalScoreProps) => {
  const { isModalScoreOpen, setIsModalScoreOpen } = props;

  return (
    <Modal
      isModalOpen={isModalScoreOpen}
      handlelCloseModal={() => setIsModalScoreOpen(false)}
      wrapperClassname="score-modal"
      overlayVariant="light"
    >
      <div className="score-modal__top">
        <img
          src={'/images/avatar-score.png'}
          width={136}
          height={136}
          alt="Avatar"
          className="score-modal__avatar"
        />
        <div className="score-modal__info">
          <div className="score-modal__info-top">
            <div className="score-modal__info-name">{'Dch_crypt'}</div>
            <a
              href={'https://www.twitch.tv/nomadi_'}
              target="_blank"
              rel="noopener noreferrer"
              className="score-modal__link"
            >
              <X width={24} height={22} />
            </a>
          </div>
          <div className="score-modal__rang">{'Founder'}</div>
          <div className="score-modal__dates">
            <span className="score-modal__reg">Registered</span>
            <span className="score-modal__date">{'Jul 25, 2025'}</span>
          </div>
        </div>
      </div>

      <div className="score-modal__abstract">
        <Title className="score-modal__title" size="xs" weight="regular">
          ABSTRACT SCORE
        </Title>
        <ButtonPuffin variant="score" isLoading={true}>
          <Arrow />
        </ButtonPuffin>
      </div>

      <ResponsiveContainer width="100%" height={246}>
        <AreaChart data={date}>
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00B2FF" stopOpacity={0.6} />
              <stop offset="50%" stopColor="#00B2FF" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#00B2FF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Tooltip
            cursor={{ stroke: '#DEDEDE', strokeWidth: 1, strokeDasharray: '6 4' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { date, score } = payload[0].payload;
                return (
                  <div
                    style={{
                      background: 'white',
                      padding: '4px 6px',
                      borderRadius: 12,
                      color: '#212121',
                      fontSize: 12,
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        marginBottom: '2px',
                        fontWeight: 600,
                        fontFamily: '"Montserrat", sans-serif',
                      }}
                    >
                      {score}
                    </div>
                    <div style={{ fontFamily: '"Montserrat", sans-serif' }}>{date}</div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="score"
            stroke="#22D1EE66"
            strokeWidth={2}
            fill="url(#colorScore)"
            dot={{
              r: 7,
              fill: '#22D1EE',
              strokeWidth: 2,
              fillOpacity: 1,
              stroke: 'white',
            }}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="score-modal__score">
        <div className="score-modal__score-score">{'8421'}</div>
        <div className="score-modal__score-text">
          <span>At registration: </span>
          <span>{'672'}</span>
        </div>
      </div>

      <div className="score-modal__botom">
        <div className="score-modal__wallet">
          <Title type="h3" size="xs" weight="regular">
            Wallet
          </Title>
          <div className="score-modal__wallet-score">
            <span className="score-modal__wallet-span">Wallet Score :</span>
            <span className="score-modal__wallet-span">{'172'}</span>
          </div>
          <div className="score-modal__table">
            <div className="score-modal__column">
              <div className="score-modal__column-item">
                <span className="score-modal__column-opacity">Balance :</span>
                <span className="score-modal__column-number">{`${72} $`}</span>
              </div>
              <div className="score-modal__column-item">
                <span className="score-modal__column-opacity">Active Days :</span>
                <span className="score-modal__column-number">{72}</span>
              </div>
            </div>
            <div className="score-modal__column">
              <div className="score-modal__column-item">
                <span className="score-modal__column-opacity">Transactions :</span>
                <span className="score-modal__column-number">{122}</span>
              </div>
              <div className="score-modal__column-item">
                <span className="score-modal__column-opacity">Active Weeks :</span>
                <span className="score-modal__column-number">{122}</span>
              </div>
            </div>
          </div>
          <div className="score-modal__column-opacity">NFT Holder :</div>
          <div className="score-modal__colors">
            <div className="score-modal__color blue"></div>
            <div className="score-modal__color orange"></div>
            <div className="score-modal__color purple"></div>
          </div>
        </div>

        <div className="score-modal__followers">
          <Title type="h3" size="xs" weight="regular">
            Top 20 followers
          </Title>
          <div className="score-modal__users">
            {data.map(({ id, img }) => (
              <img
                key={id}
                src={img}
                width={40}
                height={40}
                alt="User"
                className="score-modal__user"
              />
            ))}
          </div>
          <div className="score-modal__stats">
            <div className="score-modal__column-item">
              <span className="score-modal__column-opacity">Followers</span>
              <span className="score-modal__column-number">{`${6.1}k`}</span>
            </div>
            <div className="score-modal__column-item">
              <span className="score-modal__column-opacity">Following :</span>
              <span className="score-modal__column-number">{533}</span>
            </div>
            <div className="score-modal__column-item">
              <span className="score-modal__column-opacity">Account age :</span>
              <span className="score-modal__column-number">{`${2} Years`}</span>
            </div>
            <div className="score-modal__column-item">
              <span className="score-modal__column-opacity">Account Score :</span>
              <span className="score-modal__column-number">{72}</span>
            </div>
            <div className="score-modal__column-item">
              <span className="score-modal__column-opacity">Top Followers :</span>
              <span className="score-modal__column-number">{`${12} / ${20}`}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="score-modal__bages">
        <Title type="h3" size="xs" weight="regular">
          BAGES
        </Title>
        <div className="score-modal__bages-images">
          {true && (
            <img
              src="/images/nft-holder.png"
              width={145}
              height={139}
              alt="NFT Holder bage"
              className="score-modal__bages-image"
            />
          )}
          {true && (
            <img
              src="/images/partner.png"
              width={145}
              height={139}
              alt="Partner bage"
              className="score-modal__bages-image"
            />
          )}
          {true && (
            <img
              src="/images/og.png"
              width={145}
              height={139}
              alt="OG bage"
              className="score-modal__bages-image"
            />
          )}
        </div>
      </div>

      <div className="score-modal__footer">
        <div className="score-modal__puffins">
          <div className="score-modal__puffins-left">PUFFINS</div>
          <div className="score-modal__column-opacity">Abstract Score System</div>
        </div>
        <div className="score-modal__update">
          <div className="score-modal__update-left">Last updated :</div>
          <div className="score-modal__update-right">{'3 min ago'}</div>
        </div>
      </div>
    </Modal>
  );
};
