import React from 'react';
import { Download, Menu } from 'lucide-react';
import { NavigationLinks } from './navigation/NavigationLinks';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-secondary">PFMT - Phục Hồi Sàn Chậu</span>
        </div>

        <NavigationLinks />

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}