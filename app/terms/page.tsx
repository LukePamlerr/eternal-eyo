import { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Terms of Service | meana.xyz',
  description: 'Terms of Service for Eyo’s services and meana.xyz API.',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-light-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Terms of Service
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="prose max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h3>
          <p>
            By accessing or using meana.xyz or any services provided by Eyo, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.
          </p>
          <h3 className="text-2xl font-bold mb-4">2. Services</h3>
          <p>
            Eyo provides Discord bot development services and API access via meana.xyz. We reserve the right to modify or discontinue services at any time.
          </p>
          <h3 className="text-2xl font-bold mb-4">3. User Conduct</h3>
          <p>
            You agree not to use our services for any unlawful or prohibited activities. Misuse of the meana.xyz API may result in suspension or termination of access.
          </p>
          <h3 className="text-2xl font-bold mb-4">4. Limitation of Liability</h3>
          <p>
            Eyo is not liable for any damages resulting from the use or inability to use our services, including data loss or service interruptions.
          </p>
          <h3 className="text-2xl font-bold mb-4">5. Contact</h3>
          <p>
            For questions about these Terms, contact us at <a href="mailto:contact@meana.xyz" className="text-light-green">contact@meana.xyz</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
