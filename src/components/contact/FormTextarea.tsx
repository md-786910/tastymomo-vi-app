import React from 'react';
import { motion } from 'framer-motion';

interface FormTextareaProps {
  label: string;
  placeholder: string;
  required?: boolean;
}

export default function FormTextarea({ label, placeholder, required }: FormTextareaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        required={required}
        rows={4}
        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent outline-none transition-all duration-300 resize-none"
      />
    </motion.div>
  );
}