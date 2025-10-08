import { Modal, ButtonPuffin, Title } from '@/shared/ui';
import { ModalCongratulationsProps } from './types';
import Xp from '@/shared/assets/svg/xp.svg?react';
import './ModalCongratulations.scss';

export const ModalCongratulations = (props: ModalCongratulationsProps) => {
  const { currentTask, isModalEditOpen, setIsModalEditOpen } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(currentTask);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Modal
      isModalOpen={isModalEditOpen}
      title="Congratulations!"
      sizeTitle="l"
      wrapperClassname="puffins-grats"
      handlelCloseModal={() => setIsModalEditOpen(false)}
    >
      <form className="puffins-grats__form" onSubmit={handleSubmit}>
        <img src="/images/stars.png" width={140} height={73} alt="Stars" />

        <Title
          className="puffins-grats__title"
          type="h3"
          weight="regular"
          font="play-story"
          variant="secondary"
        >
          Task completed
        </Title>

        <p className="puffins-grats__text">Your rewards :</p>

        <div className="puffins-grats__items">
          <div className="puffins-grats__item">
            <img src="/images/fish-coin.png" width={64} height={64} alt="Fish" />
            <span className="puffins-grats__count">+{currentTask.coins}</span>
          </div>

          <div className="puffins-grats__item">
            <Xp />
            <span className="puffins-grats__count">+{currentTask.xp}</span>
          </div>
        </div>

        <ButtonPuffin
          className="puffins-grats__btn"
          type="submit"
          variant="grats"
          weight="bold"
        >
          CLAIM
        </ButtonPuffin>
      </form>
    </Modal>
  );
};
