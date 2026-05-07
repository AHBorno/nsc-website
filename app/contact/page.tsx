import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Phone, Mail, Facebook, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero 
        title="Get In Touch" 
        subtitle="Have questions about our events or want to join the club? We are always here to help." 
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass p-8 rounded-[2rem] flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-600/10 flex items-center justify-center text-sky-500">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-2xl font-display font-bold text-white">01972543781</p>
                </div>
              </div>
              
              <div className="glass p-8 rounded-[2rem] flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-600/10 flex items-center justify-center text-sky-500">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-2xl font-display font-bold text-white">nscit2627@gmail.com</p>
                </div>
              </div>

              <div className="glass p-8 rounded-[2rem] flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-600/10 flex items-center justify-center text-sky-500">
                  <Facebook className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Facebook</h4>
                  <a href="https://www.facebook.com/nsc.ncd" target="_blank" className="text-2xl font-display font-bold text-white hover:text-sky-500 transition-colors">
                    nsc.ncd
                  </a>
                </div>
              </div>

              <div className="glass p-8 rounded-[2rem] flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-600/10 flex items-center justify-center text-sky-500">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-xl font-display font-bold text-white">Noubahini College Dhaka, Mirpur, Dhaka-1216</p>
                </div>
              </div>
            </div>

            <div className="glass p-12 rounded-[3.5rem] border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <h3 className="font-display text-4xl font-black mb-8 relative z-10 text-white uppercase tracking-tighter">Send Message</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-slate-800 rounded-2xl px-6 py-4 focus:border-sky-500 transition-colors outline-none font-sans" />
                  <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-slate-800 rounded-2xl px-6 py-4 focus:border-sky-500 transition-colors outline-none font-sans" />
                </div>
                <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-slate-800 rounded-2xl px-6 py-4 focus:border-sky-500 transition-colors outline-none font-sans" />
                <textarea placeholder="Your Message" rows={4} className="w-full bg-white/5 border border-slate-800 rounded-2xl px-6 py-4 focus:border-sky-500 transition-colors outline-none font-sans"></textarea>
                <button type="button" className="w-full py-5 rounded-2xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-all shadow-xl shadow-sky-600/20 uppercase tracking-widest text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
