import React from 'react';
import { momos } from '../data/momos';
import MenuCard from '../components/MenuCard';

export default function Menu() {
  const categories = ['steam', 'fry', 'kurkure'];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-[#FF5C00]">Menu</span>
        </h1>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 capitalize">
              {category} Momos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {momos
                .filter((momo) => momo.type === category)
                .map((momo) => (
                  <MenuCard key={momo.id} momo={momo} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}