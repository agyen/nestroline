import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Nestroline</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm sm:text-base">
                Founded on principles of excellence and innovation in Accra, Ghana, we're committed to delivering impactful solutions while making a difference in our community.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                <p className="text-gray-800 font-semibold text-sm sm:text-base">
                  We dedicate 10% of our revenue back to the society through infrastructure development, employee volunteering and charitable organizations.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Why Choose Us</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  {["Expertise You Can Trust", "Customer-Centric Approach", "Innovative Thinking", "Scalable Solutions"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-indigo-600 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative order-first md:order-last" data-aos="fade-left">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};