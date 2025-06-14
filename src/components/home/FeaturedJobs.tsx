import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Star, ExternalLink } from 'lucide-react';
import { useJobs } from '../../context/JobContext';

const FeaturedJobs: React.FC = () => {
  const { jobs } = useJobs();
  const navigate = useNavigate();
  
  const featuredJobs = jobs.filter(job => job.featured).slice(0, 6);

  const handleJobClick = (jobId: string) => {
    navigate(`/job/${jobId}`);
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Job Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hand-picked positions from top Canadian employers across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => handleJobClick(job.id)}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:border-red-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {job.companyLogo ? (
                    <img
                      src={job.companyLogo}
                      alt={`${job.company} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {job.company.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  <span>{job.location}</span>
                  {job.remote && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Remote
                    </span>
                  )}
                </div>
                {job.salary && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                    <span>{job.salary}</span>
                  </div>
                )}
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{getTimeAgo(job.postedDate)}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {job.description.substring(0, 120)}...
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    {job.category}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                    {job.type}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/jobs')}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;