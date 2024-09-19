'use client';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Pagination } from '@nextui-org/pagination';
import { Select, SelectItem } from '@nextui-org/select';
import { useState } from 'react';

import EventCard from '@/components/card';
import { SearchIcon, SortIcon } from '@/components/icons';
import { categories, eventsList } from '@/config/data';
import { Map } from '@/components/map';

export default function EventsPage() {
  const [isPopularPressed, setIsPopularPressed] = useState<boolean>(false);
  const [isNewPressed, setIsNewPressed] = useState<boolean>(false);

  return (
    <section className="w-full">
      <div className="mb-20">
        <div className="flex justify-between gap-5">
          <div className="w-1/2">
            <Input
              aria-label="Search"
              className="min-w-96 mb-5"
              classNames={{
                inputWrapper: 'bg-default-100',
                input: 'text-sm',
              }}
              labelPlacement="outside"
              placeholder="Поиск"
              startContent={<SearchIcon className="text-base text-default-400 pointer-events-none" />}
              type="search"
            />
            <Select
              className="max-w-xs"
              label="Категории"
              placeholder="Выбрать категорию"
              selectionMode="multiple"
              size="sm"
            >
              {categories.map((category) => (
                <SelectItem key={category.key}>{category.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex gap-5 flex-nowrap">
            <Button
              endContent={
                isPopularPressed ? (
                  <SortIcon className="rotate-180 transition-all" height={20} width={50} />
                ) : (
                  <SortIcon className="transition-all" height={20} width={50} />
                )
              }
              radius="full"
              onClick={() => setIsPopularPressed(!isPopularPressed)}
            >
              По популярности
            </Button>
            <Button
              endContent={
                isNewPressed ? (
                  <SortIcon className="rotate-180 transition-all" height={20} width={50} />
                ) : (
                  <SortIcon className="transition-all" height={20} width={50} />
                )
              }
              radius="full"
              onClick={() => setIsNewPressed(!isNewPressed)}
            >
              По новизне
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        {eventsList.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      <div className="mt-5 float-end flex items-center gap-5">
        <Button>Показать еще</Button>
        <Pagination isCompact showControls initialPage={1} total={10} />
      </div>
      <Map center={[51.51, -0.12]} points={[[51.51, -0.09]]} />
    </section>
  );
}
