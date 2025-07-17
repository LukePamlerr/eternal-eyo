import { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'About Eyo | meana.xyz',
  description: 'Learn about Eyo, a Discord bot developer specializing in ERLC private servers.',
};

export default function About() {
  const timeline = [
    { year: 'Late 2023', event: 'Started developing Discord bots for ERLC private servers.' },
    { year: '2024', event: 'Launched general-purpose Discord bots for communities.' },
    { year: '2025', event: 'Built meana.xyz API for bot integrations.' },
  ];

  return (
    <div className="min-h-screen bg-black text-light-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Eyo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-3xl mx-auto mb-12"
        >
          I'm Eyo, a passionate developer with a focus on creating powerful Discord bots for Emergency Response: Liberty County (ERLC) private servers and general Discord communities. My work combines technical expertise with a deep understanding of community needs, delivering tailored solutions that enhance server functionality and user engagement.
        </motion.p>
        <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="w-24 text-right text-light-green font-bold">{item.year}</div>
              <div className="flex-1 bg-gray-900 p-4 rounded-lg">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
