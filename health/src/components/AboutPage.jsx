// src/components/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaBars } from 'react-icons/fa';
import teamMember1 from '../images/18.jpg';
import teamMember2 from '../images/19.jpg';
import teamMember3 from '../images/18.jpg';
import teamMember4 from '../images/18.jpg';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 sm:p-8">
      <header className="w-full bg-green-500 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Healthcare Info</h1>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/exercise" className="hover:text-gray-300">Exercise</Link>
          <Link to="/diet" className="hover:text-gray-300">Diet</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <button className="md:hidden text-white">
          <FaBars size={24} />
        </button>
      </header>
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden mt-8">
        <section className="p-4 sm:p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Healthcare Info. We are dedicated to providing the best healthcare services  <br />
            and medical equipment to ensure your health and well-being.  <br />Our team of experts is here to support you with the latest advancements in healthcare technology.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-700 mb-4">
            We believe in quality, innovation, and customer satisfaction. <br /> Our goal is to improve healthcare outcomes by providing cutting-edge medical solutions.
          </p>
        </section>
        <section className="p-4 sm:p-8 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={teamMember1} alt="Team Member 1" className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">Anaz Abdi Dhowrane</h3>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={teamMember2} alt="Team Member 2" className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">Shukri Ali Ahmed</h3>
              <p className="text-gray-700">Chief Medical Officer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={teamMember3} alt="Team Member 3" className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">Muse Ahmed Adan</h3>
              <p className="text-gray-700">Head of Research</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={teamMember4} alt="Team Member 4" className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">Abdiaziz Ali Ibrahim</h3>
              <p className="text-gray-700">Position</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-10 mt-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Healthcare Info</h3>
              <p className="text-gray-400">We are committed to providing state-of-the-art medical equipment and comprehensive healthcare services.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Information</h3>
              <ul>
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                <li><Link to="/exercise" className="hover:text-gray-300">Exercise</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                <li><Link to="/diet" className="hover:text-gray-300">Diet</Link></li>
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
          <div className="flex justify-between items-center mt-10">
            <p className="text-gray-400">&copy; 2024 Healthcare Info. All rights reserved.</p>
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

export default AboutPage;
