import React, { useState } from 'react';
import { Icons } from './Icons';
import { Category } from '../types';

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  currentView: 'list' | 'post';
  onNavigateHome: () => void;
}

const CATEGORIES: Category[] = ['All', 'AI', 'Crypto', 'Eco & Community', 'Others'];

// Partial: layouts/partials/header.html
export const Header: React.FC<HeaderProps> = ({ 
  activeCategory, 
  onCategoryChange, 
  currentView,
  onNavigateHome
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Area - Using Brand Kit Symbol */}
          <button onClick={onNavigateHome} className="flex items-center group z-50 relative">
            <img 
              src="https://raw.githubusercontent.com/codatta/brand-kit/main/logo/svg/symbol_black.svg" 
              alt="Codatta" 
              className="h-8 w-auto"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('font-serif', 'font-bold', 'text-2xl');
                if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = "Codatta.";
              }}
            />
          </button>

          {/* Desktop Nav - Editorial Style */}
          {currentView === 'list' && (
            <nav className="hidden md:flex items-center gap-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`text-[11px] font-mono uppercase tracking-widest transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'text-black border-b border-black pb-0.5'
                      : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          )}

          {currentView === 'post' && (
            <nav className="hidden md:flex items-center gap-8">
               <button 
                  onClick={onNavigateHome}
                  className="text-[11px] font-mono uppercase tracking-widest text-gray-500 hover:text-black flex items-center gap-2"
                >
                  <Icons.Back size={12} /> Back to Overview
                </button>
            </nav>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <Icons.Close size={24} /> : <Icons.Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 animate-in fade-in slide-in-from-bottom-4">
           <div className="flex flex-col space-y-6">
            {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onCategoryChange(cat);
                    setIsMobileMenuOpen(false);
                    onNavigateHome();
                  }}
                  className={`text-3xl font-serif font-medium italic text-left ${
                    activeCategory === cat ? 'text-black' : 'text-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>
      )}
    </header>
  );
};