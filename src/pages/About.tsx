import React from 'react';
import { Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0066FF] to-[#0044AA] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/90 to-[#0044AA]/90" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Our Story</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              We're a team of passionate developers, designers, and digital craftsmen dedicated to creating exceptional web experiences that make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 -mt-16">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-blue-500/5 transform hover:-translate-y-1 transition-all duration-300">
            <Users className="w-12 h-12 md:w-16 md:h-16 text-[#0066FF] mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-2">500+</h3>
            <p className="text-base md:text-lg text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-blue-500/5 transform hover:-translate-y-1 transition-all duration-300">
            <Award className="w-12 h-12 md:w-16 md:h-16 text-[#0066FF] mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-2">50+</h3>
            <p className="text-base md:text-lg text-gray-600">Awards Won</p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-blue-500/5 transform hover:-translate-y-1 transition-all duration-300">
            <Calendar className="w-12 h-12 md:w-16 md:h-16 text-[#0066FF] mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-2">10+</h3>
            <p className="text-base md:text-lg text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <div className="relative bg-[#001933] rounded-3xl p-8 md:p-16 text-center overflow-hidden mt-16 md:mt-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center" />
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Join Our Journey</h2>
            <p className="text-lg md:text-xl text-blue-200 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Be part of our story and let's create something amazing together.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-[#0066FF] text-white rounded-xl font-semibold hover:bg-[#0055DD] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span>Get Started</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}