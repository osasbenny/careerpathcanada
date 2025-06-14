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
  ArrowRight
} from 'lucide-react';
import { mockCategories } from '../../data/mockCategories';

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

const TopCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/jobs?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find opportunities in your field of expertise across Canada
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-red-200 border border-transparent hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">
                    {category.jobCount.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">
                    jobs available
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/categories')}
            className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold border-2 border-red-600 hover:shadow-lg"
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;