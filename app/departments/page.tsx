import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import DepartmentsGrid from '@/components/DepartmentsGrid';

export default function DepartmentsPage() {
  return (
    <main>
      <Navbar />
      <PageHero 
        title="Our Departments" 
        subtitle="Specialized wings designed to explore every facet of modern science and technology." 
      />
      <DepartmentsGrid />
      
      {/* Collaboration Section */}
      <section className="py-24 bg-sky-600/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-black mb-6">Cross-Departmental Collaboration</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            While each department has its focus, we encourage our members to work across disciplines to solve 
            real-world problems that require multi-faceted thinking.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
