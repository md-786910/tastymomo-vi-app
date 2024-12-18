import React from 'react';
import { motion } from 'framer-motion';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

export default function FormInput({ label, type, placeholder, required }: FormInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent outline-none transition-all duration-300"
      />
    </motion.div>
  );
}