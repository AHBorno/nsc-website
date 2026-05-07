'use client';

import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedEvent() {
  return (

    <a href="/events" className="block">

      <section className="py-24 bg-slate-950/50" id="events">

        <div className="max-w-7xl mx-auto px-4">

          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">

            <div className="max-w-2xl">

              <h2 className="font-mono text-sm tracking-tighter text-sky-500 font-bold mb-2 uppercase">
                Upcoming Event
              </h2>

              <h3 className="font-display text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                National Science Fair & Co-curricular Competition-2026
              </h3>

            </div>

          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">

            <div className="lg:col-span-12 relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm shadow-2xl">

              <div className="relative aspect-[21/9] w-full">

                <Image 
                  src="/science-carnival-2026.png" 
                  alt="7th Inter School and College Science Carnival 2026 Banner"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

              </div>

            </div>

            <div className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-3xl">

              <div className="h-full bg-slate-900/40 border border-slate-800 p-8 md:p-12 backdrop-blur-sm group-hover:border-sky-500/30 transition-all shadow-2xl">

                <div className="flex flex-wrap gap-8 text-slate-400 mb-8">

                  <div className="flex items-center gap-2">

                    <Calendar className="text-sky-500 w-5 h-5" />

                    <span className="font-mono text-sm">
                      May 16-17, 2026
                    </span>

                  </div>

                  <a
                    href="https://maps.app.goo.gl/gMsodLn29fXDbhoV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                  >

                    <MapPin className="w-4 h-4 text-sky-500" />

                    <span className="font-mono text-sm">
                      Noubahini College Dhaka
                    </span>

                  </a>

                </div>

                <p className="text-lg text-slate-400 leading-relaxed mb-0">
                  Join the grandest celebration of science and technology in the region.
                  Competitions, workshops, and much more. Experience two days of pure
                  scientific madness.
                </p>

              </div>

            </div>
            
            <div className="lg:col-span-5 bg-sky-500 rounded-3xl p-10 flex flex-col justify-center text-slate-950 items-center text-center shadow-lg shadow-sky-500/25">

              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-4">
                Take Part Today
              </h4>

              <p className="text-2xl font-black mb-8 leading-tight">
                Ready to showcase your talent?
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://forms.gle/owZk6ZCsojQC2cid9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-5 bg-slate-950 text-white font-bold rounded-xl group transition-all text-sm uppercase tracking-widest"
              >

                Register Now

              </motion.a>

            </div>

          </div>

        </div>

      </section>

    </a>
  );
}