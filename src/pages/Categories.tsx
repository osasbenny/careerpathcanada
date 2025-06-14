import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code, 
  Heart, 
  DollarSign, 
  Megaphone, 
  GraduationCap, 
  TrendingUp, 
  Settings, 
  Users,
  ArrowRight,
  Search
} from 'lucide-react';
import { mockCategories } from '../data/mockCategories';

const iconMap = {
  Code,
  Heart,
  DollarSign,
  Megaphone,
  GraduationCap,
  TrendingUp,
  Settings,
  Users,
};

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/jobs?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Job Categories
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Find your perfect career path across Canada's most in-demand industries
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group hover:border-red-200 border border-transparent hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-red-600">
                      {category.jobCount.toLocaleString()}
                    </span>
                    <span className="text-gray-500">jobs</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-red-600 group-hover:text-red-700 transition-colors">
                    <span className="font-medium">Explore Jobs</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <Search className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't Find Your Category?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse all available jobs or use our advanced search to find opportunities that match your specific skills and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/jobs')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Browse All Jobs
            </button>
            <button
              onClick={() => navigate('/jobs')}
              className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold border-2 border-red-600"
            >
              Advanced Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;