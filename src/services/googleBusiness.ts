import axios from 'axios';
import { env } from '../config/env';
import { GoogleReview } from '../types/google';
import { handleApiError } from '../utils/errorHandling';

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  try {
    if (!env.googleApiKey || !env.googlePlaceId) {
      console.warn('Google API key or Place ID not configured');
      return [];
    }

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${env.googlePlaceId}&fields=reviews&key=${env.googleApiKey}`
    );
    return response.data.result.reviews || [];
  } catch (error) {
    handleApiError(error, 'Error fetching Google reviews');
    return [];
  }
};