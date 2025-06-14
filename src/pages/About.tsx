import React from 'react';
import { MapPin, Users, Award, Target, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CareerPath Canada
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Connecting talented professionals with their dream careers across Canada
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CareerPath Canada is dedicated to bridging the gap between talented job seekers and top employers 
            across all provinces and territories. We believe that everyone deserves access to meaningful career 
            opportunities that align with their skills, values, and aspirations.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from our platform design to our customer service.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-600">
              We operate with transparency and honesty, ensuring all job listings are verified and legitimate.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
            <p className="text-gray-600">
              We build trust through reliable service, protecting user data, and maintaining high standards.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">25,000+</div>
              <div className="text-gray-600">Active Job Listings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100,000+</div>
              <div className="text-gray-600">Registered Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50,000+</div>
              <div className="text-gray-600">Successful Placements</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Our diverse team of professionals is passionate about helping Canadians find meaningful work. 
            With backgrounds in technology, human resources, and career development, we understand both 
            sides of the hiring equation.
          </p>
          
          <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you're looking for your next career opportunity or seeking top talent for your organization, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Find Jobs
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;