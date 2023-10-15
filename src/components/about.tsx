import Image from 'next/image';
import React from 'react';

import { Container } from './containers';

const About = () => {
  return (
    <div className="py-32">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 space-y-6 md:col-span-6">
            <div className="border-b-2 pb-6">
              <div className="flex items-center gap-4">
                <span className="inline-block h-0.5 w-32 rounded-full bg-amber-500" />
                <span className="font-semibold text-amber-500">Who We Are</span>
              </div>
              <div>
                <p className="text-4xl font-bold leading-none tracking-tight text-sky-950 md:text-5xl">
                  Providing creative and technology services for growing brands
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg text-sky-900">
                Our company specializes in research, brand identity design,
                UI/UX design, development, and graphic design. To help our
                clients improve their businesses, we work with them all over the
                world.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-sky-800 to-sky-900  px-8 py-3 text-white"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/team.webp"
                alt="logo of brag spot"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
