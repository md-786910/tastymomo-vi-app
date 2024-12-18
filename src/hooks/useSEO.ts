import { useMemo } from 'react';
import { generateSEOKeywords } from '../utils/seo';

export function useSEO(title: string, keywords: string[]) {
  const siteTitle = useMemo(() => 
    `${title} | TastyMomo - Premium Authentic Momos`, 
    [title]
  );

  const processedKeywords = useMemo(() => 
    generateSEOKeywords([], keywords),
    [keywords]
  );

  return { siteTitle, processedKeywords };
}