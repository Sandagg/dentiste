import React from 'react';
import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram, Star, Calendar, Shield, Heart, Award } from 'lucide-react';
import ContactForm from './components/ContactForm';
import ServiceCard from './components/ServiceCard';
import PriceTable from './components/PriceTable';
import OpeningHours from './components/OpeningHours';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75" />
        </div>
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">DentalCare</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-blue-200 transition">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              A Healthy Smile Starts Here
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Experience exceptional dental care with our team of experts dedicated to your perfect smile.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80"
                alt="Dr. Sarah Johnson"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Dr. Sarah Johnson</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in dental care, Dr. Johnson leads our team with a 
                passion for creating beautiful, healthy smiles. Her approach combines the latest 
                dental technology with compassionate, personalized care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="text-blue-600 w-8 h-8" />
                  <span className="font-medium">Expert Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="text-blue-600 w-8 h-8" />
                  <span className="font-medium">Patient First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-blue-600 w-8 h-8" />
                  <span className="font-medium">Top Rated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-600 w-8 h-8" />
                  <span className="font-medium">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="General Dentistry"
              description="Comprehensive dental care including cleanings, fillings, and preventive treatments."
              image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="Cosmetic Dentistry"
              description="Transform your smile with whitening, veneers, and other aesthetic procedures."
              image="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="Orthodontics"
              description="Achieve a perfectly aligned smile with our advanced orthodontic treatments."
              image="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Pricing</h2>
          <PriceTable />
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Opening Hours</h2>
          <OpeningHours />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span>contact@dentalcare.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <span>123 Dental Street, Healthcare City</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DentalCare</h3>
              <p className="text-gray-400">
                Your trusted partner in dental health and beautiful smiles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Emergency Care'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-gray-400 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DentalCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;