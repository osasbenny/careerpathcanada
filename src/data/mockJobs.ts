import { Job } from '../types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Shopify',
    location: 'Toronto, ON',
    province: 'Ontario',
    type: 'full-time',
    category: 'Technology',
    salary: '$90,000 - $120,000',
    description: 'Join our world-class engineering team to build scalable e-commerce solutions that power millions of businesses worldwide. You will work on cutting-edge technologies and have the opportunity to impact global commerce.',
    requirements: [
      '5+ years of software development experience',
      'Proficiency in Ruby on Rails, JavaScript, or Python',
      'Experience with cloud platforms (AWS, GCP)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Comprehensive health and dental coverage',
      'Stock options',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    postedDate: '2024-01-15T10:00:00Z',
    applicationEmail: 'careers@shopify.com',
    companyLogo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    featured: true,
    remote: true,
    source: 'manual'
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'RBC Royal Bank',
    location: 'Vancouver, BC',
    province: 'British Columbia',
    type: 'full-time',
    category: 'Marketing',
    salary: '$70,000 - $85,000',
    description: 'Lead marketing initiatives for our digital banking products. Develop comprehensive marketing strategies that drive customer acquisition and engagement across multiple channels.',
    requirements: [
      '3+ years of marketing experience',
      'Digital marketing expertise',
      'Strong analytical skills',
      'Bachelor\'s degree in Marketing or related field'
    ],
    benefits: [
      'Banking benefits and discounts',
      'Pension plan',
      '4 weeks vacation',
      'Professional development opportunities'
    ],
    postedDate: '2024-01-14T14:30:00Z',
    applicationUrl: 'https://jobs.rbc.com/apply',
    featured: true,
    remote: false,
    source: 'adzuna'
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Element AI',
    location: 'Montreal, QC',
    province: 'Quebec',
    type: 'full-time',
    category: 'Technology',
    salary: '$80,000 - $110,000',
    description: 'Apply machine learning and statistical analysis to solve complex business problems. Work with large datasets to derive actionable insights and build predictive models.',
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      'Experience with Python, R, or SQL',
      'Knowledge of machine learning algorithms',
      'Strong communication skills in English and French'
    ],
    benefits: [
      'Health and wellness benefits',
      'Stock options',
      'Flexible hours',
      'Learning and development budget'
    ],
    postedDate: '2024-01-13T09:15:00Z',
    applicationEmail: 'talent@elementai.com',
    featured: false,
    remote: true,
    source: 'jooble'
  },
  {
    id: '4',
    title: 'Registered Nurse',
    company: 'Alberta Health Services',
    location: 'Calgary, AB',
    province: 'Alberta',
    type: 'full-time',
    category: 'Healthcare',
    salary: '$65,000 - $85,000',
    description: 'Provide excellent patient care in our acute care facility. Join a team dedicated to improving health outcomes for Albertans through compassionate, quality healthcare.',
    requirements: [
      'Current registration with CRNA',
      'BScN or equivalent nursing degree',
      '2+ years of acute care experience preferred',
      'Strong interpersonal and communication skills'
    ],
    benefits: [
      'Comprehensive health benefits',
      'Pension plan',
      'Professional development support',
      'Flexible scheduling options'
    ],
    postedDate: '2024-01-12T16:45:00Z',
    applicationUrl: 'https://careers.ahs.ca',
    featured: false,
    remote: false,
    source: 'careerjet'
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'Wealthsimple',
    location: 'Toronto, ON',
    province: 'Ontario',
    type: 'full-time',
    category: 'Product',
    salary: '$95,000 - $125,000',
    description: 'Drive product strategy and execution for our investment platform. Work cross-functionally to deliver features that help Canadians build wealth and achieve financial goals.',
    requirements: [
      '4+ years of product management experience',
      'Experience in fintech or financial services',
      'Strong analytical and strategic thinking skills',
      'Excellent communication and leadership abilities'
    ],
    benefits: [
      'Equity participation',
      'Health and dental coverage',
      'Unlimited vacation policy',
      'Professional development budget'
    ],
    postedDate: '2024-01-11T11:20:00Z',
    applicationEmail: 'careers@wealthsimple.com',
    featured: true,
    remote: true,
    source: 'manual'
  },
  {
    id: '6',
    title: 'UX Designer',
    company: 'Hootsuite',
    location: 'Vancouver, BC',
    province: 'British Columbia',
    type: 'contract',
    category: 'Design',
    salary: '$60 - $80/hour',
    description: 'Design intuitive user experiences for our social media management platform. Collaborate with product and engineering teams to create designs that delight millions of users.',
    requirements: [
      '3+ years of UX design experience',
      'Proficiency in Figma, Sketch, or similar tools',
      'Strong portfolio demonstrating design thinking',
      'Experience with user research and testing'
    ],
    benefits: [
      'Flexible contract terms',
      'Remote work options',
      'Access to design tools and resources',
      'Networking opportunities'
    ],
    postedDate: '2024-01-10T13:10:00Z',
    applicationEmail: 'design-jobs@hootsuite.com',
    featured: false,
    remote: true,
    source: 'remotive'
  }
];