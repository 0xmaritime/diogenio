import { useEffect, useRef } from 'react';

export function useScrollLock(lock: boolean) {
  const scrollYRef = useRef<number>(0);

  useEffect(() => {
    const bodyStyle = document.body.style;

    // Store original styles to restore them correctly
    const originalOverflow = bodyStyle.overflow;
    const originalTouchAction = bodyStyle.touchAction;
    const originalOverscrollBehavior = bodyStyle.overscrollBehavior;
    const originalPosition = bodyStyle.position;
    const originalTop = bodyStyle.top;
    const originalWidth = bodyStyle.width;

    if (lock) {
      scrollYRef.current = window.scrollY; // Capture current scroll position before applying styles

      bodyStyle.overflow = 'hidden';
      bodyStyle.touchAction = 'none'; // Prevent touch scrolling on touch devices
      bodyStyle.overscrollBehavior = 'none'; // Prevent "pull-to-refresh" or scroll chaining
      bodyStyle.position = 'fixed'; // Prevent scrolling by fixing the body
      bodyStyle.top = `-${scrollYRef.current}px`; // Maintain scroll position
      bodyStyle.width = '100%'; // Prevent width changes due to scrollbar disappearing

      // Return a cleanup function that will run when `lock` becomes false or component unmounts
      return () => {
        bodyStyle.overflow = originalOverflow;
        bodyStyle.touchAction = originalTouchAction;
        bodyStyle.overscrollBehavior = originalOverscrollBehavior;
        bodyStyle.position = originalPosition;
        bodyStyle.top = originalTop;
        bodyStyle.width = originalWidth;
        window.scrollTo(0, scrollYRef.current);
      };
    }

    // If lock is false, no scroll-locking effect is applied by this hook in this render,
    // so no specific cleanup is needed from this render's effect.
    // If `lock` transitioned from `true` to `false`, the cleanup function from the *previous*
    // effect (when `lock` was `true`) would have already run and restored the styles.
    return undefined;
  }, [lock]);
}
