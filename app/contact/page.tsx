import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Contact Eyo | meana.xyz',
  description: 'Get in touch with Eyo for custom Discord bot development.',
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-light-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-gray-900 rounded-lg border border-light-green focus:outline-none focus:ring-2 focus:ring-light-green"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-gray-900 rounded-lg border border-light-green focus:outline-none focus:ring-2 focus:ring-light-green"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 bg-gray-900 rounded-lg border border-light-green focus:outline-none focus:ring-2 focus:ring-light-green"
                rows={5}
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(152, 255, 152, 0.5)' }}
              className="w-full bg-light-green text-black px-6 py-3 rounded-full font-bold hover:bg-gradient-to-r hover:from-light-green hover:to-green-400 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
          <div className="mt-6 flex justify-center space-x-4">
            <motion.a
              href="https://discord.gg/your-discord"
              whileHover={{ scale: 1.1 }}
              className="bg-light-green text-black px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-light-green hover:to-green-400 transition-all duration-300"
            >
              Discord
            </motion.a>
            <motion.a
              href="mailto:eyo@example.com"
              whileHover={{ scale: 1.1 }}
              className="bg-light-green text-black px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-light-green hover:to-green-400 transition-all duration-300"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
