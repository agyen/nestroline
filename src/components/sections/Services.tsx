import React from 'react';
import { ServiceCard } from '../ServiceCard';

const services = [
  {
    title: "Software Engineering",
    description: "Custom software development, web & mobile apps, system integration, and cloud solutions tailored to your needs.",
    icon: "💻",
    features: [
      "Custom Software Development",
      "Web and Mobile Development",
      "System Integration",
      "Cloud Solutions"
    ]
  },
  {
    title: "Technology Consultancy",
    description: "Strategic guidance for digital transformation, IT infrastructure optimization, and technology selection.",
    icon: "📊",
    features: [
      "Digital Transformation",
      "IT Infrastructure",
      "Technology Strategy",
      "Process Optimization"
    ]
  },
  {
    title: "AI Engineering",
    description: "Advanced AI solutions including machine learning, NLP, computer vision, and predictive analytics.",
    icon: "🤖",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics"
    ]
  },
  {
    title: "Technology Research",
    description: "In-depth research on emerging trends, prototyping solutions, and evaluating cutting-edge technologies.",
    icon: "🔬",
    features: [
      "Emerging Trends Research",
      "Solution Prototyping",
      "Technology Evaluation",
      "Innovation Strategy"
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};