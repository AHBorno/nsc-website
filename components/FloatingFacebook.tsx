'use client';

import { Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingFacebook() {
  return (
    <motion.a
      href="https://facebook.com/nsc.ncd"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <div className="w-14 h-14 rounded-full bg-[#1877F2] shadow-2xl shadow-blue-500/30 flex items-center justify-center border border-white/10 hover:shadow-blue-500/50 transition-all duration-300">

        <Facebook className="w-7 h-7 text-white fill-white" />

      </div>
    </motion.a>
  );
}