import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
      <div className="text-left">
        <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact Information</h3>
        <div className="space-y-2 text-sm sm:text-base">
          <p>📍 Accra, Ghana</p>
          <p>📧 <a href="mailto:work@nestroline.com" className="text-indigo-600 hover:text-indigo-800">work@nestroline.com</a></p>
          <p>📞 <a href="tel:+233553458272" className="text-indigo-600 hover:text-indigo-800">+233 553458272</a></p>
        </div>
      </div>
      <div className="text-left">
        <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Social Impact</h3>
        <p className="text-gray-600 text-sm sm:text-base">Every project with us contributes to positive social change in Ghana.</p>
      </div>
    </div>
  );
};