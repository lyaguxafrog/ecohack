'use client';

import { Card, CardFooter } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';
import { useRouter } from 'next/navigation';

import { EyeIcon, GroupIcon } from './icons';

interface IEventCardProps {
  title: string;
  img: string;
  className?: string;
  radius?: 'sm' | 'md' | 'lg' | 'none';
}
export default function EventCard({ title, img, className, radius }: IEventCardProps) {
  console.log(title, img);

  const navigation = useRouter();

  return (
    <Card
      isFooterBlurred
      isPressable
      className={`z-30 justify-center h-80 items-center ${className}`}
      radius={radius}
      onClick={() => navigation.push('event/1')}
    >
      <Image className="z-0 min-h-96 min-w-full object-cover" draggable={false} src={img} />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col gap-1">
            <h4 className="text-white font-medium text-xl text-left">{title}</h4>
            <div className="flex gap-2">
              <div className="flex gap-1 items-center">
                <EyeIcon color="rgb(255 255 255 / 0.6)" />
                <p className="text-tiny text-white/80">123</p>
              </div>
              <div className="flex gap-1 items-center">
                <GroupIcon color="rgb(255 255 255 / 0.6)" />
                <p className="text-tiny text-white/80">50</p>
              </div>
            </div>
          </div>
        </div>
        <Chip
          className="bg-gray-700 shadow-none border-t-1 border-default-600"
          radius="full"
          size="sm"
          variant="shadow"
        >
          <p className="text-white">Не зарегестрирован</p>
        </Chip>
      </CardFooter>
    </Card>
  );
}
