import React from 'react';
import { GraduationCap, Briefcase, Trophy, RefreshCw, PenTool as Tool } from 'lucide-react';

export default function Aspirants() {
  const aspirants = [
    { icon: GraduationCap, title: 'Fresh Graduates', description: 'Kickstart your career with promising opportunities' },
    { icon: Briefcase, title: 'Mid-Level Professionals', description: 'Advance your career with top companies' },
    { icon: Trophy, title: 'Senior & Leadership', description: 'Find perfect executive positions' },
    { icon: RefreshCw, title: 'Career Changers', description: 'Support for industry transitions' },
    { icon: Tool, title: 'Skilled Workforce', description: 'Specialized roles across sectors' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Aspirants</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aspirants.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <item.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}