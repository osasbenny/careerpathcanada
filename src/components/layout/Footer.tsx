import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold text-red-500 hover:text-red-400 transition-colors"
            >
              <MapPin className="h-8 w-8" />
              <span>CareerPath Canada</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Canada's premier job board connecting talented professionals with top employers across all provinces and territories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Job Categories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/employer/post-job" className="text-gray-300 hover:text-white transition-colors">
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>

          {/* Job Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs?category=Technology" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/jobs?category=Healthcare" className="text-gray-300 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/jobs?category=Finance" className="text-gray-300 hover:text-white transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/jobs?category=Marketing" className="text-gray-300 hover:text-white transition-colors">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">info@careerpathcanada.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">1-800-CAREERS</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Innovation Drive<br />
                  Toronto, ON M5V 3A8
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Get the latest job opportunities and career tips delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">
              © 2024 CareerPath Canada. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;