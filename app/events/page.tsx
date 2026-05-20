import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FeaturedEvent from '@/components/FeaturedEvent';
import EventsGallery from '@/components/EventsGallery';

const pastEvents = [
  { name: 'National Science Fair & Co-curricular Competetion', date: 'May 2026', role: 'Hosted' },
  { name: '6th Science Carnival 2024', date: 'August 2024', role: 'Hosted' },
  { name: 'National Olympiad Prep', date: 'May 2024', role: 'Workshop' },
  { name: 'Robotics Workshop 1.0', date: 'January 2024', role: 'Skills' },
  { name: 'Intra Navians Science Fest', date: 'September 2022', role: 'Hosted' },
];

export default function EventsPage() {
  return (
    <main>

      <Navbar />

      <PageHero 
        title="Upcoming & Past Events" 
        subtitle="From local workshops to national carnivals, stay updated with everything happening at NSC." 
      />

      <FeaturedEvent />
      
      {/* Past Events List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="font-display text-4xl font-black mb-12">
            Events Archive
          </h2>

          <div className="grid gap-4">

            {pastEvents.map((event) => (
              <div
                key={event.name}
                className="glass p-6 rounded-2xl flex items-center justify-between group hover:border-sky-500/30 transition-all"
              >

                <div>
                  <h4 className="font-bold text-xl">
                    {event.name}
                  </h4>

                  <p className="text-slate-500">
                    {event.date}
                  </p>
                </div>

                <div className="px-4 py-1 rounded-full bg-slate-900 border border-white/5 text-xs font-bold uppercase tracking-widest text-sky-500">
                  {event.role}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <div id="events-gallery">
        <EventsGallery />
      </div>

      <Footer />

    </main>
  );
}