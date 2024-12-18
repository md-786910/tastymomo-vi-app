import React from 'react';
import { UtensilsCrossed, Leaf, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Handcrafted Daily',
    description: 'Fresh momos made from scratch every day using traditional techniques'
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only the finest and freshest ingredients in our recipes'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as the best momo place in the city'
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Hot and fresh momos served within minutes'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="mx-auto text-[#FF5C00] mb-4" size={32} />
              </motion.div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}