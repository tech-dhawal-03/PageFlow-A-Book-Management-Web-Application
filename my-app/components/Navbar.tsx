"use client"
import React, { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full py-5 bg-[#0B0F1E] mx-10">
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white flex items-center ml-5">
            PageFlow
          </span>
        </a>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-amber-300 transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Search
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                AH
              </div>
              <span className="text-white">Adrian</span>
            </div>
            <button className="text-red-500 hover:text-red-400">
              <LogOut size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center p-2 rounded-md text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-[#0B0F1E] border-t border-gray-800 animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-3">
            <a href="#" className="px-4 py-2 text-base text-amber-300 hover:bg-gray-800 rounded-md">
              Home
            </a>
            <a href="#" className="px-4 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
              Search
            </a>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2">
                {/* <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  DH
                </div>
                <span className="text-white">Dhawal</span>
              </div> */}
              <div/>
              </div>
              <button className="text-red-500 hover:text-red-400">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
