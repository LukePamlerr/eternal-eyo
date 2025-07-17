import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Eyo - Discord Bot Developer | meana.xyz',
  description: 'Showcase of Eyo’s Discord bot development for ERLC private servers and communities.',
  openGraph: {
    title: 'Eyo - Discord Bot Developer | meana.xyz',
    description: 'Watch Eyo’s Discord bot demos and explore custom bot solutions.',
    images: ['/og-image.png'],
    url: 'https://meana.xyz',
    type: 'website',
  },
};

export default function Home() {
  // Particle animation config
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    particles: {
      number: { value: 50 },
      color: { value: '#98FF98' },
      size: { value: { min: 1, max: 5 } },
      move: { speed: 2, direction: 'none' },
      links: { enable: true, color: '#98FF98', opacity: 0.5 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
    },
  };

  // Video path in public folder
  const videoUrl = '/videos/ScreenRecording_07-17-2025_00-15-46_1.mp4';

  return (
    <div className="min-h-screen bg-black text-light-green font-sans">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Eyo | meana.xyz</h1>
            </div>
            <div className="flex items-center space-x-4">
              {['Home', 'About', 'Projects', 'Status', 'Contact', 'Terms', 'Privacy'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative px-3 py-2 text-sm font-medium hover:text-light-green transition-all duration-300 group"
                >
                  <span>{item}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-green"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-light-green to-green-400 animate-pulse">
            Eyo’s Discord Bot Showcase
          </h2>
          <p className="text-xl mb-6">
            Watch my latest work: Advanced Discord bots for ERLC private servers and communities.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: '0 0 30px rgba(152, 255, 152, 0.7)' }}
            className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden"
          >
            <video
              controls
              className="w-full"
              src={videoUrl}
              poster="/video-poster.jpg"
              onError={() => alert('Failed to load video. Please try again later.')}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <motion.div
              className="absolute inset-0 border-4 border-light-green opacity-0"
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(152, 255, 152, 0.5)' }}
            className="mt-6 inline-block bg-light-green text-black px-8 py-4 rounded-full font-bold hover:bg-gradient-to-r hover:from-light-green hover:to-green-400 transition-all duration-300"
          >
            More Projects
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
