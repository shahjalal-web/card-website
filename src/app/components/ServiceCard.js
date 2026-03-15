import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02]">
      <div className="relative h-56 w-full">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-pink-600 text-white text-[10px] font-bold px-2 py-1 rounded">
          {service.tag}
        </span>
        <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md text-red-500">
          ❤️
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-800 text-sm leading-tight">{service.title}</h3>
          <span className="bg-purple-100 text-purple-700 font-bold text-xs px-2 py-1 rounded">
            {service.price}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <img src="https://ui-avatars.com/api/?name=Suresh" className="w-6 h-6 rounded-full" />
          <div className="text-[11px] text-gray-600">
            <p className="font-semibold">{service.vendor}</p>
            <p>⭐ {service.rating} | 📍 {service.location}</p>
          </div>
        </div>

        <Link href={`/service/${service.id}`}>
          <button className="w-full py-2.5 border-2 border-pink-500 text-pink-500 font-bold rounded-lg hover:bg-pink-500 hover:text-white transition-colors text-sm">
            CONTACT NOW
          </button>
        </Link>
      </div>
    </div>
  );
}