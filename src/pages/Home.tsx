import React from 'react';
import { Code2, Rocket, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-all">
      <div className="text-[#0066FF] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0066FF] to-[#0044AA] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center text-white space-y-6">
            <Zap size={48} className="text-white animate-pulse" />
            <h1 className="text-5xl font-bold tracking-tight">
              Powering Digital Innovation
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              We transform ideas into exceptional digital experiences, combining cutting-edge technology with stunning design.
            </p>
            <Link
              to="/contact"
              className="mt-8 px-8 py-3 bg-white text-[#0066FF] rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Code2 size={32} />}
              title="Modern Development"
              description="Built with the latest technologies and best practices for optimal performance."
            />
            <FeatureCard
              icon={<Shield size={32} />}
              title="Secure & Reliable"
              description="Enterprise-grade security with robust infrastructure you can trust."
            />
            <FeatureCard
              icon={<Rocket size={32} />}
              title="Lightning Fast"
              description="Optimized for speed and efficiency, delivering exceptional user experiences."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-[#001933] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses that have chosen us for their digital journey.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#0066FF] text-white rounded-full font-semibold hover:bg-[#0055DD] transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}