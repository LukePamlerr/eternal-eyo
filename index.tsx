import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Eyo - Discord Bot Developer Portfolio',
  description: 'Portfolio of Eyo, a Discord bot developer specializing in ERLC private servers and general Discord bots.',
  openGraph: {
    title: 'Eyo - Discord Bot Developer Portfolio',
    description: 'Showcasing Discord bot development for ERLC private servers and more by Eyo.',
    images: ['/og-image.png'],
  },
};

// Cloudinary setup for video
const cld = new Cloudinary({ cloud: { cloudName: 'your-cloud-name' } });

export default function Home() {
  // Example Cloudinary video URL (replace with your uploaded video public ID)
  const videoUrl = cld.video('portfolio-video').resize(fill().width(800)).toURL();

  return (
    <div className="min-h-screen bg-black text-light-green font-sans">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Eyo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#home" className="hover:text-gray-300 transition">Home</Link>
              <Link href="#about" className="hover:text-gray-300 transition">About</Link>
              <Link href="#projects" className="hover:text-gray-300 transition">Projects</Link>
              <Link href="#contact" className="hover:text-gray-300 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4 animate-pulse">Eyo's Portfolio</h2>
          <p className="text-xl mb-6">Crafting Discord Bots for ERLC Private Servers & Beyond</p>
          <Link href="#projects" className="bg-light-green text-black px-6 py-3 rounded-full hover:bg-gray-300 transition">
            View My Work
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">About Eyo</h2>
          <p className="text-lg max-w-3xl mx-auto">
            I'm Eyo, a passionate Discord bot developer specializing in creating robust bots for Emergency Response: Liberty County (ERLC) private servers and general Discord communities. My bots enhance server functionality, streamline moderation, and provide unique features tailored to your needs.
          </p>
        </div>
      </section>

      {/* Projects Section with Video */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">ERLC Private Server Bot</h3>
              <p className="mb-4">A custom Discord bot designed for ERLC private servers, offering role management, in-game integration, and automated moderation.</p>
              <video controls className="w-full rounded-lg" src={videoUrl} />
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">General Discord Bot</h3>
              <p className="mb-4">A versatile bot for Discord communities, featuring commands for fun, utility, and server management.</p>
              <Image src="/bot-image-placeholder.jpg" alt="Discord Bot" width={800} height={450} className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Interested in a custom Discord bot for your server? Reach out to me on Discord or via email!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://discord.gg/your-discord" className="bg-light-green text-black px-6 py-3 rounded-full hover:bg-gray-300 transition">
              Discord
            </a>
            <a href="mailto:eyo@example.com" className="bg-light-green text-black px-6 py-3 rounded-full hover:bg-gray-300 transition">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Eyo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
