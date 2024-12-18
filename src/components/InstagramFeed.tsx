import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import InstagramPost from './InstagramPost';

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    caption: "Our signature steamed momos fresh out of the kitchen! 🥟 #MomoMagic #FreshFood",
    likes: 234,
    comments: 42,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80",
    caption: "Crispy pan-fried momos with our special chili sauce 🌶️ #SpicyMomos",
    likes: 312,
    comments: 28,
    timestamp: "5 hours ago"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1609167830220-7164aa360951?auto=format&fit=crop&w=600&q=80",
    caption: "Weekend special: Kurkure momos with a twist! 😋 #MomoLove",
    likes: 421,
    comments: 56,
    timestamp: "1 day ago"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
    caption: "Behind the scenes: Our chefs preparing your favorite momos! 👨‍🍳 #ChefSpecial",
    likes: 198,
    comments: 23,
    timestamp: "2 days ago"
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

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Instagram className="text-[#FF5C00]" size={32} />
            <h2 className="text-3xl font-bold">Follow Us on Instagram</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Stay updated with our latest creations and behind-the-scenes moments
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {posts.map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF5C00] to-[#FF8C40] text-white rounded-full hover:from-[#FF4C00] hover:to-[#FF7C30] transition-all duration-300 hover:scale-105"
          >
            <Instagram size={20} />
            Follow @momomagic
          </a>
        </motion.div>
      </div>
    </section>
  );
}