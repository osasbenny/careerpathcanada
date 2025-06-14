import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Edit, Trash2, Users, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { useJobs } from '../context/JobContext';

const EmployerDashboard: React.FC = () => {
  const { currentUser, jobs } = useJobs();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  if (!currentUser) {
    navigate('/employer/login');
    return null;
  }

  const userJobs = jobs.filter(job => job.company === currentUser.company || job.source === 'manual');

  const stats = {
    totalJobs: userJobs.length,
    activeJobs: userJobs.filter(job => {
      const postedDate = new Date(job.postedDate);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return postedDate > thirtyDaysAgo;
    }).length,
    applications: Math.floor(Math.random() * 200) + 50,
    views: Math.floor(Math.random() * 1000) + 200
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Employer Dashboard</h1>
              <p className="text-gray-600">Welcome back, {currentUser.name}</p>
            </div>
            <button
              onClick={() => navigate('/employer/post-job')}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Post New Job</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalJobs}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                <p className="text-3xl font-bold text-gray-900">{stats.activeJobs}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Applications</p>
                <p className="text-3xl font-bold text-gray-900">{stats.applications}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-3xl font-bold text-gray-900">{stats.views}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'jobs'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Jobs ({userJobs.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">New application received for Software Engineer position</span>
                      <span className="text-gray-500 text-sm">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Job posting "Marketing Manager" has been viewed 15 times</span>
                      <span className="text-gray-500 text-sm">5 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700">Profile updated successfully</span>
                      <span className="text-gray-500 text-sm">1 day ago</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      onClick={() => navigate('/employer/post-job')}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <Plus className="h-8 w-8 text-red-600 mb-2" />
                      <h4 className="font-semibold text-gray-900">Post New Job</h4>
                      <p className="text-gray-600 text-sm">Create a new job listing</p>
                    </button>
                    
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Users className="h-8 w-8 text-blue-600 mb-2" />
                      <h4 className="font-semibold text-gray-900">View Applications</h4>
                      <p className="text-gray-600 text-sm">Review candidate applications</p>
                    </button>
                    
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                      <h4 className="font-semibold text-gray-900">Analytics</h4>
                      <p className="text-gray-600 text-sm">View job performance metrics</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Your Job Listings</h3>
                  <button
                    onClick={() => navigate('/employer/post-job')}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Post Job</span>
                  </button>
                </div>

                {userJobs.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs posted yet</h3>
                    <p className="text-gray-600 mb-6">Start by posting your first job to attract top talent.</p>
                    <button
                      onClick={() => navigate('/employer/post-job')}
                      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                    >
                      Post Your First Job
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userJobs.map((job) => (
                      <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <span>{job.location}</span>
                              <span>•</span>
                              <span className="capitalize">{job.type}</span>
                              <span>•</span>
                              <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                            </div>
                            <p className="text-gray-700 line-clamp-2">{job.description}</p>
                          </div>
                          
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => navigate(`/job/${job.id}`)}
                              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                              title="View Job"
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                            <button
                              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                              title="Edit Job"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button
                              className="p-2 text-red-600 hover:text-red-700 transition-colors"
                              title="Delete Job"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;