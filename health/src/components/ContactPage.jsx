import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import contactImage from '../images/20.jpg';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Submitting contact form:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
    setError('');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Healthcare Info</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/exercise" className="hover:text-gray-300">Exercise</Link>
          <Link to="/diet" className="hover:text-gray-300">Diet</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
      </header>
      <main className="flex-grow p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-4 flex items-center">
                <FaEnvelope className="mr-2" /> Contact Us
              </h1>
              <p className="text-gray-700 mb-4">
                Feel free to get in touch with us. We are always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="bg-white shadow-md rounded p-4">
                {submitted && (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                    <p className="font-bold">Thank you for your feedback!</p>
                    <p>We appreciate you contacting us.</p>
                  </div>
                )}
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                >
                  <FaPaperPlane className="mr-2" /> Submit
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex items-center justify-center">
              <img src={contactImage} alt="Contact" className="rounded-lg shadow-md object-cover" />
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
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/Exercise" className="text-gray-400 hover:text-white">Exercise</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link to="/diet" className="text-gray-400 hover:text-white">Diet</Link></li>
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

export default ContactPage;
