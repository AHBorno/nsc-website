import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Image from 'next/image';

const galleryImages = [
  { src: 'https://picsum.photos/seed/nsc1/800/600', alt: 'Carnival Prep' },
  { src: 'https://picsum.photos/seed/nsc2/800/600', alt: 'Workshop Session' },
  { src: 'https://picsum.photos/seed/nsc3/800/600', alt: 'Robotics Lab' },
  { src: 'https://picsum.photos/seed/nsc4/800/600', alt: 'Award Ceremony' },
  { src: 'https://picsum.photos/seed/nsc5/800/600', alt: 'Science Fair' },
  { src: 'https://picsum.photos/seed/nsc6/800/600', alt: 'Group Photo' },
];

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <PageHero 
        title="Visual Memories" 
        subtitle="A glimpse into our labs, workshops, and the vibrant life of NSC members." 
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative group rounded-[2rem] overflow-hidden glass border-white/5">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={800} 
                  height={600} 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <p className="font-display font-bold text-lg">{img.alt}</p>
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
