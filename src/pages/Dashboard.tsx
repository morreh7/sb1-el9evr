import React from 'react';
import { FileText, Clock, MessageSquare, Settings } from 'lucide-react';

export default function Dashboard() {
  const assignments = [
    {
      title: 'Research Paper on Climate Change',
      status: 'In Progress',
      deadline: '2024-03-20',
      progress: 60
    },
    {
      title: 'Literature Review',
      status: 'Under Review',
      deadline: '2024-03-25',
      progress: 90
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <FileText className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold">Active Orders</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Clock className="h-8 w-8 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold">Completed</h3>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <MessageSquare className="h-8 w-8 text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold">Messages</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Settings className="h-8 w-8 text-gray-600 mb-2" />
            <h3 className="text-lg font-semibold">Settings</h3>
            <p className="text-2xl font-bold">View</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Current Assignments</h2>
            <div className="space-y-6">
              {assignments.map((assignment) => (
                <div key={assignment.title} className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <p className="text-sm text-gray-600">Due: {assignment.deadline}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                      {assignment.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${assignment.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">JD</span>
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-600">Updated the research paper draft...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.title} className="flex justify-between items-center">
                  <span>{assignment.title}</span>
                  <span className="text-sm text-gray-600">{assignment.deadline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}