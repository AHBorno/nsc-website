'use client';

import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingFacebook() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/we_are_navians?utm_source=qr&igsh=MXJhdGdlcXViYm9uaw=="
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-2xl shadow-pink-500/30 flex items-center justify-center border border-white/10 hover:shadow-pink-500/50 transition-all duration-300">

          <Instagram className="w-7 h-7 text-white" />

        </div>
      </motion.a>

      {/* Facebook */}
      <motion.a
        href="https://facebook.com/nsc.ncd"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-14 h-14 rounded-full bg-[#1877F2] shadow-2xl shadow-blue-500/30 flex items-center justify-center border border-white/10 hover:shadow-blue-500/50 transition-all duration-300">

          <Facebook className="w-7 h-7 text-white fill-white" />

        </div>
      </motion.a>

    </div>
  );
}