import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MomoCard from './scrolling/MomoCard';
import ParallaxText from './scrolling/ParallaxText';
import ScrollingHeader from './scrolling/ScrollingHeader';
import { featuredMomos } from './scrolling/FeaturedMomos';

export default function ScrollingMomos() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <ScrollingHeader />
      </motion.div>

      <div className="relative">
        <ParallaxText baseVelocity={-5}>
          {featuredMomos.map((momo, index) => (
            <MomoCard
              key={index}
              image={momo.image}
              name={momo.name}
              delay={index * 0.2}
            />
          ))}
        </ParallaxText>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>
    </section>
  );
}