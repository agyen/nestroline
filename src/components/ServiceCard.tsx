import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full" data-aos="fade-up">
      <div className="text-3xl text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-indigo-600 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};