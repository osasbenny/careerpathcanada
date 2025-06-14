import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedJobs from '../components/home/FeaturedJobs';
import TopCategories from '../components/home/TopCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LatestBlog from '../components/home/LatestBlog';
import Newsletter from '../components/home/Newsletter';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedJobs />
      <TopCategories />
      <WhyChooseUs />
      <LatestBlog />
      <Newsletter />
    </div>
  );
};

export default Home;