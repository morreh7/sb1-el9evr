import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Users, Shield } from 'lucide-react';
import Stats from '../components/Stats';
import PriceCalculator from '../components/PriceCalculator';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Academic Success Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Busy with work? Let us help you with your assignments. Professional academic writing and tutoring services tailored to your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span>Plagiarism-free papers</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-2" />
                  <span>On-time delivery guaranteed</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <span>Expert writers and tutors</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  <span>100% confidential</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div>
              <PriceCalculator />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Thesis Writing', icon: '📝' },
              { title: 'Dissertations', icon: '📚' },
              { title: 'Technical Writing', icon: '⚙️' },
              { title: 'Website SEO', icon: '🔍' },
            ].map((service) => (
              <div key={service.title} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}