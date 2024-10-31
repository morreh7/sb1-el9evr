import React from 'react';
import { ClipboardList, MessageSquare, FileCheck, CreditCard } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList className="h-12 w-12 text-blue-600" />,
      title: '1. Submit Your Requirements',
      description: 'Fill out our simple order form with your assignment details and requirements.'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
      title: '2. Get Matched with an Expert',
      description: 'We'll assign your project to a qualified expert in your field of study.'
    },
    {
      icon: <FileCheck className="h-12 w-12 text-blue-600" />,
      title: '3. Review and Feedback',
      description: 'Receive your draft and request revisions if needed to ensure satisfaction.'
    },
    {
      icon: <CreditCard className="h-12 w-12 text-blue-600" />,
      title: '4. Release Payment',
      description: 'Once you're satisfied, release the payment and download your work.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-xl text-gray-600">Simple steps to get started with Research Compass</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.title} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How do you ensure quality?</h3>
              <p className="text-gray-600">Our rigorous quality control process includes multiple rounds of review and plagiarism checks.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What are your payment terms?</h3>
              <p className="text-gray-600">We offer secure payment options and only release payment to writers after your approval.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I request revisions?</h3>
              <p className="text-gray-600">Yes, we offer unlimited free revisions until you're completely satisfied with the work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}