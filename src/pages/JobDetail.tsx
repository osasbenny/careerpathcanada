import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  DollarSign, 
  Calendar, 
  Clock, 
  Building, 
  Users, 
  Star,
  ExternalLink,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle
} from 'lucide-react';
import { useJobs } from '../context/JobContext';

const JobDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs } = useJobs();
  
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">The job you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/jobs')}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Browse All Jobs
          </button>
        </div>
      </div>
    );
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  const handleApply = () => {
    if (job.applicationUrl) {
      window.open(job.applicationUrl, '_blank');
    } else if (job.applicationEmail) {
      window.location.href = `mailto:${job.applicationEmail}?subject=Application for ${job.title}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/jobs')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Jobs</span>
          </button>

          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              {job.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={`${job.company} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {job.company.charAt(0)}
                  </span>
                </div>
              )}
              
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h1>
                <div className="flex items-center space-x-2 text-lg text-gray-600 mb-4">
                  <Building className="h-5 w-5" />
                  <span>{job.company}</span>
                  {job.featured && (
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-red-500" />
                    <span>{job.location}</span>
                    {job.remote && (
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Remote
                      </span>
                    )}
                  </div>
                  {job.salary && (
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                    <span>Posted {getTimeAgo(job.postedDate)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Button */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <button
                onClick={handleApply}
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ExternalLink className="h-5 w-5" />
              </button>
              <p className="text-sm text-gray-600 mt-3 text-center">
                {job.applicationEmail ? 'Apply via email' : 'Apply on company website'}
              </p>
            </div>

            {/* Job Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Type
                  </label>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full capitalize">
                    {job.type}
                  </span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                    {job.category}
                  </span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Province
                  </label>
                  <span className="text-gray-900">{job.province}</span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Remote Work
                  </label>
                  <span className={`inline-block text-sm px-3 py-1 rounded-full ${
                    job.remote 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {job.remote ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Company</h3>
              <div className="flex items-center space-x-3 mb-4">
                {job.companyLogo ? (
                  <img
                    src={job.companyLogo}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">
                      {job.company.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">{job.company}</h4>
                  <p className="text-sm text-gray-600">Technology Company</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Learn more about this company and their other job opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;