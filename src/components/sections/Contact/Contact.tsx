import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Ready to transform your business? Contact us to discuss your project and experience the Nestroline difference.
          </p>
          <ContactInfo />
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};