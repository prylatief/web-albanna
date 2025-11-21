
import React from 'react';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  compact?: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="space-y-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="bg-white/90 rounded-lg p-4 relative">
            {/* Quote Icon */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-albanna-yellow rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-albanna-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic mb-2 pl-4">"{testimonial.quote}"</p>
            <p className="text-xs font-semibold text-albanna-green text-right">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section id="testimoni" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Testimoni</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl border shadow-soft relative">
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-albanna-yellow rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-albanna-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-slate-700 pt-4">"{testimonial.quote}"</p>
              <p className="mt-3 font-semibold text-albanna-green">— <em>{testimonial.author}</em></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
