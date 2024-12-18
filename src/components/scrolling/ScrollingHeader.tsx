import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

export default function ScrollingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <UtensilsCrossed className="text-[#FF5C00]" size={32} />
        <h2 className="text-3xl font-bold text-white">Featured Momos</h2>
      </div>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Discover our handcrafted selection of momos, made fresh daily with
        premium ingredients and traditional recipes.
      </p>
    </motion.div>
  );
}