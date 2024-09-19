'use client';

import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

import { CardCategoryRow } from '@/components/card-category-row';
import { SearchIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { animals, eventsList } from '@/config/data';
import { ICard } from '@/types';
import { Map } from '@/components/map';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-8 pb-12">
      <div className="inline-block max-w-3xl text-center justify-center">
        <h1 className={`${title()}`}>
          <span className="text-green-500">Сохраните Землю</span>, она единственная, что у нас есть
        </h1>
      </div>

      <div className="flex gap-3 mt-8 w-full">
        <Autocomplete
          disableSelectorIconRotation
          className="w-2/4 mx-auto"
          defaultItems={animals}
          labelPlacement="outside"
          placeholder="Поиск..."
          selectorIcon={<SearchIcon className="text-base text-default-400 pointer-events-none" />}
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
      </div>

      <div className="mt-8 w-full">
        <Card isFooterBlurred className="border-none h-[500px] mx-6" radius="lg">
          <Image
            alt="Woman listing to music"
            className="object-cover absolute"
            height={500}
            src="https://www.autodesk.com/blogs/construction/wp-content/uploads/2020/10/1920x1080-blog_001.jpg"
            width="100%"
          />
          <CardBody className="z-10">
            <div className="bg-transparent-white py-10 px-12 m-auto rounded-full flex flex-nowrpap gap-8 justify-center w-fit backdrop-blur">
              <div className="flex flex-col justify-center">
                <span className="text-4xl font-extrabold">12 : 02 : 42</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Выставка концептов «Вертикальный лес»</span>
                <span className="text-sm font-semibold italic">Москва, ул. Молдагуловой, д.15, кв.127.</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-8 w-full">
        <CardCategoryRow content={eventsList as ICard[]} title="Живое творчество с наставниками" />
        <CardCategoryRow className="mt-6" content={eventsList as ICard[]} title="Живое творчество с наставниками" />
      </div>

      <div className="mt-8 w-full">
        <Map center={[55.755853, 37.6177]} className="w-[1184px] mx-auto" points={[[55.755853, 37.6177]]} zoom={13} />
      </div>
    </section>
  );
}
