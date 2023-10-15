import Image from 'next/image';
import type { FC } from 'react';

const ServiceCard: FC<{ image: string; title: string; content: string }> = ({
  image,
  title,
  content,
}) => {
  return (
    <div className="group m-3 space-y-8 self-start rounded-3xl border border-neutral-300 p-6 first:bg-sky-950 md:basis-[45%]">
      <div className="relative flex aspect-square h-16 items-center justify-center rounded-full bg-neutral-300/25">
        <div className="relative aspect-square w-2/3">
          <Image
            src={image}
            alt="logo of brag spot"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div>
        <p className="mb-4 text-lg font-bold text-sky-950 group-first:text-white">
          {title}
        </p>
        <p className="text-sky-800 group-first:text-neutral-300">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
