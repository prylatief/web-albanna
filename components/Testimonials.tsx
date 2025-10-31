
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Testimoni</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl border shadow-soft">
              <p className="text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-3 font-semibold">— <em>{testimonial.author}</em></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
