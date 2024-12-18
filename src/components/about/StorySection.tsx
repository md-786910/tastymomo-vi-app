import React from 'react';
import { motion } from 'framer-motion';
import { History, Heart } from 'lucide-react';
import { momoImages } from '../../config/images';

export default function StorySection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <History className="text-[#FF5C00]" size={32} />
            <h2 className="text-3xl font-bold">Our Story</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming the city's favorite momo destination,
            our journey has been filled with passion, dedication, and lots of delicious experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">A Legacy of Flavor</h3>
            <p className="text-gray-600">
              Started in 2010, MoMo Magic was born from a simple desire: to share
              the authentic taste of traditional momos with modern food lovers.
            </p>
            <p className="text-gray-600">
              Our recipes have been perfected over generations, combining age-old
              techniques with innovative flavors to create an unforgettable dining experience.
            </p>
            <div className="flex items-center gap-2 text-[#FF5C00]">
              <Heart className="animate-pulse" />
              <span className="font-medium">Made with love since 2010</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={momoImages.fried.paneer}
              alt="Our Story"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}