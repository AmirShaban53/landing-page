'use client';

import type { FC } from 'react';
import { useState } from 'react';

import ClientCard from './clientCard';
import { Container } from './containers';

const clientData = [
  {
    image: '/client/profile03.webp',
    name: 'Marcus Dorwart',
    title: 'Co-Founder of Mona',
  },
  {
    image: '/client/profile07.webp',
    name: 'Kadin Dorwart',
    title: 'Founder of Thesign',
  },
  {
    image: '/client/profile08.webp',
    name: 'Anika Westervelt',
    title: 'CEO & Founder of Maven',
  },
  {
    image: '/client/profile09.webp',
    name: 'Marcuz Dorwart',
    title: 'Co-Founder of Mona',
  },
  {
    image: '/client/profile07.webp',
    name: 'Kadid Dorwarl',
    title: 'Founder of Thesign',
  },
];

const Testimonials: FC = () => {
  const [activeClient, setActiveClient] = useState(0);

  const handleClickClient = (index: number) => {
    if (index < 2 && activeClient < 1) return;

    setActiveClient(index);
  };
  return (
    <div className="py-24">
      <Container>
        <div className="mb-8">
          <span />
          <span className="text-4xl font-bold leading-none tracking-tight text-sky-950 md:text-5xl">
            Beloved by so many <br /> people worldwide
          </span>
        </div>
        <div className="overflow-hidden">
          <div
            className="relative divide-x transition-all duration-300 md:flex"
            style={{
              transform: `translateX(-${
                activeClient > 1 ? activeClient * 33 - 33 : activeClient * 33
              }%)`,
            }}
          >
            {clientData.map((client) => {
              return <ClientCard key={client.name} {...client} />;
            })}
          </div>
          <div className="hidden justify-center gap-8 p-8 md:flex">
            {clientData.map((client, index) => {
              const active = index === activeClient;
              return (
                <button
                  type="button"
                  key={client.name}
                  onClick={() => handleClickClient(index)}
                  className={`group relative h-4 w-4 cursor-pointer rounded-full hover:bg-amber-500 ${
                    active ? 'bg-amber-500' : 'bg-neutral-200'
                  }`}
                >
                  <div
                    className={`absolute left-1/2 top-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-500 transition-all duration-300 group-hover:block ${
                      active ? 'block' : 'hidden'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
