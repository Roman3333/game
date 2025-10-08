import { useState } from 'react';
import { LeadersBoardList } from '@/Pages/PuffinsGame';
import { Info } from '../Info/Info';
import { Tabs } from '../Tabs/Tabs';
import { All } from '../All/All';
import { Game } from '../Game/Game';
import { Nfts } from '../Nfts/Nfts';
import { Tokens } from '../Tokens/Tokens';
import { Trading } from '../Trading/Trading';
import './AbstractEco.scss';

export const AbstractEco = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="section-puffins section-eco__game">
      <div className="container-puffins">
        <div id="eco" className="eco-wrapper">
          <div className="eco-wrapper__left">
            <Info />

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'all' && <All />}

            {activeTab === 'game' && <Game />}

            {activeTab === 'nfts' && <Nfts />}

            {activeTab === 'tokens' && <Tokens />}

            {activeTab === 'trading' && <Trading />}
          </div>

          <div className="eco-wrapper__right">
            <LeadersBoardList />
          </div>
        </div>
      </div>
    </section>
  );
};
