"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter flex items-center">
              <span className="text-gray-800">SET</span>
              <span className="text-pink-600 font-serif">My</span>
              <span className="text-gray-800">Space</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-pink-600 font-medium border-b-2 border-pink-600 pb-1">Home</Link>
            <Link href="#" className="text-gray-500 hover:text-pink-600 transition-colors">Spaces</Link>
            <Link href="#" className="text-gray-500 hover:text-pink-600 transition-colors">Celebrations</Link>
            <Link href="#" className="text-gray-500 hover:text-pink-600 transition-colors">Professionals</Link>
            <Link href="#" className="text-gray-500 hover:text-pink-600 transition-colors">Vendors</Link>
            <Link href="#" className="text-gray-500 hover:text-pink-600 transition-colors">Blog</Link>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-xs font-bold text-gray-700 hover:text-pink-600 uppercase tracking-wider">
              <span className="mr-1">👤</span> BECOME A PROFESSIONAL
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
          <Link href="/" className="block text-pink-600 font-bold">Home</Link>
          <Link href="#" className="block text-gray-600">Spaces</Link>
          <Link href="#" className="block text-gray-600">Celebrations</Link>
          <Link href="#" className="block text-gray-800 font-bold">Login</Link>
        </div>
      )}
    </nav>
  );
}