import { useEffect, useRef, useState } from 'react';

export function useScrollDirection({ threshold = 80, delta = 4 } = {}) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      const diff = y - lastY.current;

      if (y < threshold) {
        setHidden(false);
      } else if (diff > delta) {
        setHidden(true);
      } else if (diff < -delta) {
        setHidden(false);
      }

      lastY.current = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, delta]);

  return hidden;
}
