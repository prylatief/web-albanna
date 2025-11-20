import React from 'react';
import { LEADERSHIP } from '../constants';

const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">
          Dewan Pimpinan
        </h2>
        <div className="h-1 w-20 bg-emerald-600 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {LEADERSHIP.map((leader, index) => (
              <div
                key={index}
                className="border-l-4 border-emerald-600 pl-6 py-3 hover:bg-emerald-50 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-emerald-900">{leader.name}</h3>
                    <p className="text-emerald-700">{leader.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
