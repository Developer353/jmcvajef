import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-300 ${
      isActive
        ? 'bg-white/95 text-[#0066FF] font-semibold shadow-lg shadow-blue-500/20'
        : 'text-white/90 hover:text-white hover:bg-white/10 hover:scale-105'
    }`;

  return (
    <nav className="bg-gradient-to-r from-[#0066FF] to-[#0055DD] backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 text-white group"
          >
            <Zap size={28} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-xl md:text-2xl tracking-tight">AR</span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/our-website" className={navLinkClass}>Our Website</NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 space-y-2`}>
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/our-website" className={navLinkClass}>Our Website</NavLink>
        </div>
      </div>
    </nav>
  );
}