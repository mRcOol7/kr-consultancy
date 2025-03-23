import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Navigation } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir//Modi+Nagar+Ankleshwar+Gujarat', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center group hover:text-blue-200 transition-colors">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <p>Ankleshwar, Gujarat</p>
              </div>
              <div className="flex items-center group hover:text-blue-200 transition-colors">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <p>+91 7490817994</p>
              </div>
              <div className="flex items-center group hover:text-blue-200 transition-colors">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <p>contact@krconsultancy.com</p>
              </div>
              <div className="flex items-center group hover:text-blue-200 transition-colors">
                <div className="bg-blue-700 p-3 rounded-lg mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <p>www.krconsultancy.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition duration-300 text-gray-800"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition duration-300 text-gray-800"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition duration-300 text-gray-800"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className={`w-full py-3 px-6 rounded-lg transition duration-300 font-medium text-lg shadow-lg hover:shadow-xl ${
                  submitStatus === 'loading' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.38759637863288!2d72.98177795696027!3d21.636075741081786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be026a62163a6af%3A0xfef28d36d3ddfc!2sModi%20Nagar!5e1!3m2!1sen!2sin!4v1742705921084!5m2!1sen!2sin"
              className="w-full h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button
              onClick={handleGetDirections}
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2 shadow-lg"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}