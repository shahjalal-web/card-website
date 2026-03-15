import Navbar from './components/Navber';
import ServiceCard from './components/ServiceCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import { services } from '../../data/mockData';

export default function Home() {
  const categories = ["Birthday Special Decors", "Candlelight Dinners", "Birthday Cakes", "Birthday Surprises", "Couple Activities"];

  return (
    <div className="bg-[#FFF5F7] min-h-screen">
      <Navbar />
      <Hero />
      <Carousel />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar - Desktop Only */}
        <aside className="hidden md:block w-64 space-y-2">
          {categories.concat(categories).map((item, i) => (
            <button key={i} className={`w-full text-left px-4 py-2 rounded-lg border text-sm transition-all ${i === 3 ? 'bg-purple-600 text-white border-purple-600 shadow-lg scale-105' : 'bg-white text-pink-500 border-pink-200'}`}>
              {item}
            </button>
          ))}
          <button className="w-full text-left px-4 py-2 rounded-lg bg-pink-100 text-pink-500 text-sm">More +</button>
        </aside>

        {/* Content Area */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Top professionals for Birthday Decorations</h2>
            <button className="text-sm border px-3 py-1 rounded-md bg-white text-pink-500 border-pink-200">Sort ⬇</button>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}