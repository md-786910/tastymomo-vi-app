import React from 'react';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { momoImages } from '../config/images';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-black overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={momoImages.hero.main}
          alt="Delicious Momos"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      </motion.div>

      {/* Rest of the component remains the same */}
    </div>
  );
}