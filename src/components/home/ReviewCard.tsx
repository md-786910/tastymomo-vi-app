import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { GoogleReview } from '../../types/google';

interface ReviewCardProps {
  review: GoogleReview;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6"
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
      <p className="text-gray-600">{review.text}</p>
      <p className="text-sm text-gray-400 mt-4">
        {new Date(review.time * 1000).toLocaleDateString()}
      </p>
    </motion.div>
  );
}