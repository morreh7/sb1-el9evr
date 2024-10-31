import React, { useState } from 'react';

const paperTypes = [
  'Essay', 'Research Paper', 'Book Report', 'Coursework', 'Book Review',
  'Movie Review', 'Research Summary', 'Dissertation', 'Thesis',
  'Thesis/Dissertation Proposal', 'Research Proposal', 'Programming',
  'Case Studies', 'Interior Design', '3D Rendering', 'Online Quiz'
];

const subjects = [
  'Art', 'Movies', 'Biology', 'Chemistry', 'Business',
  'Communications and Media', 'PR', 'Ethics', 'Language',
  'Law', 'American Literature'
];

const formats = ['MLA', 'APA', 'Chicago', 'Harvard'];
const languages = ['English US', 'English UK'];

export default function PriceCalculator() {
  const [pages, setPages] = useState(1);
  const [paperType, setPaperType] = useState(paperTypes[0]);
  const [subject, setSubject] = useState(subjects[0]);
  const [format, setFormat] = useState(formats[0]);
  const [language, setLanguage] = useState(languages[0]);

  const calculatePrice = () => {
    return pages * 9;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Calculate Your Price</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type of Paper</label>
          <select
            value={paperType}
            onChange={(e) => setPaperType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {paperTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {subjects.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Pages</label>
          <input
            type="number"
            min="1"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Format</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {formats.map((fmt) => (
                <option key={fmt} value={fmt}>{fmt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-md">
          <div className="text-lg font-semibold text-blue-900">
            Estimated Price: ${calculatePrice()}
          </div>
          <p className="text-sm text-blue-600 mt-1">
            Starting at $9/page
          </p>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
}