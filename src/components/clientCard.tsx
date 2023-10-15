import Image from 'next/image';
import type { FC } from 'react';

const ClientCard: FC<{ image: string; name: string; title: string }> = ({
  image,
  name,
  title,
}) => {
  return (
    <div className="shrink-0 basis-1/3 space-y-4 p-8">
      <p className="text-sky-900 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio est ad
        velit labore illo in corrupti eos perspiciatis quos, nostrum repudiandae
        modi nulla eaque exercitationem veritatis cum nesciunt corporis
        quisquam?
      </p>
      <div className="flex gap-3">
        <div className="relative aspect-square h-12 overflow-hidden rounded-full">
          <Image
            src={image}
            alt="logo of brag spot"
            fill
            sizes="100%"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-sky-900">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
