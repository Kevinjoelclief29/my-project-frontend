import React, { useEffect } from 'react';
import AOS from 'aos';
import Typed from 'typed.js';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({});
    const typed = new Typed('.typed', {
      strings: ['Developer', 'Designer', 'Gamer', 'Slot'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Kevin Joel Clief</h1>
        <p>I'm <span className="typed" data-typed-items="Developer, Designer, Gamer, Slot"></span></p>
      </div>
    </section>
  );
};


export default Index;