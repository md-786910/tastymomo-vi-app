import React from 'react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';
import ReviewCard from './ReviewCard';
import ReviewsHeader from './ReviewsHeader';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function GoogleReviews() {
  const { reviews, loading } = useGoogleReviews();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewsHeader />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
          <p className="text-gray-600">
            Based on {reviews.length} Google Reviews
          </p>
        </div>
        
      </div>
    </section>
  );
}