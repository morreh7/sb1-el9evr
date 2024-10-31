import React from 'react';
import PriceCalculator from '../components/PriceCalculator';
import { CheckCircle, Users, Clock, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Thesis Writing',
      description: 'Expert guidance and writing support for your thesis project',
      icon: '📝'
    },
    {
      title: 'Dissertations',
      description: 'Comprehensive dissertation writing and editing services',
      icon: '📚'
    },
    {
      title: 'Technical Writing',
      description: 'Clear and precise technical documentation and reports',
      icon: '⚙️'
    },
    {
      title: 'Website SEO',
      description: 'Optimize your academic or professional website for visibility',
      icon: '🔍'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Professional academic writing and support services</p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">100% original, plagiarism-free content</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Writers</h3>
            <p className="text-gray-600">Qualified professionals in various fields</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">On-time Delivery</h3>
            <p className="text-gray-600">Meet your deadlines with our timely service</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Confidential</h3>
            <p className="text-gray-600">Your privacy is our top priority</p>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Price Calculator */}
        <div className="max-w-2xl mx-auto">
          <PriceCalculator />
        </div>
      </div>
    </div>
  );
}