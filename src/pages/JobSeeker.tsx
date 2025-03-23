import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import axios from 'axios';

const API_BASE_URL = 'https://kr-consultancy-backend.vercel.app';

export default function JobSeeker() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    location: '',
    qualification: '',
    experience: '',
    keySkills: '',
    designation: '',
    currentCTC: '',
    expectedCTC: '',
    agreeToTerms: false
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB');
        return;
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload PDF or Word documents only');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please upload your resume');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      // Log the form data for debugging
      console.log('Submitting form data:', formData);
      
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('resume', selectedFile);
      
      // Convert frontend field names to backend field names
      const fieldMappings = {
        fullName: 'full_name',
        email: 'email',
        mobile: 'mobile',
        location: 'location',
        qualification: 'qualification',
        experience: 'experience',
        keySkills: 'key_skills',
        designation: 'designation',
        currentCTC: 'current_ctc',
        expectedCTC: 'expected_ctc'
      };

      // Append all form fields with proper validation
      Object.entries(fieldMappings).forEach(([frontendField, backendField]) => {
        const value = formData[frontendField as keyof typeof formData];
        if (!value && frontendField !== 'agreeToTerms') {
          throw new Error(`${frontendField} is required`);
        }
        formDataToSubmit.append(backendField, value.toString());
      });

      // Log the FormData entries for debugging
      for (const pair of formDataToSubmit.entries()) {
        console.log(pair[0], pair[1]);
      }

      // Submit to backend
      const response = await axios.post(
        `${API_BASE_URL}/api/job-applications`,
        formDataToSubmit,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log('Application submitted successfully:', response.data);
      setIsSubmitting(false);
      setSuccess(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        location: '',
        qualification: '',
        experience: '',
        keySkills: '',
        designation: '',
        currentCTC: '',
        expectedCTC: '',
        agreeToTerms: false
      });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else if (axios.isAxiosError(error)) {
        setError(error.response?.data?.error || error.message || 'Failed to submit application');
      } else {
        setError('Failed to submit application');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Career Opportunities</h2>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Your application has been submitted successfully!
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Post Your CV</h2>
            <img 
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80"
              alt="Career Growth"
              className="w-full h-48 object-cover rounded-lg mb-8"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile No</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience (in years)</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key-Skills</label>
              <input
                type="text"
                name="keySkills"
                value={formData.keySkills}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current CTC</label>
              <input
                type="text"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expected CTC</label>
              <input
                type="text"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex items-center justify-between p-4 border-2 border-dashed rounded-lg bg-gray-50">
              <div className="flex items-center space-x-2">
                <Upload className="w-6 h-6 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Upload Resume</p>
                  <p className="text-xs text-gray-500">PDF or Word documents (max 5MB)</p>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                required
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
              >
                Browse
              </button>
            </div>
            {selectedFile && (
              <div className="mt-2 text-sm text-gray-600 flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{selectedFile.name}</span>
              </div>
            )}
          </div>

          <div className="col-span-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                required
              />
              <span className="text-sm text-gray-700">
                I agree to the terms and conditions and privacy policy
              </span>
            </label>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-md transition duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}