import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/krlogo.jpeg"
                alt="KR Placement Services Logo"
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <span className="text-xl font-bold">KR Consultancy</span>
            </div>
            <p className="text-gray-400">
              Building careers and organizations with excellence and integrity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">Our Services</Link></li>
              <li><Link to="/job-openings" className="text-gray-400 hover:text-white transition duration-300">Job Openings</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">Permanent Staffing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">Contract Hiring</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">HR Consulting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">Bulk Hiring</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Ankleshwar, Gujarat</li>
              <li>+91 7490817994</li>
              <li>contact@krconsultancy.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p> 2024 KR Consultancy. All rights reserved.</p>
          <p className="mt-2">Let's build your workforce together!</p>
        </div>
      </div>
    </footer>
  );
}