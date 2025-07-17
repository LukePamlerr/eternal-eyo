import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

export const metadata: Metadata = {
  title: 'Projects | meana.xyz',
  description: 'Explore Eyo’s Discord bot projects for ERLC and communities.',
};

const cld = new Cloudinary({ cloud: { cloudName: 'your-cloud-name' } });

export default function Projects() {
  const projects = [
    {
      title: 'ERLC Cord - WIP',
      description: 'A robust bot for ERLC private servers with role management, in-game integration, and moderation tools.',
      video: cld.video('portfolio-video').resize(fill().width(800)).toURL(),
    },
    {
      title: 'Creative - WIP',
      description: 'A versatile bot for Discord communities with fun commands, utilities, and server management features.',
      image: '/bot-image-placeholder.jpg',
    },
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
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(152, 255, 152, 0.5)' }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              {project.video ? (
                <video controls className="w-full rounded-lg" src={project.video} />
              ) : (
                <Image src={project.image} alt={project.title} width={800} height={450} className="w-full rounded-lg" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
