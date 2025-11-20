import React from 'react';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <section id="fasilitas" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">
          Fasilitas
        </h2>
        <div className="h-1 w-20 bg-emerald-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-lg p-6 text-center hover:bg-emerald-100 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="font-bold text-lg text-emerald-900">{facility.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
