import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Briefcase, MapPin, Building2, CreditCard, Search, Filter, ArrowRight } from 'lucide-react';
import JobList from './jobs/JobList';
import JobDetail from './jobs/JobDetail';

export default function JobOpenings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Current Job Openings
          </h1>
          <p className="text-white/90 text-center max-w-2xl mx-auto mb-8">
            Find your next career opportunity with leading companies. We have positions 
            across various industries and experience levels.
          </p>
          
          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs by title, skills, or company"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Routes>
          <Route index element={<JobList />} />
          <Route path=":jobId" element={<JobDetail />} />
        </Routes>
      </div>
    </div>
  );
}