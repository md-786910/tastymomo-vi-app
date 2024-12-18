import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-[#FF5C00]">
              MoMo Magic
            </Link>
            <p className="mt-4 text-gray-400">
              Bringing you the authentic taste of traditional momos with a modern twist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#FF5C00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-[#FF5C00] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF5C00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-400 hover:text-[#FF5C00] transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-[#FF5C00]" />
                <span className="text-gray-400">123 Momo Street, Foodie Lane</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#FF5C00]" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#FF5C00]" />
                <span className="text-gray-400">info@momomagic.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#FF5C00] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF5C00] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF5C00] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MoMo Magic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}