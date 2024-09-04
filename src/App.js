import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorBoundary from './components/ErrorBoundary';
import TheatreDetails from './components/TheatreDetails';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignupPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <ErrorBoundary>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieTitle/theatre-details" element={<TheatreDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
