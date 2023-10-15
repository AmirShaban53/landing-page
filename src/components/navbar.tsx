'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Container } from './containers';
// import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };
  return (
    <div className="absolute w-full">
      <Container>
        <div className="flex items-center justify-between text-white">
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
            <span className="text-xl font-bold">Brag Spot</span>
          </div>
          <div className="z-30 md:hidden">
            <button type="button" onClick={handleToggleMenu}>
              menu
            </button>
          </div>
          <div
            className={`fixed top-0 z-10 flex  h-screen w-screen items-center bg-sky-900 transition-all duration-500 md:bg-transparent ${
              mobileOpen ? 'left-0' : '-left-full'
            }
            md:static md:h-auto md:w-auto`}
          >
            <ul className=" mt-1 w-full gap-12 text-center md:flex">
              <li className="cursor-pointer border-amber-500 py-8 hover:border-t-2 hover:text-amber-500">
                Home
              </li>
              <li className="cursor-pointer border-amber-500 py-8 hover:border-t-2 hover:text-amber-500">
                Services
              </li>
              <li className="cursor-pointer border-amber-500 py-8 hover:border-t-2 hover:text-amber-500">
                Projects
              </li>
              <li className="cursor-pointer border-amber-500 py-8 hover:border-t-2 hover:text-amber-500">
                About us
              </li>
              <li className="mx-auto my-6 w-2/3 rounded-full border px-4 py-2 md:w-auto">{`Let's talk`}</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
