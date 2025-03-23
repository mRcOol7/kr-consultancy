import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Building2, CreditCard, Filter, ArrowRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Ltd',
    location: 'Ankleshwar, Gujarat',
    salary: '12-18 LPA',
    type: 'Full-time',
    experience: '5-8 years',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    description: 'Looking for an experienced software engineer to lead our frontend development team.',
    postedDate: '2024-03-15'
  },
  {
    id: 2,
    title: 'HR Manager',
    company: 'Global Industries',
    location: 'Bharuch, Gujarat',
    salary: '8-12 LPA',
    type: 'Full-time',
    experience: '4-6 years',
    skills: ['Recruitment', 'Employee Relations', 'HR Policies', 'Training'],
    description: 'Seeking an experienced HR professional to manage end-to-end HR operations.',
    postedDate: '2024-03-14'
  },
  {
    id: 3,
    title: 'Production Supervisor',
    company: 'Manufacturing Corp',
    location: 'Ankleshwar GIDC',
    salary: '5-7 LPA',
    type: 'Full-time',
    experience: '3-5 years',
    skills: ['Production Planning', 'Team Management', 'Quality Control'],
    description: 'Looking for a production supervisor with chemical industry experience.',
    postedDate: '2024-03-13'
  }
];

export default function JobList() {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* Filters Sidebar */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Filter className="h-5 w-5 text-gray-500" />
          </div>
          
          {/* Experience Level */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Experience Level</h3>
            <div className="space-y-2">
              {['0-2 years', '2-5 years', '5-8 years', '8+ years'].map((exp) => (
                <label key={exp} className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-600">{exp}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Job Type</h3>
            <div className="space-y-2">
              {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                <label key={type} className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-600">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Salary Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Salary Range</h3>
            <div className="space-y-2">
              {['3-6 LPA', '6-10 LPA', '10-15 LPA', '15+ LPA'].map((range) => (
                <label key={range} className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-600">{range}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="lg:col-span-9">
        <div className="space-y-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/job-openings/${job.id}`}
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h2>
                    <div className="flex items-center text-gray-600">
                      <Building2 className="h-4 w-4 mr-1" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CreditCard className="h-4 w-4 mr-2" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Posted on {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                  <span className="inline-flex items-center text-blue-600">
                    View Details <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}