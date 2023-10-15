import React from 'react';

import { Container } from './containers';

const Stats = () => {
  return (
    <div className="bg-gradient-to-br from-sky-900 to-sky-950 py-16">
      <Container>
        <div className="flex flex-col justify-between gap-6 divide-y divide-slate-500 text-white md:flex-row md:divide-x md:divide-y-0">
          <div className="grow text-center">
            <p className="text-5xl font-bold">300+</p>
            <p>Job Complete</p>
          </div>
          <div className="grow text-center">
            <p className="text-5xl font-bold">4K+</p>
            <p>Happy Customers</p>
          </div>
          <div className="grow text-center">
            <p className="text-5xl font-bold">8+</p>
            <p>Years Experience</p>
          </div>
          <div className="grow text-center">
            <p className="text-5xl font-bold">180+</p>
            <p>Won Awards</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
