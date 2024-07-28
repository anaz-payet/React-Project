// src/components/DietLogging.jsx
import React, { useReducer, useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTrashAlt } from 'react-icons/fa';

import dietImage1 from '../images/1.jpg';
import dietImage2 from '../images/2.jpg';
import dietImage3 from '../images/3.jpg';
import dietImage4 from '../images/4.jpg';
import dietImage5 from '../images/5.jpg';
import dietImage6 from '../images/6.jpg';
import dietImage7 from '../images/7.jpg';
import dietImage8 from '../images/8.jpg';

const images = [
  { src: dietImage1, name: 'Diet 1' },
  { src: dietImage2, name: 'Diet 2' },
  { src: dietImage3, name: 'Diet 3' },
  { src: dietImage4, name: 'Diet 4' },
  { src: dietImage5, name: 'Diet 5' },
  { src: dietImage6, name: 'Diet 6' },
  { src: dietImage7, name: 'Diet 7' },
  { src: dietImage8, name: 'Diet 8' },
];

const initialState = {
  meal: '',
  calories: '',
  log: JSON.parse(localStorage.getItem('dietLog')) || [],
  selectedImage: images[0].src,
  imageName: images[0].name,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MEAL':
      return { ...state, meal: action.payload };
    case 'SET_CALORIES':
      return { ...state, calories: action.payload };
    case 'SET_IMAGE':
      return { ...state, selectedImage: action.payload.src, imageName: action.payload.name };
    case 'ADD_LOG':
      const updatedLog = [...state.log, action.payload];
      localStorage.setItem('dietLog', JSON.stringify(updatedLog));
      return { ...state, log: updatedLog, meal: '', calories: '' };
    case 'DELETE_LOG':
      const filteredLog = state.log.filter((_, index) => index !== action.payload);
      localStorage.setItem('dietLog', JSON.stringify(filteredLog));
      return { ...state, log: filteredLog };
    default:
      return state;
  }
};

const DietLogging = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleDateString());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const memoizedLog = useMemo(() => state.log, [state.log]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      meal: state.meal,
      calories: state.calories,
      date,
      image: state.selectedImage,
      imageName: state.imageName,
    };
    dispatch({ type: 'ADD_LOG', payload: newLog });
  };

  const handleDelete = useCallback((index) => {
    dispatch({ type: 'DELETE_LOG', payload: index });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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
      <main className="flex-grow bg-gray-100 p-8 overflow-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Diet Logging</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="meal">
                  Meal Description
                </label>
                <input
                  value={state.meal}
                  onChange={(e) => dispatch({ type: 'SET_MEAL', payload: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="meal"
                  type="text"
                  placeholder="Meal Description"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calories">
                  Calories
                </label>
                <input
                  value={state.calories}
                  onChange={(e) => dispatch({ type: 'SET_CALORIES', payload: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="calories"
                  type="number"
                  placeholder="Calories"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Log Meal
              </button>
            </form>
            <h2 className="text-2xl font-bold mt-8">Meal Log</h2>
            <ul className="list-disc pl-5">
              {memoizedLog.map((entry, index) => (
                <li key={index} className="mb-2 flex items-center">
                  {entry.date} - {entry.meal} ({entry.calories} calories) - {entry.imageName}
                  <img src={entry.image} alt={entry.imageName} className="w-16 h-16 inline-block ml-2 rounded-full" />
                  <button onClick={() => handleDelete(index)} className="ml-4 text-red-500 hover:text-red-700">
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.name}
                  className={`rounded-lg shadow-md object-cover w-full h-48 cursor-pointer transition-transform transform hover:scale-105 ${
                    state.selectedImage === image.src ? 'border-4 border-green-500' : ''
                  }`}
                  onClick={() => dispatch({ type: 'SET_IMAGE', payload: image })}
                />
                <p className="absolute bottom-0 left-0 bg-opacity-75 bg-black text-white w-full text-center py-1 rounded-b-lg">
                  {image.name}
                </p>
              </div>
            ))}
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
                <li><Link to="/exercise" className="text-gray-400 hover:text-white">Exercise</Link></li>
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

export default DietLogging;
