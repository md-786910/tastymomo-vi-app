import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

export default function Logo() {
  const letters = "TastyMomo".split("");
  
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <UtensilsCrossed className="text-white" size={24} />
        <motion.div
          className="absolute -inset-1 bg-[#FF5C00]/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <div className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`text-2xl font-bold ${
              index < 5 ? 'text-[#FF5C00]' : 'text-black'
            }`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{
              scale: 1.2,
              color: '#FF5C00',
              transition: { duration: 0.2 }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}