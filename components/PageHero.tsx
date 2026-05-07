'use client';

import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-48 pb-24 relative overflow-hidden bg-[#05070A] border-b border-slate-800/50">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none text-white uppercase"
        >
          {title.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-gradient">{title.split(' ').slice(-1)}</span>
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl font-sans leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
