import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DietLogging from './components/DietLogging';
import ExerciseLogging from './components/ExerciseLogging';
import './index.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/diet" element={<DietLogging />} />
        <Route path="/exercise" element={<ExerciseLogging />} />
      </Routes>
    </Router>
  );
}

export default App;
