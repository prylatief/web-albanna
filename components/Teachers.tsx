import React from 'react';
import { TEACHERS } from '../constants';

interface TeachersProps {
  compact?: boolean;
}

const Teachers: React.FC<TeachersProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="space-y-2">
        {TEACHERS.map((teacher, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-albanna-green font-bold text-xs">•</span>
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-semibold text-albanna-green">{teacher.name}</p>
              <p className="text-xs text-albanna-green/80">{teacher.credential}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">
          Dewan Guru
        </h2>
        <div className="h-1 w-20 bg-emerald-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {TEACHERS.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-bold text-lg text-emerald-900 mb-2">{teacher.name}</h3>
                <p className="text-emerald-700 text-sm">{teacher.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
