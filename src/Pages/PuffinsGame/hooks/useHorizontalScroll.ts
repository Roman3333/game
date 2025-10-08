import { useRef } from 'react';

/**
 * Разрешает скролл элементов колесиком мышки/перетаскиванием.
 */
export const useHorizontalScroll = <T extends HTMLElement>() => {
  const scrollRef = useRef<T>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    el.dataset.mouseDownAt = e.pageX.toString();
    el.dataset.scrollLeft = el.scrollLeft.toString();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || !el.dataset.mouseDownAt) return;
    const diff = e.pageX - Number(el.dataset.mouseDownAt);
    el.scrollLeft = Number(el.dataset.scrollLeft) - diff;
  };

  const onMouseUp = () => {
    const el = scrollRef.current;
    if (!el) return;
    delete el.dataset.mouseDownAt;
  };

  const onWheel = (e: React.WheelEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft += e.deltaY;
  };

  return { scrollRef, onMouseDown, onMouseMove, onMouseUp, onWheel };
};
