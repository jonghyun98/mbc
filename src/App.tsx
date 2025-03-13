import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import Cases from './components/sections/Cases';
import Features from './components/sections/Features';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Cases />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
