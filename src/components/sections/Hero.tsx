import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Businesses Through{' '}
            <span className="text-indigo-600 block sm:inline">Innovative Technology</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Based in Accra, Ghana, we transform businesses with cutting-edge software solutions, expert consultancy, and AI innovations.
          </p>
          <a href="#contact" className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-indigo-700 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};