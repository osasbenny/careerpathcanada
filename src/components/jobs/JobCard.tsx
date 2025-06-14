import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Star, ExternalLink, Building, Calendar } from 'lucide-react';
import { Job } from '../../types';

interface JobCardProps {
  job: Job;
  viewMode: 'grid' | 'list';
}

const JobCard: React.FC<JobCardProps> = ({ job, viewMode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.id}`);
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

  const gridLayout = (
    <div
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-red-200 hover:-translate-y-1"
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
            <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1">
              {job.title}
            </h3>
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <Building className="h-4 w-4" />
              <span>{job.company}</span>
            </div>
          </div>
        </div>
        {job.featured && (
          <Star className="h-5 w-5 text-yellow-400 fill-current flex-shrink-0" />
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="h-4 w-4 mr-2 text-red-500 flex-shrink-0" />
          <span>{job.location}</span>
          {job.remote && (
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Remote
            </span>
          )}
        </div>
        {job.salary && (
          <div className="flex items-center text-gray-600 text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
            <span>{job.salary}</span>
          </div>
        )}
        <div className="flex items-center text-gray-600 text-sm">
          <Clock className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
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
  );

  const listLayout = (
    <div
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-red-200 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          {job.companyLogo ? (
            <img
              src={job.companyLogo}
              alt={`${job.company} logo`}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">
                {job.company.charAt(0)}
              </span>
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 mt-1">
                  <Building className="h-4 w-4" />
                  <span>{job.company}</span>
                </div>
              </div>
              {job.featured && (
                <Star className="h-6 w-6 text-yellow-400 fill-current flex-shrink-0" />
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
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
                <span>{getTimeAgo(job.postedDate)}</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4 line-clamp-2">
              {job.description.substring(0, 200)}...
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                  {job.category}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full capitalize">
                  {job.type}
                </span>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return viewMode === 'grid' ? gridLayout : listLayout;
};

export default JobCard;