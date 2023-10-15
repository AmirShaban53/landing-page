import type { FC } from 'react';

import { Container } from './containers';
import ProjectCard from './projectCard';

const projectsData = [
  {
    image: '/projects/project1.webp',
    title: 'SaaS Website',
    tag: 'Development. Jan 19, 2022',
  },
  {
    image: '/projects/project3.webp',
    title: 'Fast Food',
    tag: 'UI/UX. Mar 25, 2021',
  },
  {
    image: '/projects/project2.webp',
    title: 'Travel Website',
    tag: 'UX/UI. Jan 19, 2022',
  },
];

const Projects: FC = () => {
  return (
    <div className="relative overflow-hidden py-32">
      <div className="absolute top-0 -z-10 h-[76%] w-full bg-teal-700" />
      <Container>
        <div className="mb-16 flex flex-col gap-16 md:flex-row">
          <div className="basis-1/2 space-y-6 border-b border-neutral-50/10 pb-3 md:pb-6">
            <div className="flex items-center gap-4">
              <span className="inline-block h-0.5 w-32 rounded-full bg-amber-500" />
              <span className="font-semibold text-amber-500">Our Works</span>
            </div>
            <div>
              <p className="text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl">
                Our latest project
              </p>
            </div>
          </div>
          <div className=" basis-1/2 text-lg text-neutral-200">
            <p>
              We build products close to our heart. We make your idea to reality
              and make your dream successful with awesome experience.
            </p>
            <div className="space-x-6 text-right">
              <button type="button" className="group">
                {' '}
                <span className="rounded-full border px-3 pb-2 text-5xl group-hover:border-0 group-hover:bg-amber-400">
                  &#8592;
                </span>
              </button>
              <button type="button" className="group">
                {' '}
                <span className="rounded-full border px-3 pb-2 text-5xl group-hover:border-0 group-hover:bg-amber-400">
                  &#8594;
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          {projectsData.map((project) => {
            return <ProjectCard key={project.title} {...project} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
