import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Award, Trophy, Star } from 'lucide-react';

const achievementList = [
  { title: 'Best Science Club 2023', provider: 'National Science Week', icon: Trophy },
  { title: 'Project Excellence Award', provider: 'Dhaka Division Fair', icon: Award },
  { title: 'Top Robotics Contender', provider: 'BUET Tech Fest', icon: Star },
  { title: 'Innovation Grant 2024', provider: 'Ministry of Science & Tech', icon: Trophy },
];

export default function AchievementsPage() {
  return (
    <main>
      <Navbar />
      <PageHero 
        title="Our Achievements" 
        subtitle="Celebrating years of hard work, dedication, and the brilliant successes of our club members." 
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {achievementList.map((ach) => (
              <div key={ach.title} className="glass p-10 rounded-[2.5rem] flex items-start gap-8 group hover:bg-white/10 transition-all">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                  <ach.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2">{ach.title}</h3>
                  <p className="text-slate-500 font-medium">{ach.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
