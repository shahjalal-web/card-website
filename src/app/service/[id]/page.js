/* eslint-disable @next/next/no-img-element */
import { services } from '../../../../data/mockData';
import Navbar from '../../components/Navber';
import Footer from '../../components/Footer';
import { notFound } from 'next/navigation';

export default async function ServiceDetail({ params }) {
  // Params await korte hoy App Router-e
  const { id } = await params;
  
  // Data find korchi
  const service = services.find(s => s.id === id);
  
  // Data na pele 404 trigger korbe
  if (!service) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-pink-50 rounded-3xl overflow-hidden shadow-xl border border-pink-100 flex flex-col md:flex-row">
          
          {/* Image Section */}
          <div className="md:w-1/2 h-80 md:h-auto">
            <img 
              src={service.image} 
              className="w-full h-full object-cover" 
              alt={service.title} 
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8 space-y-6">
            <div>
              <span className="bg-pink-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {service.tag}
              </span>
              <h1 className="text-2xl font-extrabold text-gray-800 mt-3">{service.title}</h1>
              <p className="text-pink-600 font-bold text-xl mt-1">{service.price}</p>
            </div>

            <div className="space-y-3 border-t border-pink-200 pt-6">
              <p className="text-gray-700 flex items-center gap-2">
                <span className="text-lg">👤</span> <strong>Vendor:</strong> {service.vendor}
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <span className="text-lg">📍</span> <strong>Address:</strong> {service.address}
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <span className="text-lg">📧</span> <strong>Email:</strong> {service.email}
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <span className="text-lg">📞</span> <strong>Phone:</strong> {service.phone}
              </p>
            </div>

            <button className="w-full py-4 bg-pink-600 text-white font-black rounded-xl hover:bg-pink-700 transition-all shadow-lg uppercase tracking-wider">
              Contact Vendor Now
            </button>
          </div>
        </div>
      </div>
            <Footer />

    </div>
  );
}