import React from 'react';
import { Users, CheckCircle, FileText } from 'lucide-react';

export default function Stats() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">1,500+</h3>
            <p className="text-lg text-gray-600">Students Tutored</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">99%</h3>
            <p className="text-lg text-gray-600">Satisfaction Rate</p>
          </div>
          
          <div className="flex flex-col items-center">
            <FileText className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">6,500+</h3>
            <p className="text-lg text-gray-600">Assignments Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}