'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';

const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Departments', href: '/departments' },
  { name: 'Events', href: '/events' },
  { name: 'Committee', href: '/committee' },
  { name: 'Achievements', href: '/achievements' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass h-16' : 'bg-transparent h-20'
      } border-b border-slate-800/50`}
    >
      <div className="max-w-7xl mx-auto px-10 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full relative overflow-hidden bg-[#0A0D14] border border-yellow-500/20">
            <Image
              src="/logo.png"
              alt="NSC Logo"
              fill
              className="object-contain p-1.5"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-200">Navians&apos; Science Club</span>
            <span className="text-[10px] uppercase font-semibold text-slate-500">Noubahini College Dhaka</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-sky-400 transition-colors relative group"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/events"
            className="px-6 py-2 rounded-lg bg-sky-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/10 p-4 md:hidden flex flex-col gap-4"
        >
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/events"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 rounded-xl bg-sky-500 text-slate-950 text-center font-bold uppercase tracking-widest text-xs"
          >
            Register Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
