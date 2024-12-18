import React from 'react';
import { type Momo } from '../types';
import { Link } from 'react-router-dom';
import { ChefHat, Timer, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuCardProps {
  momo: Momo;
  delay?: number;
}

export default function MenuCard({ momo, delay = 0 }: MenuCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
    >
      <Link to={`/menu/${momo.id}`} className="block">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative">
            <img
              src={momo.image}
              alt={momo.name}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <motion.div 
              className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.2 }}
            >
              ₹{momo.price}
            </motion.div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">{momo.name}</h3>
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <ChefHat className="text-[#FF5C00]" size={20} />
              </motion.div>
            </div>
            <p className="text-gray-600 mb-4">{momo.description}</p>
            <div className="flex items-center gap-4">
              <motion.span 
                className="flex items-center gap-1 bg-[#FF5C00]/10 text-[#FF5C00] rounded-full px-3 py-1 text-sm font-medium"
                whileHover={{ scale: 1.1 }}
              >
                <Timer size={16} />
                {momo.type}
              </motion.span>
              <motion.span 
                className="flex items-center gap-1 bg-[#FF5C00]/10 text-[#FF5C00] rounded-full px-3 py-1 text-sm font-medium"
                whileHover={{ scale: 1.1 }}
              >
                <Tag size={16} />
                {momo.variant}
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}