'use client';

import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FeaturedEvent() {

  const galleryImages = [
     '/gallery/event14.jpg',
    '/gallery/event13.jpg',
    '/gallery/event12.jpg',
    '/gallery/event11.jpg',
    '/gallery/event10.jpg',
    '/gallery/event5.jpg',
    '/gallery/event6.jpg',
    '/gallery/event7.jpg',
    '/gallery/event8.jpg',
    '/gallery/event9.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );

    }, 3500);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="py-24 bg-slate-950/50" id="events">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-12">

          <div className="max-w-4xl">

            <h2 className="font-mono text-sm tracking-tighter text-sky-500 font-bold mb-2 uppercase">
              Upcoming Event
            </h2>

            <h3 className="font-display text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              National Science Fair & Co-curricular Competition-2026
            </h3>

          </div>

        </div>

        {/* Main Event Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-20">

          {/* Event Banner */}
          <a
            href="/events"
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm shadow-2xl group"
          >

            <div className="relative aspect-[16/10] w-full">

              <Image
                src="/science-carnival-2026.png"
                alt="National Science Fair Banner"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />

            </div>

          </a>

          {/* Event Details */}
          <div className="relative overflow-hidden rounded-3xl">

            <div className="h-full bg-slate-900/40 border border-slate-800 p-8 md:p-12 backdrop-blur-sm hover:border-sky-500/30 transition-all shadow-2xl flex flex-col justify-center">

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
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors"
                >

                  <MapPin className="w-4 h-4 text-sky-500" />

                  <span className="font-mono text-sm">
                    Noubahini College Dhaka
                  </span>

                </a>

              </div>

              <p className="text-lg text-slate-400 leading-relaxed mb-10">

                Join the grandest celebration of science and technology in the region.
                Competitions, workshops, project displays, olympiads, and much more.
                Experience two days of pure scientific madness.

              </p>

              <div className="flex">

                <a
                  href="/events"
                  className="px-8 py-5 border border-slate-700 hover:border-sky-500/40 text-white rounded-2xl transition-all text-sm uppercase tracking-widest font-bold text-center"
                >

                  Explore Event

                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Event Gallery */}
        <div>

          <div className="mb-10">

            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-white">

              SHOTS
              <span className="text-gradient"> OF THE DAY</span>

            </h2>

            <p className="text-slate-400 mt-4 text-lg">
              Highlights from National Science Fair & Co-curricular Competetion.
            </p>

          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">

          <div className="relative aspect-[21/9] overflow-hidden">

           <motion.div
                    className="flex h-full"
                    animate={{
                    x: `-${currentSlide * 100}%`,
                    }}
                transition={{
                     duration: 0.8,
                      ease: 'easeInOut',
                    }}
            >

                {galleryImages.map((image, index) => (

            <div
                key={index}
                className="relative min-w-full h-full"
            >

            <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover"
            />

            </div>

                 ))}

           </motion.div>

          </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">

              {galleryImages.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-sky-500 w-10'
                      : 'bg-white/40 w-3'
                  }`}
                />

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}