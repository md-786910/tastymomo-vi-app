import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { momos } from '../data/momos';
import { ArrowLeft, Timer, Tag, UtensilsCrossed } from 'lucide-react';

export default function MomoDetail() {
  const { id } = useParams();
  const momo = momos.find((m) => m.id === id);

  if (!momo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Momo not found</h2>
          <Link
            to="/menu"
            className="text-[#FF5C00] hover:underline inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/menu"
          className="inline-flex items-center text-[#FF5C00] hover:underline mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Menu
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src={momo.image}
              alt={momo.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{momo.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center gap-1 bg-[#FF5C00]/10 text-[#FF5C00] rounded-full px-4 py-2">
                  <Timer size={20} />
                  {momo.type}
                </span>
                <span className="flex items-center gap-1 bg-[#FF5C00]/10 text-[#FF5C00] rounded-full px-4 py-2">
                  <Tag size={20} />
                  {momo.variant}
                </span>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{momo.description}</p>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="text-[#FF5C00]" />
                  Ingredients
                </h2>
                <ul className="grid grid-cols-2 gap-2">
                  {momo.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="text-gray-600 flex items-center gap-2"
                    >
                      • {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-2xl font-bold text-[#FF5C00]">₹{momo.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}