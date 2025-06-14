import React from 'react';
import { useJobs } from '../../context/JobContext';

const provinces = [
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

const categories = [
  'Technology',
  'Healthcare',
  'Finance',
  'Marketing',
  'Education',
  'Sales',
  'Engineering',
  'Human Resources',
  'Design',
  'Product'
];

const jobTypes = [
  'full-time',
  'part-time',
  'contract',
  'remote'
];

const JobFilters: React.FC = () => {
  const { filters, updateFilters } = useJobs();

  const handleFilterChange = (key: string, value: string | boolean) => {
    if (value === '' || value === false) {
      const newFilters = { ...filters };
      delete newFilters[key as keyof typeof newFilters];
      updateFilters(newFilters);
    } else {
      updateFilters({ [key]: value });
    }
  };

  return (
    <div className="space-y-6">
      {/* Province Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Province/Territory
        </label>
        <select
          value={filters.province || ''}
          onChange={(e) => handleFilterChange('province', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">All Provinces</option>
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={filters.category || ''}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Job Type Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Type
        </label>
        <select
          value={filters.type || ''}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">All Types</option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Remote Work Filter */}
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.remote || false}
            onChange={(e) => handleFilterChange('remote', e.target.checked)}
            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="ml-2 text-sm text-gray-700">Remote Work Only</span>
        </label>
      </div>

      {/* Filter Summary */}
      {Object.keys(filters).length > 0 && (
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h3>
          <div className="space-y-1">
            {filters.province && (
              <div className="text-sm text-gray-600">
                <strong>Province:</strong> {filters.province}
              </div>
            )}
            {filters.category && (
              <div className="text-sm text-gray-600">
                <strong>Category:</strong> {filters.category}
              </div>
            )}
            {filters.type && (
              <div className="text-sm text-gray-600">
                <strong>Type:</strong> {filters.type.charAt(0).toUpperCase() + filters.type.slice(1)}
              </div>
            )}
            {filters.remote && (
              <div className="text-sm text-gray-600">
                <strong>Remote Work:</strong> Yes
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobFilters;