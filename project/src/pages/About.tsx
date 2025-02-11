import React from 'react';
import { Users, Award, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0066FF] to-[#0044AA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're a team of passionate developers, designers, and digital craftsmen dedicated to creating exceptional web experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <Users className="w-12 h-12 text-[#0066FF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <Award className="w-12 h-12 text-[#0066FF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <Calendar className="w-12 h-12 text-[#0066FF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'John Smith',
              role: 'CEO & Founder',
              image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
            },
            {
              name: 'Sarah Johnson',
              role: 'Technical Director',
              image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
            },
            {
              name: 'Michael Chen',
              role: 'Creative Director',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}