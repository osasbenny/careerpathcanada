import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, MapPin, User, LogOut } from 'lucide-react';
import { useJobs } from '../../context/JobContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useJobs();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            <MapPin className="h-8 w-8" />
            <span>CareerPath Canada</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/jobs" 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Find Jobs
            </Link>
            <Link 
              to="/categories" 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Categories
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Career Advice
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Contact
            </Link>
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={currentUser.role === 'admin' ? '/admin' : '/employer/dashboard'}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>{currentUser.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/employer/login" 
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                >
                  Employer Login
                </Link>
                <Link 
                  to="/employer/post-job" 
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Post a Job
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link 
                to="/jobs" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </Link>
              <Link 
                to="/categories" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Career Advice
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="border-t border-gray-200 pt-4">
                {currentUser ? (
                  <>
                    <Link
                      to={currentUser.role === 'admin' ? '/admin' : '/employer/dashboard'}
                      className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/employer/login" 
                      className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Employer Login
                    </Link>
                    <Link 
                      to="/employer/post-job" 
                      className="block px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Post a Job
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;