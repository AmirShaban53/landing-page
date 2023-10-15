import Image from 'next/image';
import type { FC } from 'react';

const ProjectCard: FC<{ image: string; title: string; tag: string }> = ({
  image,
  title,
  tag,
}) => {
  return (
    <div className="shrink-0 basis-4/5 overflow-hidden rounded-3xl shadow-2xl shadow-neutral-500/25 md:basis-1/2">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image}
          alt="logo of brag spot"
          fill
          sizes="100%"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex justify-between bg-white p-6">
        <div className="flex flex-col ">
          <span className="font-semibold text-sky-950 md:text-2xl">
            {title}
          </span>
          <span className="text-sm text-sky-900">{tag}</span>
        </div>
        <div>
          <button
            type="button"
            className="whitespace-nowrap rounded-full bg-gradient-to-r from-teal-500  to-teal-700 px-3 py-2 text-sm text-white md:px-8 md:py-3"
          >
            See Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
