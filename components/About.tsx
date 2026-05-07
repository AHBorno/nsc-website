'use client';

import { motion } from 'motion/react';
import { History, Target, Zap } from 'lucide-react';

const values = [
  {
    title: 'Established in 2017',
    description: 'A legacy of scientific excellence at Noubahini College Dhaka for over 9 years.',
    icon: History,
  },
  {
    title: 'Our Vision',
    description: 'To nurture the hidden talents of students and provide a platform for scientific innovation.',
    icon: Target,
  },
  {
    title: 'Why NSC?',
    description: "We believe science isn&apos;t just in books; it&apos;s in the way we think and solve problems.",
    icon: Zap,
  },
];

export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-mono text-sm tracking-tighter text-sky-500 font-bold mb-2">ESTD 2017</h2>
            <h3 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight text-white leading-[0.9]">Navians&apos; Science Club: <br /><span className="text-gradient">Where Curiosity Meets Innovation.</span></h3>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-sans">
              <p>
                Navians&apos; Science Club (NSC) was founded in 2017 by a group of passionate science enthusiasts at Noubahini College Dhaka. 
                Our mission is to create a vibrant scientific environment where students can explore the wonders of the universe beyond their textbooks.
              </p>
              <p>
                From organizing workshops and logic sessions to hosting national-level carnivals, NSC has become a hub for the next generation of 
                scientists, engineers, and visionaries. We strive to develop critical thinking, problem-solving skills, and a true love for discovery.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2rem] flex gap-6 group hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-sky-500/10">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2 text-white">{item.title}</h4>
                  <p className="text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
