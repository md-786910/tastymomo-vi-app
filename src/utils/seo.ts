export const generateSEOKeywords = (baseKeywords: string[], pageSpecificKeywords: string[]) => {
  const commonKeywords = [
    'TastyMomo',
    'authentic momos',
    'premium momos',
    'best momos',
    'momo restaurant',
    'dumpling house',
    'Nepali food',
    'Tibetan cuisine'
  ];
  
  return [...new Set([...commonKeywords, ...baseKeywords, ...pageSpecificKeywords])];
};

export const generateSEODescription = (description: string) => {
  const MAX_LENGTH = 157;
  return description.length > MAX_LENGTH 
    ? `${description.substring(0, MAX_LENGTH)}...` 
    : description;
};

export const generateCanonicalUrl = (path: string) => {
  const BASE_URL = 'https://tastymomo.in';
  return `${BASE_URL}${path}`;
};