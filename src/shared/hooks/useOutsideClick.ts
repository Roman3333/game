import { useEffect, RefObject } from 'react';

/**
 * Выполняет коллбэк при клике за пределами указанного элемента.
 * Исключает элементы, указанные в `excludeRefs`.
 */
export const useOutsideClick = (
  ref: RefObject<any>,
  callback: () => unknown,
  excludeRefs: RefObject<any>[] = []
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isExcluded = excludeRefs.some((excludeRef) =>
        excludeRef.current?.contains(event.target as Node)
      );

      if (!ref?.current?.contains(event.target as Node) && !isExcluded) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, excludeRefs]);
};
