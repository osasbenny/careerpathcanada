import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import EmployerLogin from './pages/EmployerLogin';
import EmployerDashboard from './pages/EmployerDashboard';
import PostJob from './pages/PostJob';
import AdminDashboard from './pages/AdminDashboard';
import { JobProvider } from './context/JobContext';

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/job/:id" element={<JobDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/employer/login" element={<EmployerLogin />} />
              <Route path="/employer/dashboard" element={<EmployerDashboard />} />
              <Route path="/employer/post-job" element={<PostJob />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;