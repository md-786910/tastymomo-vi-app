import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';
import LoadingSpinner from '../ui/LoadingSpinner';

export default function GoogleReviews() {
  const { reviews, loading } = useGoogleReviews();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="text-[#FF5C00]" size={32} />
            <h2 className="text-3xl font-bold">Customer Reviews</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their TastyMomo experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.author_name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={i < review.rating ? 'text-[#FF5C00] fill-[#FF5C00]' : 'text-gray-300'}
                        size={16}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <p className="text-sm text-gray-400">
                {new Date(review.time * 1000).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}