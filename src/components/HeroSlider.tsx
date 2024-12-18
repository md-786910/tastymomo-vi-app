import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const momos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    title: "Steam Momos",
    price: "₹120"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80",
    title: "Fried Momos",
    price: "₹140"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1609167830220-7164aa360951?auto=format&fit=crop&w=800&q=80",
    title: "Kurkure Momos",
    price: "₹160"
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.3, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % momos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#FF5C00]">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
        style={{ y: backgroundY }}
      />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
          <motion.div 
            className="z-10"
            style={{ opacity, scale }}
          >
            <motion.span 
              className="inline-block text-white/80 mb-4 text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              — SOMETHING SPICY
            </motion.span>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Authentic
              <br />
              <span className="text-black">Momo Magic</span>
            </motion.h1>

            <motion.p 
              className="text-white/90 text-lg mb-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience the perfect blend of traditional recipes and modern flavors
              with our handcrafted momos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/menu"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-black/80 transition-all duration-300 hover:scale-105"
              >
                Explore Menu <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative h-full flex items-center">
            {momos.map((momo, index) => (
              <motion.div
                key={momo.id}
                className="absolute w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  scale: currentIndex === index ? 1 : 0.8
                }}
                transition={{ duration: 0.5 }}
              >
                {currentIndex === index && (
                  <div className="relative">
                    <motion.img
                      src={momo.image}
                      alt={momo.title}
                      className="w-full h-[500px] object-cover rounded-2xl"
                      style={{ opacity }}
                      layoutId={`momo-${momo.id}`}
                    />
                    <motion.div 
                      className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm p-4 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-white font-bold text-xl">{momo.title}</h3>
                      <p className="text-[#FF5C00]">{momo.price}</p>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
        style={{ opacity }}
      />
    </div>
  );
}