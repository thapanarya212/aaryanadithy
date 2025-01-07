import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Navigation from './components/navigation/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';


function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Resume />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
