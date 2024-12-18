// Environment configuration with type safety
export const env = {
  googleApiKey: import.meta.env.VITE_GOOGLE_API_KEY as string,
  googlePlaceId: import.meta.env.VITE_GOOGLE_PLACE_ID as string,
  googleMapApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY as string,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  mode: import.meta.env.MODE,
};

// Validate required environment variables
export const validateEnv = () => {
  const required = {
    'VITE_GOOGLE_API_KEY': env.googleApiKey,
    'VITE_GOOGLE_PLACE_ID': env.googlePlaceId,
  };

  const missing = Object.entries(required)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    console.warn(
      `Missing required environment variables:\n${missing.join('\n')}\n` +
      'Some features may not work correctly.'
    );
  }
};