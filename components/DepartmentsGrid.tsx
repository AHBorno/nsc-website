'use client';

import { motion } from 'motion/react';
import { Microscope, Code, Binary, FlaskConical, Globe, BookOpen } from 'lucide-react';

const departments = [
  {
    name: 'Physics & Astronomy',
    description: 'Exploring the laws of the universe from atoms to galaxies.',
    icon: Globe,
    color: 'from-sky-500/20 to-indigo-500/20',
  },
  {
    name: 'IT & Robotics',
    description: 'Building the future with code, circuits, and automation.',
    icon: Code,
    color: 'from-sky-400/20 to-blue-500/20',
  },
  {
    name: 'Chemistry',
    description: 'Understanding the building blocks of matter and their reactions.',
    icon: FlaskConical,
    color: 'from-sky-300/20 to-cyan-500/20',
  },
  {
    name: 'Biology & Environment',
    description: 'Studying life sciences and sustainable solutions for nature.',
    icon: Microscope,
    color: 'from-sky-200/20 to-emerald-500/20',
  },
  {
    name: 'Mathematics & Logic',
    description: 'Solving complex problems through numbers and rational thinking.',
    icon: Binary,
    color: 'from-sky-100/20 to-indigo-500/20',
  },
  {
    name: 'Research & Publication',
    description: 'Documenting discoveries and sharing knowledge with the world.',
    icon: BookOpen,
    color: 'from-white/5 to-sky-500/20',
  },
];

export default function DepartmentsGrid() {
  return (
    <section className="py-24" id="departments">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-mono text-sm tracking-tighter text-sky-500 font-bold mb-2 uppercase">Our Specializations</h2>
          <h3 className="font-display text-4xl md:text-5xl font-black text-white">6 Core Departments</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[2.5rem] glass relative overflow-hidden group cursor-default`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <dept.icon className="w-10 h-10 text-sky-400 mb-8 group-hover:text-white transition-colors" />
                <h4 className="font-display font-bold text-2xl mb-4 tracking-tight text-white">{dept.name}</h4>
                <p className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
