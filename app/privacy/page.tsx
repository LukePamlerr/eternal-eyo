import { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Privacy Policy | meana.xyz',
  description: 'Privacy Policy for Eyo’s services and meana.xyz API.',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-light-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Privacy Policy
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="prose max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">1. Information We Collect</h3>
          <p>
            We collect information you provide directly, such as name and email, through our contact form. We also collect usage data for the meana.xyz API.
          </p>
          <h3 className="text-2xl font-bold mb-4">2. How We Use Your Information</h3>
          <p>
            Your information is used to provide and improve our services, respond to inquiries, and monitor API usage. We do not share your data with third parties except as required by law.
          </p>
          <h3 className="text-2xl font-bold mb-4">3. Data Security</h3>
          <p>
            We implement reasonable measures to protect your data, but no system is completely secure. You use our services at your own risk.
          </p>
          <h3 className="text-2xl font-bold mb-4">4. Cookies</h3>
          <p>
            We may use cookies to enhance your experience. You can disable cookies in your browser settings, but this may affect site functionality.
          </p>
          <h3 className="text-2xl font-bold mb-4">5. Contact</h3>
          <p>
            For privacy-related questions, contact us at <a href="mailto:contact@meana.xyz" className="text-light-green">contact@meanx.xyz</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
