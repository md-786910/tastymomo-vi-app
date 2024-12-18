import { useState, useEffect } from 'react';
import { GoogleReview } from '../types/google';
import { fetchGoogleReviews } from '../services/googleBusiness';

export function useGoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchGoogleReviews();
        setReviews(data);
      } catch (error) {
        console.error('Failed to load reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  return { reviews, loading };
}