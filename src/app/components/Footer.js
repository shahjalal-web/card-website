export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-black">SET<span className="text-pink-500">My</span>Space</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A Unit Of Urbanarrow Pvt. Ltd. <br />
            Whitefield, Bangalore, Karnataka, India 560066
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li><a href="#" className="hover:text-pink-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-pink-500">Signup As Partner</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li><a href="#" className="hover:text-pink-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Social</h4>
          <div className="flex gap-4">
            <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600">f</span>
            <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600">ig</span>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-[10px] mt-8 uppercase tracking-widest">
        All rights reserved 2026 setmyspace
      </p>
    </footer>
  );
}