import React from 'react';
import { Code, Palette, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and online visibility.'
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Maintenance',
      description: 'Keep your website running smoothly with regular updates.'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Website Design',
      description: 'Design and develop stunning, responsive websites tailored to your brand.'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Logo Design',
      description: 'Creative and professional logos to represent your brand identity.'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Business Card Design',
      description: 'Unique, visually appealing business cards that make a lasting impression.'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Social Media Management',
      description: 'Boost your online presence with tailored social media strategies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0066FF] to-[#0044AA] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[#0066FF] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-[#001933] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our tailored services.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#0066FF] text-white rounded-full font-semibold hover:bg-[#0055DD] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}