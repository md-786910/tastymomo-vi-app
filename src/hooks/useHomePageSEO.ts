import { useMemo } from 'react';
import { generateSEODescription } from '../utils/seo';

export function useHomePageSEO() {
  const title = "Premium Authentic Momos";
  
  const description = useMemo(() => 
    generateSEODescription(
      "Experience the finest authentic momos in town. From classic steamed to crispy fried varieties, discover our handcrafted momos made with love and tradition."
    ),
    []
  );

  const keywords = useMemo(() => [
    'steamed momos',
    'fried momos',
    'kurkure momos',
    'traditional dumplings',
    'vegetarian momos',
    'paneer momos',
    'corn momos',
    'momo delivery',
    'best momos near me',
    'authentic Nepali momos',
    'Tibetan dumplings',
    'spicy momos',
    'momo restaurant near me'
  ], []);

  return { title, description, keywords };
}