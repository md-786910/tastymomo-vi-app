import { useMemo } from 'react';

export function useAboutGalleryAnimations() {
  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }), []);

  const item = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  }), []);

  return { container, item };
}