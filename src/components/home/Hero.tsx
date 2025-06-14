import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { useJobs } from '../../context/JobContext';

const provinces = [
  'All Provinces',
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon'
];

const Hero: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [province, setProvince] = useState('All Provinces');
  const { updateFilters } = useJobs();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filters: any = {};
    if (keyword.trim()) filters.keyword = keyword.trim();
    if (location.trim()) filters.location = location.trim();
    if (province !== 'All Provinces') filters.province = province;
    
    updateFilters(filters);
    navigate('/jobs');
  };

  return (
    <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-blue-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find Your Dream Job in 
            <span className="block text-yellow-300">Canada</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Connect with top employers across all provinces and territories. 
            Your next career opportunity is just a search away.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">25,000+</div>
              <div className="text-gray-100">Active Jobs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">5,000+</div>
              <div className="text-gray-100">Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">100,000+</div>
              <div className="text-gray-100">Job Seekers</div>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Keyword Search */}
              <div className="relative">
                <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title or Keywords
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="e.g. Software Engineer, Marketing Manager"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="relative">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  City or Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Toronto, Vancouver"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Province */}
              <div className="relative">
                <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                  Province/Territory
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    id="province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 appearance-none bg-white"
                  >
                    {provinces.map((prov) => (
                      <option key={prov} value={prov}>
                        {prov}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 shadow-lg"
                >
                  Find Jobs
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Popular searches: 
                <button 
                  type="button"
                  onClick={() => {setKeyword('Remote'); handleSearch({preventDefault: () => {}} as any);}}
                  className="text-red-600 hover:text-red-700 font-medium ml-1"
                >
                  Remote Work
                </button>
                ,
                <button 
                  type="button"
                  onClick={() => {setKeyword('Software Developer'); handleSearch({preventDefault: () => {}} as any);}}
                  className="text-red-600 hover:text-red-700 font-medium ml-1"
                >
                  Software Developer
                </button>
                ,
                <button 
                  type="button"
                  onClick={() => {setKeyword('Nurse'); handleSearch({preventDefault: () => {}} as any);}}
                  className="text-red-600 hover:text-red-700 font-medium ml-1"
                >
                  Healthcare
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;