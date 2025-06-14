import React, { createContext, useContext, useState, useEffect } from 'react';
import { Job, FilterOptions, User } from '../types';
import { mockJobs } from '../data/mockJobs';

interface JobContextType {
  jobs: Job[];
  filteredJobs: Job[];
  filters: FilterOptions;
  currentUser: User | null;
  isLoading: boolean;
  updateFilters: (newFilters: Partial<FilterOptions>) => void;
  clearFilters: () => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addJob: (job: Omit<Job, 'id' | 'postedDate'>) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    filterJobs();
  }, [filters, jobs]);

  const filterJobs = () => {
    let filtered = [...jobs];

    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword)
      );
    }

    if (filters.location) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.province) {
      filtered = filtered.filter(job => job.province === filters.province);
    }

    if (filters.category) {
      filtered = filtered.filter(job => job.category === filters.category);
    }

    if (filters.type) {
      filtered = filtered.filter(job => job.type === filters.type);
    }

    if (filters.remote) {
      filtered = filtered.filter(job => job.remote);
    }

    setFilteredJobs(filtered);
  };

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Mock authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'admin@careerpathcanada.ca') {
      setCurrentUser({
        id: '1',
        email,
        name: 'Admin User',
        role: 'admin',
        verified: true
      });
      setIsLoading(false);
      return true;
    } else if (email.includes('@')) {
      setCurrentUser({
        id: '2',
        email,
        name: 'Employer User',
        role: 'employer',
        company: 'Tech Corp',
        verified: true
      });
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addJob = (jobData: Omit<Job, 'id' | 'postedDate'>) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      postedDate: new Date().toISOString(),
    };
    setJobs(prev => [newJob, ...prev]);
  };

  return (
    <JobContext.Provider value={{
      jobs,
      filteredJobs,
      filters,
      currentUser,
      isLoading,
      updateFilters,
      clearFilters,
      login,
      logout,
      addJob
    }}>
      {children}
    </JobContext.Provider>
  );
};