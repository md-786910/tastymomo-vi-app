import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

interface MomoCardProps {
  image: string;
  name: string;
  delay?: number;
}

export default function MomoCard({ image, name, delay = 0 }: MomoCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2">
              <ChefHat className="text-[#FF5C00]" size={20} />
              <h3 className="text-white font-bold text-lg">{name}</h3>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[#FF5C00] to-[#FF8C40] rounded-2xl -z-10 opacity-0 group-hover:opacity-30 blur-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}