
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: 'linear-gradient(135deg, #0A0A0B 0%, #0F0F10 25%, #1A1B1E 100%)'
    }}>
      <div className="text-center max-w-2xl mx-auto px-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-br from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Welcome to TOOLChat
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Experience the power of AI-driven file processing with our elegant, professional interface.
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/index.html" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white
                     transition-all duration-300 hover:transform hover:-translate-y-1 relative overflow-hidden
                     hover:shadow-lg hover:shadow-blue-500/25"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
            }}
          >
            <span className="relative z-10">Launch TOOLChat</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            If you're not redirected automatically, click the button above
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm
                        hover:border-gray-700 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Lightning Fast</h3>
            <p className="text-gray-400 text-sm">Process your files in seconds with our optimized AI algorithms</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm
                        hover:border-gray-700 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Secure</h3>
            <p className="text-gray-400 text-sm">Your files are processed securely and never stored permanently</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm
                        hover:border-gray-700 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">User Friendly</h3>
            <p className="text-gray-400 text-sm">Intuitive interface designed for both beginners and professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
