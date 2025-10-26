import { List } from '../List/List';
import './PuffinRaffles.scss';

export const PuffinRaffles = () => {
  return (
    <section className="section-puffins section-raffles__game">
      <div className="container-puffins">
        <List />
      </div>
    </section>
  );
};
