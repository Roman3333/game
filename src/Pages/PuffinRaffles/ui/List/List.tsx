import { Title } from '@/shared/ui';
import { Card } from '../Card/Card';
import { CardProps } from '../Card/types';
import './List.scss';

//TODO: в images лежит тестовая картинка для bg - /images/test-bg.jpg, удалить.
export const List = () => {
  const data: CardProps[] = [
    {
      id: 1,
      time: '2025-11-12T11:11:00Z',
      img: '/images/test-bg.jpg',
      status: 'active',
      title: 'PUFFIN SQUAD ',
      text: 'Each ticket costs 25 Berry. If you want 1 ticket, just select 1 from number selection.',
      user: 'Dch_crypt',
      level: null,
      points: 2800,
    },
    {
      id: 2,
      time: '2025-11-18T14:11:00Z',
      img: '/images/test-bg.jpg',
      status: 'active',
      title: 'PUFFIN SQUAD',
      text: 'Each ticket costs 25 Berry. If you want 1 ticket, just select 1 from number selection.',
      user: 'Dch_crypt',
      level: 20,
      points: 28000,
    },
    {
      id: 3,
      time: '2025-11-12T14:11:00Z',
      img: '/images/test-bg.jpg',
      status: 'active',
      title: 'PUFFIN SQUAD',
      text: 'Each ticket costs 25 Berry.',
      user: 'Alina_beauty',
      level: null,
      points: 200,
    },
    {
      id: 4,
      time: '2025-11-17T12:11:00Z',
      img: '/images/test-bg.jpg',
      status: 'active',
      title: 'PUFFIN SQUAD PUFFIN SQUAD PUFFIN SQUAD',
      text: 'Each ticket costs 25 Berry. If you want 1 ticket, just select 1 from number selection. Each ticket costs 25 Berry. If you want 1 ticket, just select 1 from number selection. Each ticket costs 25 Berry. If you want 1 ticket, just select 1 from number selection.',
      user: 'Dch_crypt',
      level: null,
      points: 2800,
    },
    {
      id: 5,
      time: '2025-10-12T14:11:00Z',
      img: '/images/test-bg.jpg',
      status: 'ended',
      title: 'PUFFIN',
      text: 'Each ticket costs 25 Berry. If you want 1 ticket, just select 1 from number selection.',
      user: 'Murka_test',
      level: null,
      points: 8800,
    },
    {
      id: 6,
      time: '2025-10-10T14:11:00Z',
      img: '/images/test-bg.jpg',
      status: 'ended',
      title: 'PUFFIN SQUAD',
      text: 'Each ticket costs 25 Berry. If you want 1 ticket, just select 1 from number selection. Each ticket costs 25 Berry.',
      user: 'Dch_crypt',
      level: 40,
      points: 2800,
    },
  ];

  return (
    <div className="raffles">
      <Title className="raffles__title" type="h1">
        RAFFLES
      </Title>
      <p className="raffles__text">
        Something like a description. Thank you for being here!
      </p>

      <div className="raffles__list">
        {data?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
