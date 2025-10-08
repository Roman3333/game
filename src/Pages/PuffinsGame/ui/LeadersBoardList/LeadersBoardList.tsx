import { Title } from '@/shared/ui';
import './LeadersBoardList.scss';
import { LeaderBoardItem } from '../LeaderBoardItem/LeaderBoardItem';

const titles = ['RANK', 'NAME', 'COINS'];
const items = [
  {
    id: 1,
    rank: 55,
    avatar: '/images/avatar-card.png',
    name: 'Dmidtry Chaffy',
    lvl: 5,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 20000,
  },
  {
    id: 2,
    rank: 1,
    avatar: '/images/avatar-card.png',
    name: 'Dmidtry Chaffy',
    lvl: 12,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 10000,
  },
  {
    id: 3,
    rank: 2,
    avatar: '/images/avatar-card.png',
    name: 'Dmidtry Chaffy',
    lvl: 12,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 10000,
  },
  {
    id: 4,
    rank: 3,
    avatar: '/images/avatar-card.png',
    name: 'dmitdry chgg',
    lvl: 12,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 1000,
  },
  {
    id: 5,
    rank: 6,
    avatar: '/images/avatar-card.png',
    name: 'dmitdry chgg',
    lvl: 12,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 1000,
  },
  {
    id: 6,
    rank: 12,
    avatar: '/images/avatar-card.png',
    name: 'dmitdfry chgg',
    lvl: 12,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 880,
  },
  {
    id: 7,
    rank: 11,
    avatar: '/images/avatar-card.png',
    name: 'dmitdfry chgg',
    lvl: 12,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 10,
  },
  {
    id: 8,
    rank: 12,
    avatar: '/images/avatar-card.png',
    name: 'dmitdfry ffastetwevevw',
    lvl: 16,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 55000,
  },
  {
    id: 9,
    rank: 11,
    avatar: '/images/avatar-card.png',
    name: 'dmitdfry chgg',
    lvl: 15,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 10000,
  },
  {
    id: 10,
    rank: 23,
    avatar: '/images/avatar-card.png',
    name: 'dmitdfry chgg',
    lvl: 12,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 10,
  },
  {
    id: 11,
    rank: 53,
    avatar: '/images/avatar-card.png',
    name: 'dmitdfry ffastetwevevw',
    lvl: 16,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 5000,
  },
  {
    id: 12,
    rank: 15,
    avatar: '/images/avatar-card.png',
    name: 'dmitdfry chgg',
    lvl: 15,
    link: 'https://www.youtube.com/watch?v=o_1aF54DO60',
    coins: 30000,
  },
];

export const LeadersBoardList = () => {
  return (
    <div id="puffins-leaderboards" className="puffins-leaderboards">
      <div className="puffins-leaderboards__top">
        <Title size="x">LEADERBOARD</Title>
      </div>

      <div className="puffins-leaderboards__suptitles">
        {titles.map((item) => (
          <Title key={item} type="h3" size="xs">
            {item}
          </Title>
        ))}
      </div>

      <div>
        {items.map((item) => (
          <LeaderBoardItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
