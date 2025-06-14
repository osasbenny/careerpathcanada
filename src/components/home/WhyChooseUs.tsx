import React from 'react';
import { Shield, Zap, Users, Award, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Employers',
    description: 'All employers are verified to ensure legitimate job opportunities and protect job seekers from scams.'
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    description: 'Job listings are updated daily from multiple sources to bring you the latest opportunities.'
  },
  {
    icon: Users,
    title: 'Trusted by Thousands',
    description: 'Over 100,000 job seekers and 5,000+ companies trust CareerPath Canada for their hiring needs.'
  },
  {
    icon: Award,
    title: 'Quality Opportunities',
    description: 'Hand-picked featured jobs from top Canadian employers across all provinces and territories.'
  },
  {
    icon: Clock,
    title: 'Easy Application',
    description: 'Apply to jobs quickly with our streamlined application process and direct employer connections.'
  },
  {
    icon: Globe,
    title: 'Canada-Wide Coverage',
    description: 'Find opportunities from coast to coast, including remote positions and local opportunities.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CareerPath Canada?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to connecting talented professionals with their dream careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Find Your Dream Job?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of professionals who've found their perfect career match
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Job Search
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;