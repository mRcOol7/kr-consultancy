import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Building2, 
  UserCheck, 
  ClipboardCheck, 
  FileCheck, 
  GraduationCap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
];

const services = [
  {
    title: "HR Solution",
    description: "Comprehensive HR management and training consultancy services",
    icon: Users,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Recruitment",
    description: "End-to-end recruitment solutions for your organization",
    icon: UserCheck,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Staffing",
    description: "Flexible temporary and permanent staffing solutions",
    icon: Building2,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Facility Management",
    description: "Professional staffing management services",
    icon: ClipboardCheck,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Background Verification",
    description: "Thorough background checks for secure hiring",
    icon: FileCheck,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Education Consultant",
    description: "Expert career guidance and education consulting",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-600"
  }
];

const stats = [
  { number: "1000+", label: "Placements" },
  { number: "500+", label: "Client Companies" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support" }
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[85vh] overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            <img
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Building Careers & Organizations with Excellence
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Your trusted partner in talent acquisition and HR solutions. We connect the right talent with the right opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition duration-300 shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 shadow-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruitment and HR solutions tailored to meet your organization's unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className={`${service.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose KR Consultancy?</h2>
              <div className="space-y-4">
                {[
                  "Industry expertise across multiple sectors",
                  "Comprehensive screening process",
                  "Quick turnaround time",
                  "Dedicated support team",
                  "Cost-effective solutions",
                  "High success rate"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-700 transition duration-300"
              >
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team Meeting"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-lg font-semibold">15+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to build your dream team and take your organization to new heights
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 shadow-lg"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}