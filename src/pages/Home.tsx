import React from 'react';
import { Code2, Rocket, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
      <div className="text-[#0066FF] mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0066FF] to-[#0044AA] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/90 to-[#0044AA]/90" />
        <div className="container relative mx-auto px-6">
          <div className="flex flex-col items-center text-center text-white space-y-8">
            <Zap size={64} className="text-white animate-pulse" />
            <h1 className="text-6xl font-bold tracking-tight leading-tight max-w-4xl">
              Transforming Ideas into
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Digital Excellence
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              We combine cutting-edge technology with stunning design to create exceptional digital experiences that drive success.
            </p>
            <Link
              to="/contact"
              className="group mt-8 px-8 py-4 bg-white text-[#0066FF] rounded-xl font-semibold hover:bg-opacity-95 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of innovation, reliability, and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code2 size={40} />}
              title="Modern Development"
              description="Built with cutting-edge technologies and best practices for optimal performance and scalability."
            />
            <FeatureCard
              icon={<Shield size={40} />}
              title="Secure & Reliable"
              description="Enterprise-grade security with robust infrastructure that keeps your data safe and your business running."
            />
            <FeatureCard
              icon={<Rocket size={40} />}
              title="Lightning Fast"
              description="Optimized for speed and efficiency, delivering exceptional user experiences that drive engagement."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-32">
        <div className="relative bg-[#001933] rounded-3xl p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center" />
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful businesses that have chosen us for their digital journey.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-[#0066FF] text-white rounded-xl font-semibold hover:bg-[#0055DD] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span>Let's Talk</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}