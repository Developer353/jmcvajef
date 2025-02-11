import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full transition-all ${
      isActive
        ? 'bg-white text-[#0066FF] font-semibold'
        : 'text-white hover:bg-white/10'
    }`;

  return (
    <nav className="bg-[#0066FF] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2 text-white">
            <Zap size={24} />
            <span className="font-bold text-xl">TechPro</span>
          </NavLink>
          <div className="flex space-x-4">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}