// src/components/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaStethoscope, FaClinicMedical, FaPrescriptionBottleAlt, FaUserMd, FaBriefcaseMedical, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../images/17.jpg';
import homepageImage from '../images/22.webp';

const services = [
  { icon: <FaHeartbeat size={24} />, title: 'Cardiology' },
  { icon: <FaStethoscope size={24} />, title: 'General Medicine' },
  { icon: <FaClinicMedical size={24} />, title: 'Clinic Services' },
  { icon: <FaPrescriptionBottleAlt size={24} />, title: 'Pharmacy' },
  { icon: <FaUserMd size={24} />, title: 'Specialists' },
  { icon: <FaBriefcaseMedical size={24} />, title: 'Emergency' }
];

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="bg-green-500 text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logoImage} alt="Logo" className="h-12 w-12 object-cover rounded-full" />
          <h1 className="text-2xl font-bold">Healthcare Info</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/exercise" className="hover:text-gray-300">Exercise</Link>
          <Link to="/diet" className="hover:text-gray-300">Diet</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>
      {menuOpen && (
        <nav className="md:hidden bg-green-500 text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/about" className="block hover:text-gray-300">About Us</Link>
          <Link to="/exercise" className="block hover:text-gray-300">Exercise</Link>
          <Link to="/diet" className="block hover:text-gray-300">Diet</Link>
          <Link to="/contact" className="block hover:text-gray-300">Contact</Link>
        </nav>
      )}
      <main className="flex-grow bg-gray-100 p-8 overflow-auto">
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">The Future of Healthcare is Here</h2>
            <div className="text-gray-700 mb-4 leading-relaxed text-lg">
              <p>At <span className="text-green-500 font-semibold">Healthcare Info</span>, we are committed to providing state-of-the-art medical equipment and comprehensive healthcare services.</p>
              <p>Our goal is to improve patient outcomes and enhance the quality of life for everyone.</p>
              <p>Join us on this journey towards a <span className="text-green-500 font-semibold">healthier future</span>.</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-700 animate-bounce">
              Show me the Future
            </button>
          </div>
          <img src={homepageImage} alt="Healthcare" className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md mt-4 md:mt-0" />
        </div>
        <section className="text-center py-10">
          <h1 className="text-4xl font-semibold text-green-600">Our Services</h1>
          <p className="text-md text-gray-600 mt-2">Discover the variety of services we offer</p>
        </section>
        <div className="py-6 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center transition transform hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-md">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Healthcare Info</h3>
              <p className="text-gray-400">We are committed to providing state-of-the-art medical equipment and comprehensive healthcare services.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Information</h3>
              <ul>
                <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                <li><Link to="/exercise" className="hover:text-gray-300">Exercise</Link></li>
                <li><Link to="/diet" className="hover:text-gray-300">Diet</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Helpful Links</h3>
              <ul>
                <li><Link to="/support" className="text-gray-400 hover:underline">Support</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:underline">Terms & Condition</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:underline">Privacy Policy</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe</h3>
              <form>
                <input type="email" className="w-full p-2 mb-4 text-black rounded" placeholder="Enter your email" />
                <button className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-700">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-10">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Healthcare Info. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white"><FaFacebookF /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><FaTwitter /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><FaInstagram /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
