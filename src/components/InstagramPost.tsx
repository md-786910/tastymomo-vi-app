import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

interface InstagramPostProps {
  post: {
    id: number;
    image: string;
    caption: string;
    likes: number;
    comments: number;
    timestamp: string;
  };
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function InstagramPost({ post }: InstagramPostProps) {
  return (
    <motion.div
      variants={item}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative group">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full aspect-square object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="flex items-center text-white">
            <Heart className="mr-2" size={24} />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center text-white">
            <MessageCircle className="mr-2" size={24} />
            <span>{post.comments}</span>
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{post.caption}</p>
        <p className="text-gray-400 text-xs">{post.timestamp}</p>
      </div>
    </motion.div>
  );
}