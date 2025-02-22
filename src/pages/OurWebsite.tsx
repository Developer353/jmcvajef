import React from 'react';

export default function OurWebsite() {
  return (
    <div className="bg-gradient-to-r from-[#0066FF] to-[#0055DD] backdrop-blur-lg min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-8 text-center">Our Website</h1>
        <div className="bg-white/5 rounded-lg p-6 shadow-lg backdrop-blur-lg max-w-3xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">Websites I've Built</h2>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://vblush.co.uk" 
                className="text-[#0066FF] hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                vblush.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
