import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { User, ShieldCheck } from 'lucide-react';

const committee2627 = [
  { name: 'Taofiq Islam Sunny', role: 'IT Vice President', batch: '26-27', icon: ShieldCheck },
  { name: 'Jahidul Islam Akon', role: 'IT Secretary', batch: '26-27', icon: User },
];

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
              The leadership team of Navians' Science Club for the 2025-26 session.
            </p>

            <div className="overflow-hidden rounded-[2rem] border border-sky-500/20 glass">
              <img
                src="/executive-2025-26.jpg"
                alt="Executive Committee 2025-26"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* IT Leadership */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-black mb-8 border-l-4 border-sky-600 pl-6 text-white uppercase tracking-tighter">
              IT Leadership
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {committee2627.map((member) => (
                <div
                  key={member.name}
                  className="glass p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 group"
                >
                  <div className="w-24 h-24 rounded-3xl bg-sky-600/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                    <member.icon className="w-10 h-10" />
                  </div>

                  <div className="text-center md:text-left">
                    <h4 className="font-display font-bold text-2xl mb-1 text-white">
                      {member.name}
                    </h4>

                    <p className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-4">
                      {member.role}
                    </p>

                    <p className="text-slate-400 font-mono text-xs tracking-widest">
                      NSC Session {member.batch}
                    </p>
                  </div>
                </div>
              ))}
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