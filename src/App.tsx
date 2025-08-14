import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { TrendingUp, Users, Activity, Settings, Database, Zap, Sparkles } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface AppData {
  metrics: {
    total: number;
    active: number;
    growth: number;
    efficiency: number;
  };
  chartData: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      borderWidth: number;
      tension: number;
    }>;
  };
}

function App() {
  const [data, setData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Define features array
  const features: string[] = ['AI-powered expense categorization and analysis', 'Real-time updates on financial transactions', 'Complex state management for user accounts and transaction data', 'Data visualization for financial insights'];

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setData({
        metrics: {
          total: 1250,
          active: 892,
          growth: 23.5,
          efficiency: 94.2
        },
        chartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Performance',
            data: [65, 78, 82, 89, 94, 98],
            borderColor: 'rgba(147, 51, 234, 0.8)',
            backgroundColor: 'rgba(147, 51, 234, 0.1)',
            borderWidth: 2,
            tension: 0.4,
          }]
        }
      });
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading AI-Powered Finance Management System...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-100 mb-2">Error Loading Application</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                <Sparkles className="h-8 w-8 text-purple-400 mr-3" />
                AI-Powered Finance Management System
              </h1>
              <p className="text-gray-300 mt-1">The app provides an AI-powered solution to automate and manage financial transactions, enabling finance teams to build healthier businesses.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                <Activity className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm">Live</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Total Items</p>
                <p className="text-2xl font-bold text-white">{data.metrics.total.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Active Users</p>
                <p className="text-2xl font-bold text-white">{data.metrics.active.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-500/20 rounded-xl">
                <TrendingUp className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Growth Rate</p>
                <p className="text-2xl font-bold text-white">{data.metrics.growth}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 bg-pink-500/20 rounded-xl">
                <Settings className="h-6 w-6 text-pink-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Efficiency</p>
                <p className="text-2xl font-bold text-white">{data.metrics.efficiency}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Performance Trends</h3>
            <Line 
              data={data.chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      color: '#e2e8f0'
                    }
                  },
                  title: {
                    display: true,
                    text: 'Monthly Performance Metrics',
                    color: '#e2e8f0'
                  }
                },
                scales: {
                  x: {
                    ticks: {
                      color: '#94a3b8'
                    },
                    grid: {
                      color: 'rgba(148, 163, 184, 0.1)'
                    }
                  },
                  y: {
                    ticks: {
                      color: '#94a3b8'
                    },
                    grid: {
                      color: 'rgba(148, 163, 184, 0.1)'
                    }
                  }
                }
              }}
            />
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Feature Overview</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                    <Zap className="h-4 w-4 text-purple-400" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Interactive Demo</h3>
          <p className="text-gray-300 mb-6">
            This is a demonstration of the AI-Powered Finance Management System application. Built with modern React, 
            featuring responsive design, real-time data visualization, and professional UI/UX with a dark glass-morphism aesthetic.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Try Demo
            </button>
            <button className="px-6 py-3 border border-white/20 text-gray-200 rounded-xl hover:bg-white/10 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-black/20 backdrop-blur-xl border-t border-white/10 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              Built with React, Chart.js, and Tailwind CSS | 
              Demonstrates modern web development practices with glass-morphism design
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
