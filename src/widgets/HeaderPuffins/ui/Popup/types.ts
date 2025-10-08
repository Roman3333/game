import { RefObject } from 'react';

export interface PopupProps {
  wrapperRef: RefObject<any>;
  isOpenPopup: boolean;
  setIsOpenPopup: (isOpenPopup: boolean) => void;
}
