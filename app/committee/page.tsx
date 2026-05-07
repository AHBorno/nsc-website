import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

export default function CommitteePage() {
  return (
    <main>

      <Navbar />

      <PageHero 
        title="Executive Committee" 
        subtitle="The dedicated team responsible for leading the club towards its vision for the 2026-2027 session." 
      />

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-4">

          {/* Executive Committee 2025-26 Group Photo */}
          <div className="mb-24">

            <h2 className="font-display text-5xl md:text-6xl font-black mb-6 text-white uppercase tracking-tighter">
              OUR EXECUTIVE
              <span className="text-sky-500"> COMMITTEE 2025-26</span>
            </h2>

            <p className="text-slate-400 text-lg mb-10">
              The leadership team of Navians&apos; Science Club for the 2025-26 session.
            </p>

            <div className="overflow-hidden rounded-[2rem] border border-sky-500/20 glass">

              <img
                src="/executive-2025-26.jpg"
                alt="Executive Committee 2025-26"
                className="w-full object-cover"
              />

            </div>

          </div>

          {/* Other Wings */}
          <div>

            <h2 className="font-display text-3xl font-black mb-8 border-l-4 border-white/20 pl-6 text-slate-400">
              Other Wings
            </h2>

            <p className="text-slate-500 italic p-8 glass rounded-3xl text-center">
              The full committee list for the 2026-2027 session is currently being updated.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}