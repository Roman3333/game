import clsx from 'clsx';
import { TabsProps } from './types';
import './Tabs.scss';

const tabs = [
  { label: 'ALL', value: 'all' },
  { label: 'GAME-FI', value: 'game' },
  { label: 'NFTS', value: 'nfts' },
  { label: 'TOKENS', value: 'tokens' },
  { label: 'TRADING', value: 'trading' },
];

export const Tabs = (props: TabsProps) => {
  const { activeTab, setActiveTab } = props;

  return (
    <div className="eco-tabs">
      {tabs.map(({ label, value }) => (
        <div
          key={value}
          className={clsx('eco-tabs__tab', {
            ['active']: activeTab === value,
          })}
          onClick={() => setActiveTab(value)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
