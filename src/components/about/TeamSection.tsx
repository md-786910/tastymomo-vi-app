import React from 'react';
import { motion } from 'framer-motion';
import { Users, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Chef Rahul Kumar',
    role: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300&q=80',
    twitter: '#',
    linkedin: '#'
  },
  {
    name: 'Priya Singh',
    role: 'Master Chef',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80',
    twitter: '#',
    linkedin: '#'
  },
  {
    name: 'Amit Patel',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    twitter: '#',
    linkedin: '#'
  }
];

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="text-[#FF5C00]" size={32} />
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind your favorite momos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-[#FF5C00]">{member.role}</p>
                  <div className="flex gap-4 mt-4">
                    <a href={member.twitter} className="text-white hover:text-[#FF5C00] transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href={member.linkedin} className="text-white hover:text-[#FF5C00] transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}