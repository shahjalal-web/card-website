export default function Hero() {
  return (
    <div className="relative bg-pink-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          We set up your space to <br/> celebrate your <span className="text-gray-800 underline decoration-pink-500">Birthday Party</span>
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-6 mb-8 text-sm font-bold text-pink-600">
          <button className="flex items-center gap-1 border-b-2 border-pink-600">🖼️ Browse Gallery</button>
          <button className="flex items-center gap-1 text-gray-500">💡 Find Inspiration</button>
          <button className="flex items-center gap-1 text-gray-500">🤝 Hire Professionals</button>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-2 rounded-full shadow-xl flex flex-col md:flex-row items-center max-w-2xl mx-auto border border-pink-100">
          <input 
            type="text" 
            placeholder="Search Service, Professional etc..." 
            className="flex-1 p-3 px-6 outline-none text-sm w-full md:w-auto"
          />
          <div className="h-6 w-[1px] bg-gray-200 hidden md:block"></div>
          <input 
            type="text" 
            placeholder="Enter Location" 
            className="p-3 px-6 outline-none text-sm w-full md:w-auto"
          />
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold text-sm w-full md:w-auto hover:bg-pink-700 transition-all">
            Search Professionals
          </button>
        </div>
      </div>
    </div>
  );
}