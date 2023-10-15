import Image from 'next/image';
import type { FC } from 'react';

import { Container } from './containers';

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-sky-950 pt-24">
      <Container>
        <div className="mx-auto space-y-8 text-center md:w-1/2">
          <div className="flex items-center justify-center gap-4">
            <span className="inline-block h-0.5 w-32 rounded-full bg-amber-500" />
            <span className="font-semibold text-amber-500">Contact US</span>
          </div>
          <div>
            <p className="text-4xl font-bold leading-none tracking-tight text-white md:text-5xl">
              Have a question or an idea? Please let us know.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="w-full rounded-full bg-gradient-to-r from-teal-500  to-teal-600 px-8 py-3 font-semibold text-white"
            >
              BragSpot_Digital agency@gmail.com
            </button>
          </div>
        </div>
        <div className="mt-12 flex flex-col border-t border-neutral-100/20 text-white md:flex-row md:items-center  md:justify-between">
          <div className="flex items-center">
            <span className="relative inline-block aspect-square h-10">
              <Image
                src="/logo.webp"
                alt="logo of brag spot"
                fill
                sizes="100%"
                style={{ objectFit: 'cover' }}
              />
            </span>
            <span className="font-bold md:text-xl">Brag Spot</span>
          </div>
          <div>
            <ul className="mb-1  flex flex-wrap md:gap-8">
              <li className="basis-1/2 cursor-pointer border-amber-500 py-4 hover:border-b-2 hover:text-amber-500 md:basis-auto md:py-12">
                Home
              </li>
              <li className="basis-1/2 cursor-pointer border-amber-500 py-4 hover:border-b-2 hover:text-amber-500 md:basis-auto md:py-12">
                Services
              </li>
              <li className="basis-1/2 cursor-pointer border-amber-500 py-4 hover:border-b-2 hover:text-amber-500 md:basis-auto md:py-12">
                Projects
              </li>
              <li className="basis-1/2 cursor-pointer border-amber-500 py-4 hover:border-b-2 hover:text-amber-500 md:basis-auto md:py-12">
                About us
              </li>
              <li className="basis-1/2 cursor-pointer border-amber-500 py-4 hover:border-b-2 hover:text-amber-500 md:basis-auto md:py-12">
                Contact
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center md:mt-auto md:text-right">
            <p>@2023_BragSpot</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
