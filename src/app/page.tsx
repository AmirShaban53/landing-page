import React from 'react';

import About from '@/components/about';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Stats from '@/components/stats';
import Testimonials from '@/components/testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default Home;
