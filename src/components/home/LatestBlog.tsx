import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { mockBlogPosts } from '../../data/mockBlogPosts';

const LatestBlog: React.FC = () => {
  const navigate = useNavigate();
  const latestPosts = mockBlogPosts.slice(0, 3);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Insights & Advice
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay ahead with expert tips, industry trends, and career guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/blog')}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Read More Articles</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;