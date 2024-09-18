'use client';

import { Card, CardFooter } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';

import { EyeIcon, GroupIcon } from './icons';

import { ICard } from '@/types';

export default function EventCard({ img, title }: ICard) {
  return (
    <Card
      isFooterBlurred
      isPressable
      className="col-span-12 sm:col-span-7 justify-center items-center hover:-translate-y-1"
    >
      <Image className="z-0 object-cover" draggable={false} src={img} />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col gap-1">
            <h4 className="text-white font-medium text-xl">{title}</h4>
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
        <Chip radius="full" size="sm" variant="shadow">
          <p className="text-white">Не зарегестрирован</p>
        </Chip>
      </CardFooter>
    </Card>
  );
}
