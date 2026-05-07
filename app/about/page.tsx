import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero 
        title="About Our Lab" 
        subtitle="Discover the history, mission, and the brilliant minds behind Navians&apos; Science Club since 2017." 
      />
      <About />
      
      {/* Leadership Section */}
<section className="py-24 bg-slate-900/50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="font-display text-4xl font-black mb-12">
      Our Leadership
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Principal */}
      <div className="glass p-8 rounded-[2rem]">
        <div className="text-sky-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Principal & Patron
        </div>

        <h3 className="text-2xl font-bold mb-4 font-display">
          Captain Mohammad Ismail Majumder, (S), NPP, BN
        </h3>

        <p className="text-slate-400">
          Guiding the club with wisdom and providing the necessary support for
          all our scientific endeavors.
        </p>
      </div>

      {/* Vice Principal & Founder */}
      <div className="glass p-8 rounded-[2rem]">
        <div className="text-sky-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Vice Principal & Founder
        </div>

        <h3 className="text-2xl font-bold mb-4 font-display">
          MD. Akkas Ali
        </h3>

        <p className="text-slate-400">
          Whose vision and dedication
          inspired a culture of scientific curiosity, innovation, and academic
          excellence among students.
        </p>
      </div>

      {/* Moderator */}
      <div className="glass p-8 rounded-[2rem]">
        <div className="text-sky-500 font-bold mb-2 uppercase tracking-widest text-xs">
          Moderator
        </div>

        <h3 className="text-2xl font-bold mb-4 font-display">
          MD. Kamal Hossain
        </h3>

        <p className="text-slate-400">
          Overseeing day-to-day operations and ensuring the club remains aligned
          with its academic goals.
        </p>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </main>
  );
}
