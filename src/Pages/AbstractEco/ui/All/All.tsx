import { EkoItem } from '../EkoItem/EkoItem';
import './All.scss';

export const data = [
  {
    id: 1,
    img: '/images/default-img.jpg',
    title: 'Fugz',
    text: 'Go to the website and stake your Puffin for 30+ days',
    isVerified: true,
    isParrot: true,
    ship: 'https://www.google.com',
    x: 'https://www.google.com',
    link: 'https://www.google.com',
  },
  {
    id: 2,
    img: '/images/default-img.jpg',
    title: 'Fugz',
    text: 'Go to the website and stake your Puffin for 30+ days',
    isVerified: true,
    isParrot: true,
    ship: 'https://www.google.com',
    x: 'https://www.google.com',
    link: 'https://www.google.com',
  },
  {
    id: 3,
    img: '/images/default-img.jpg',
    title: 'Fugz faff',
    text: 'Go to the website and stake your Puffin for 30+ days fwqfqfqfqf fqfqf fqfq',
    isVerified: false,
    isParrot: false,
    ship: 'https://www.google.com',
    x: 'https://www.google.com',
    link: 'https://www.google.com',
  },
  {
    id: 4,
    img: '/images/default-img.jpg',
    title: 'Fugzss',
    text: 'Go to the website and stake your Puffin for 30+ days',
    isVerified: false,
    isParrot: false,
    ship: 'https://www.google.com',
    x: 'https://www.google.com',
    link: 'https://www.google.com',
  },
  {
    id: 5,
    img: '/images/default-img.jpg',
    title: 'Fugzs',
    text: 'Go to the website and stake your Puffin for 30+ days',
    isVerified: true,
    isParrot: false,
    ship: 'https://www.google.com',
    x: 'https://www.google.com',
    link: 'https://www.google.com',
  },
  {
    id: 6,
    img: '/images/default-img.jpg',
    title: 'Fugz',
    text: 'Go to the website and stake your Puffin for 30+ days Go to the website and stake your Puffin for 30+ days Go to the website and stake your Puffin for 30+ days',
    isVerified: false,
    isParrot: true,
    ship: 'https://www.google.com',
    x: 'https://www.google.com',
    link: 'https://www.google.com',
  },
];

export const All = () => {
  return (
    <div className="eco-list">
      {data.map((item) => (
        <EkoItem key={item.id} {...item} />
      ))}
    </div>
  );
};
