import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ReviewsHeader() {
  return (
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
    </motion.div>
  );
}