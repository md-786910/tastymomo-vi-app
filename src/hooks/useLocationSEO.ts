import { useMemo } from 'react';

export function useLocationSEO() {
  const locationKeywords = useMemo(() => [
    'momos in Muzaffarpur',
    'best momo restaurant Muzaffarpur',
    'Majhaulia Road momos',
    'Gobarsahi restaurants',
    'food delivery Muzaffarpur',
    'best dumplings Bihar',
    'Nepali food Muzaffarpur',
    'restaurant near Gobardhanpur',
    'momo delivery 842001',
    'authentic momos Bihar',
    'TastyMomo Muzaffarpur',
    'restaurant Majhaulia Road'
  ], []);

  const locationDescription = useMemo(() => 
    "Visit TastyMomo at Majhaulia Rd, Gobarsahi, Muzaffarpur for authentic Nepali and Tibetan momos. Best rated momo restaurant in Muzaffarpur, Bihar 842001. Order online or dine-in!",
    []
  );

  return { locationKeywords, locationDescription };
}