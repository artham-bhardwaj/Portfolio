import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2024 Artham Bhardwaj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;