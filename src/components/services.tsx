import type { FC } from 'react';

import { Container } from './containers';
import ServiceCard from './serviceCard';

const serviceData = [
  {
    image: '/s1.webp',
    title: 'Research',
    content:
      'We build effective strategies to help you reach customers and prospects across the entire world.',
  },
  {
    image: '/s2.webp',
    title: 'Branding',
    content:
      'Brand identity represents the visual elements and assets that distinguish a brand.',
  },
  {
    image: '/s3.webp',
    title: 'UI/UX Desgin',
    content:
      'UI/UX design services focus on creating intuitive & user-centric interfaces for digital products.',
  },
  {
    image: '/s4.webp',
    title: 'Development',
    content:
      "A concept or idea is brought to life through the service's various stages such as planning, testing and deployment.",
  },
];

const Services: FC = () => {
  return (
    <div className="py-24">
      <Container>
        <div className="flex grid-cols-12 flex-col-reverse gap-8 md:grid">
          <div className="flex flex-wrap md:col-span-6">
            {serviceData.map((service) => {
              return <ServiceCard key={service.title} {...service} />;
            })}
          </div>
          <div className="flex flex-col justify-center space-y-6 md:col-span-6">
            <div className="border-b-2 pb-6">
              <div className="mb-6 flex items-center gap-4">
                <span className="inline-block h-0.5 w-32 rounded-full bg-amber-500" />
                <span className="font-semibold text-amber-500">Services</span>
              </div>
              <div>
                <p className="text-4xl font-bold leading-none tracking-tight text-sky-950 md:text-5xl">
                  We can help you solve your problem through our service.
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg text-sky-900">
                We are a brand strategy & digital design agency building brands
                that matter in culture with more than ten years of experience.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-teal-500 to-teal-700  px-8 py-3 text-white"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
