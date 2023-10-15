import Image from 'next/image';
import type { FC } from 'react';

import { Container } from './containers';

const Hero: FC = () => {
  return (
    <div className="bg-gradient-to-br from-sky-900 to-sky-950 py-24 pt-36">
      <Container>
        <div className="h-full md:flex">
          <div className="basis-1/2 space-y-8">
            <p className="text-5xl font-bold capitalize leading-none tracking-tight text-white md:text-[5rem]">
              The digital service you really want
            </p>
            <p className="w-[85%] text-lg text-neutral-200 md:text-xl">
              We build effective strategies to help you reach customers and
              prospects across the entire web.
            </p>
            <div>
              <button
                type="button"
                className="rounded-full bg-gradient-to-b from-yellow-500 to-amber-600 px-8 py-3 font-semibold text-white"
              >
                Estimate Project
              </button>
            </div>
          </div>
          <div className="relative basis-1/2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/team05.webp"
                alt="logo of brag spot"
                fill
                className="translate-y-28 scale-125"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
