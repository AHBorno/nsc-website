'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  '/gallery/event4.jpg',
  '/gallery/event3.jpg',
  '/gallery/event2.jpg',
  '/gallery/event1.jpg',
];

export default function EventsGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-16">
          <p className="text-sky-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">
            Memories & Moments
          </p>

          <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            EVENTS
            <span className="text-gradient"> GALLERY</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl">
            A glimpse into our workshops, science fairs, olympiads,
            seminars, and unforgettable moments from previous events.
          </p>
        </div>

        <a href="/events#events-gallery">

          <div className="relative overflow-hidden rounded-[2rem] border border-sky-500/20 glass h-[300px] md:h-[650px] cursor-pointer hover:scale-[1.01] transition-all duration-500">

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -120, opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0"
              >

                <Image
                  src={images[current]}
                  alt="Event Gallery"
                  fill
                  className="object-cover"
                  priority
                />

              </motion.div>

            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">

              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? 'w-10 bg-sky-500'
                      : 'w-2 bg-white/40'
                  }`}
                />
              ))}

            </div>

          </div>

        </a>

      </div>
    </section>
  );
}