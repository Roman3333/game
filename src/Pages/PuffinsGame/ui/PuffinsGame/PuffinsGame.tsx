import { Banner } from '../Banner/Banner';
import { Soon } from '../Soon/Soon';
import { IncompleteAccount } from '../IncompleteAccount/IncompleteAccount';
import { TasksList } from '../TasksList/TasksList';
import { LeadersBoardList } from '../LeadersBoardList/LeadersBoardList';
import './PuffinsGame.scss';

export const PuffinsGame = () => {
  return (
    <section className="section-puffins section-puffins__game">
      <div className="container-puffins">
        <div className="puffins-wrapper">
          <div id="puffins-left" className="puffins-wrapper__left">
            <Banner />

            <IncompleteAccount />

            <TasksList />
          </div>

          <div id="puffins-right" className="puffins-wrapper__right">
            <Soon />

            <LeadersBoardList />
          </div>
        </div>
      </div>
    </section>
  );
};
