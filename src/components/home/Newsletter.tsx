import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Job Opportunities
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Get the latest jobs, career tips, and industry insights delivered to your inbox weekly
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>

        {message && (
          <div className={`mt-4 p-4 rounded-lg flex items-center justify-center space-x-2 ${
            status === 'success' 
              ? 'bg-green-500/20 border border-green-400/30' 
              : 'bg-red-500/20 border border-red-400/30'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-400" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-400" />
            )}
            <span className="text-sm">{message}</span>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="font-semibold mb-1">25,000+</div>
            <div className="text-gray-300">New jobs weekly</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="font-semibold mb-1">50,000+</div>
            <div className="text-gray-300">Subscribers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="font-semibold mb-1">No Spam</div>
            <div className="text-gray-300">Unsubscribe anytime</div>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-300">
          By subscribing, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;