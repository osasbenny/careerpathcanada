import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { useJobs } from '../context/JobContext';
import JobCard from '../components/jobs/JobCard';
import JobFilters from '../components/jobs/JobFilters';

const Jobs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { filteredJobs, updateFilters, filters } = useJobs();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [keyword, setKeyword] = useState(filters.keyword || '');
  const [location, setLocation] = useState(filters.location || '');

  useEffect(() => {
    // Handle URL parameters
    const category = searchParams.get('category');
    if (category) {
      updateFilters({ category });
    }
  }, [searchParams, updateFilters]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({
      keyword: keyword.trim() || undefined,
      location: location.trim() || undefined
    });
  };

  const handleClearFilters = () => {
    setKeyword('');
    setLocation('');
    updateFilters({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Job
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore {filteredJobs.length.toLocaleString()} job opportunities across Canada
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, province, or 'remote'"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold whitespace-nowrap"
              >
                Search Jobs
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={handleClearFilters}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>
              <JobFilters />
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {filteredJobs.length.toLocaleString()} jobs found
                </span>
                {Object.keys(filters).length > 0 && (
                  <button
                    onClick={handleClearFilters}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                </button>
                
                <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or clearing some filters
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${ 
                viewMode === 'grid' 
                  ? 'grid-cols-1 lg:grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;