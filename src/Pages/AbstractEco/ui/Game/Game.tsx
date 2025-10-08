import { data } from '../All/All';
import { EkoItem } from '../EkoItem/EkoItem';
import '../All/All.scss';

export const Game = () => {
  return (
    <div className="eco-list">
      {data.map((item) => (
        <EkoItem key={item.id} {...item} />
      ))}
    </div>
  );
};
