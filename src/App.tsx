import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import Cases from './components/sections/Cases';
import Features from './components/sections/Features';
import Footer from './components/layout/Footer';
import FactCheck from './components/pages/FactCheck';

function App() {
  return (
    <Router basename="/mbc">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Solutions />
              <Cases />
              <Features />
            </main>
          } />
          <Route path="/factcheck" element={<FactCheck />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
