import React from 'react';
import { Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Office meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              KR Consultancy is a leading placement agency specializing in seamless, paperless recruitment solutions. Based in Ankleshwar's Golden Corridor, we connect top talent with dynamic organizations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Rocket className="h-6 w-6 text-blue-600 mr-3" />
                <p><strong>Vision:</strong> Revolutionizing the recruitment industry with efficiency and innovation.</p>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <p><strong>Mission:</strong> Providing exceptional, technology-driven hiring solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}