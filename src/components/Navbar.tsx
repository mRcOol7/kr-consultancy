import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/krlogo.jpeg"
              alt="KR Placement Services Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold">KR Consultancy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="hover:text-blue-200 transition duration-300">About Us</Link>
            <Link to="/job-seeker" className="hover:text-blue-200 transition duration-300">Job Seeker</Link>
            <Link to="/services" className="hover:text-blue-200 transition duration-300">Our Services</Link>
            <Link to="/job-openings" className="hover:text-blue-200 transition duration-300">Job Openings</Link>
            <Link to="/contact" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition duration-300">Contact Us</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/job-seeker"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Job Seeker
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Our Services
              </Link>
              <Link
                to="/job-openings"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Job Openings
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}