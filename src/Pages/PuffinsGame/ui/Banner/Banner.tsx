import { Link } from 'react-router-dom';
import { Title, ButtonPuffin } from '@/shared/ui';
import './Banner.scss';

export const Banner = () => {
  return (
    <div className="puffin-banner">
      <Title size="m" font="montserrat">
        Puffin Rush
      </Title>

      <p className="puffin-banner__text">Will you manage to land?</p>

      <Link to="/rush" className="puffin-banner__link">
        <ButtonPuffin size="m" variant="join">
          LETS GOOOOOOO
        </ButtonPuffin>
      </Link>
    </div>
  );
};
