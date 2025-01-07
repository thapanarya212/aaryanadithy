import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const element = parallaxRef.current;
    gsap.to(element, {
      y: 100,
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/5651990.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        ref={parallaxRef}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative z-20 text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 opacity-0 animate-fade-in">
        Aaryan Adithy Sri Shakthi
        </h1>
        <div className="text-xl md:text-2xl font-light mb-8">
          <Typewriter
            options={{
              strings: ['Software Engineer', 'Full Stack Developer', 'UI/UX Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
        <p className="text-lg md:text-xl font-light mb-12 opacity-0 animate-fade-in-delay">
          Crafting digital experiences with passion and precision
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-serif"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;