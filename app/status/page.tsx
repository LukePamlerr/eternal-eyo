import { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'API Status | meana.xyz',
  description: 'Real-time status of Eyo’s meana.xyz API.',
};

export default function Status() {
  const [status, setStatus] = useState({ status: 'loading', uptime: 'N/A' });

  useEffect(() => {
    async function fetchStatus() {
      try {
        // Replace with your actual meana.xyz API endpoint
        const res = await fetch('https://meana.xyz/api/status');
        const data = await res.json();
        setStatus(data);
      } catch (error) {
        setStatus({ status: 'error', uptime: 'N/A' });
      }
    }
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-light-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          API Status
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
        >
          <p className="text-lg mb-4">
            Status:{' '}
            <span
              className={`font-bold ${
                status.status === 'online' ? 'text-light-green' : status.status === 'error' ? 'text-red-500' : 'text-yellow-500'
              }`}
            >
              {status.status.toUpperCase()}
            </span>
          </p>
          <p className="text-lg">Uptime: {status.uptime}</p>
        </motion.div>
      </div>
    </div>
  );
}
