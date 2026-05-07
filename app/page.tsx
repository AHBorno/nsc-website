import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import DepartmentsGrid from '@/components/DepartmentsGrid';
import FeaturedEvent from '@/components/FeaturedEvent';
import Footer from '@/components/Footer';
import EventsGallery from '@/components/EventsGallery';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">

      <Navbar />

      <Hero />

      <FeaturedEvent />

      <About />

      {/* Executive Committee Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">

          <div className="mb-16">
            <p className="text-sky-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">
              Executive Committee
            </p>

            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              OUR EXECUTIVE
              <span className="text-gradient"> COMMITTEE</span>
            </h2>

            <p className="text-slate-400 text-lg max-w-2xl">
              Meet the leadership team of Navians&apos; Science Club for the
              2025-26 session.
            </p>
          </div>

          <a href="/committee">

            <div className="glass rounded-[2rem] overflow-hidden border border-sky-500/20 hover:border-sky-500/50 transition-all duration-500 hover:scale-[1.01] cursor-pointer">

              <Image
                src="/executive-2025-26.jpg"
                alt="Executive Committee"
                width={1600}
                height={900}
                className="w-full object-cover"
              />

            </div>

          </a>

        </div>
      </section>

      <DepartmentsGrid />

      {/* Events Gallery */}
      <EventsGallery />
      
      {/* Newsletter/CTA Section */}
      <section className="py-32 bg-sky-500 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -mr-48 -mt-48" />

        <div className="max-w-7xl mx-auto px-10 relative z-10">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="font-display text-5xl md:text-6xl font-black mb-6 text-slate-950 leading-none tracking-tighter">
                READY TO JOIN THE REVOLUTION?
              </h2>

              <p className="text-xl text-slate-900 font-medium opacity-80">
                Be part of the most active science community in the country.
                Let&apos;s build the future together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <a 
                href="https://forms.gle/owZk6ZCsojQC2cid9" 
                target="_blank" 
                className="px-10 py-5 bg-slate-950 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl flex-1 text-center"
              >
                Sign Up Now
              </a>

              <a 
                href="https://www.facebook.com/nsc.ncd" 
                target="_blank" 
                className="px-10 py-5 bg-transparent border-2 border-slate-950 text-slate-950 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all flex-1 text-center"
              >
                Follow Status
              </a>

            </div>

          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}