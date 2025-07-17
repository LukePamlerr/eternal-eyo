import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Eyo - Discord Bot Developer | meana.xyz',
  description: 'Portfolio of Eyo, crafting advanced Discord bots for ERLC private servers and communities.',
  openGraph: {
    title: 'Eyo - Discord Bot Developer | meana.xyz',
    description: 'Showcasing Discord bot development for ERLC and more.',
    images: ['/og-image.png'],
    url: 'https://meana.xyz',
  },
};

// Cloudinary setup
const cld = new Cloudinary({ cloud: { cloudName: 'your-cloud-name' } });

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

  // Video URL
  const videoUrl = cld.video('portfolio-video').resize(fill().width(800)).toURL();

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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Particles */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h2 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-light-green to-green-400 animate-pulse">
            Eyo's Portfolio
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Master Discord Bot Developer for ERLC Private Servers & Communities
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(152, 255, 152, 0.5)' }}
            className="bg-light-green text-black px-8 py-4 rounded-full font-bold hover:bg-gradient-to-r hover:from-light-green hover:to-green-400 transition-all duration-300"
          >
            Explore My Work
          </motion.a>
        </motion.div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Project</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="bg-black p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">ERLC Private Server Bot</h3>
            <p className="mb-4">Advanced bot for ERLC servers with role management and in-game integration.</p>
            <video controls className="w-full rounded-lg" src={videoUrl} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
