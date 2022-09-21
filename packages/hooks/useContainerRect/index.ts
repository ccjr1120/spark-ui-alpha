import { MutableRefObject, useEffect, useMemo, useState } from 'react';

interface RectTypes {
  height?: number;
}

export const useContainerRect = (ref: MutableRefObject<HTMLElement>) => {
  const [rect, setRect] = useState<RectTypes>({});

  useEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setRect({ height });
    }
  }, [ref]);

  return rect;
};
