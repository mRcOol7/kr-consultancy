import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Building2, 
  CreditCard, 
  Calendar, 
  Clock, 
  Users,
  GraduationCap,
  Languages,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

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
    postedDate: '2024-03-15',
    responsibilities: [
      'Lead the frontend development team and mentor junior developers',
      'Design and implement scalable frontend architectures',
      'Work closely with product and design teams',
      'Ensure code quality and best practices',
      'Participate in code reviews and technical discussions'
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '5+ years of experience in frontend development',
      'Strong expertise in React and TypeScript',
      'Experience with cloud platforms (AWS preferred)',
      'Excellent problem-solving skills'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance',
      'Annual performance bonus',
      'Professional development opportunities',
      'Flexible work hours'
    ]
  },
  // ... other jobs
];

export default function JobDetail() {
  const { jobId } = useParams();
  const job = jobs.find(j => j.id === Number(jobId));

  if (!job) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Job not found</h2>
        <Link 
          to="/job-openings"
          className="inline-flex items-center text-blue-600 mt-4 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Job Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/job-openings"
        className="inline-flex items-center text-blue-600 mb-6 hover:text-blue-700"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Job Listings
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-8">
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{job.type}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Job Overview</h2>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          {/* Key Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Posted Date</span>
              </div>
              <p className="text-gray-600">{new Date(job.postedDate).toLocaleDateString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Experience Required</span>
              </div>
              <p className="text-gray-600">{job.experience}</p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-3">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition duration-300 shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}