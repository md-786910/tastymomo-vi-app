import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, UtensilsCrossed, Users, Shield } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source only the finest and freshest ingredients for our momos.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Traditional Methods',
    description: 'Each momo is handcrafted using time-honored techniques.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in creating memorable experiences for our community.'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Strict quality controls ensure consistent excellence.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ValuesSection() {
  return (
    <section className="py-20 bg-black/5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-[#FF5C00]/10 rounded-xl flex items-center justify-center mb-4"
              >
                <value.icon className="text-[#FF5C00]" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}