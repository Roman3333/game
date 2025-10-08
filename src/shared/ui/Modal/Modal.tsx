import ReactModal from 'react-modal';
import clsx from 'clsx';
import { Title } from '../Title/Title';
import { ModalProps } from './types';
import Cross from '@/shared/assets/svg/cross.svg?react';
import './Modal.scss';

export const Modal = (props: ModalProps) => {
  const {
    children,
    isModalOpen,
    handlelCloseModal,
    title,
    sizeTitle = 'xl',
    overlayVariant = 'default',
    isHideBg = true,
    className,
    wrapperClassname,
  } = props;

  return (
    <ReactModal
      isOpen={isModalOpen}
      shouldCloseOnEsc
      contentLabel={title}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handlelCloseModal}
      ariaHideApp={false}
      className={clsx('puffins-modal', wrapperClassname)}
      overlayClassName={clsx(
        'ReactModal__Overlay',
        isHideBg && 'fide-bg',
        overlayVariant === 'light' && 'light-blur'
      )}
    >
      <div className={clsx('puffins-modal__top', sizeTitle)}>
        {title && (
          <Title
            className={clsx('puffins-modal__title', className)}
            type="h3"
            size={sizeTitle}
          >
            {title}
          </Title>
        )}

        <button className="puffins-modal__btn" onClick={handlelCloseModal}>
          <Cross className="puffins-modal__cross" />
        </button>
      </div>

      {children}
    </ReactModal>
  );
};

Modal.displayName = 'Modal';
