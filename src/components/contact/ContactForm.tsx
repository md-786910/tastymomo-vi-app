import React from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/10 to-transparent" />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-[#FF5C00]" />
          <h3 className="text-2xl font-bold">Get in Touch</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              type="text"
              placeholder="John Doe"
              required
            />
            <FormInput
              label="Email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>

          <FormInput
            label="Subject"
            type="text"
            placeholder="How can we help you?"
            required
          />

          <FormTextarea
            label="Message"
            placeholder="Tell us more about your inquiry..."
            required
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[#FF5C00] to-[#FF8C40] text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:from-[#FF4C00] hover:to-[#FF7C30] transition-all duration-300"
          >
            <Send size={20} />
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF5C00]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF5C00]/10 rounded-full blur-3xl" />
    </motion.div>
  );
}