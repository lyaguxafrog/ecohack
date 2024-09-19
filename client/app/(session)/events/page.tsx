'use client';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Pagination } from '@nextui-org/pagination';
import { Select, SelectItem } from '@nextui-org/select';
import { useState } from 'react';

import EventCard from '@/components/card';
import { SearchIcon, SortIcon } from '@/components/icons';
import { categories, eventsList } from '@/config/data';

const PER_PAGE_VARIANTS = [6, 12, 32];

export default function EventsPage() {
  const [isPopularPressed, setIsPopularPressed] = useState<boolean>(false);
  const [isNewPressed, setIsNewPressed] = useState<boolean>(false);

  return (
    <section className="w-full flex flex-col justify-between items-center">
      <div className="mb-5 w-full">
        <div className="flex gap-5">
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
            <Select className="max-w-xs" placeholder="Выбрать категорию" selectionMode="multiple" size="md">
              {categories.map((category) => (
                <SelectItem key={category.key}>{category.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex gap-5 flex-nowrap">
            <Button
              className="text-sm"
              radius="full"
              startContent={
                isPopularPressed ? (
                  <SortIcon className="rotate-180 transition-all" height={12} width={18} />
                ) : (
                  <SortIcon className="transition-all" height={12} width={18} />
                )
              }
              variant="light"
              onClick={() => setIsPopularPressed(!isPopularPressed)}
            >
              По популярности
            </Button>
            <Button
              radius="full"
              startContent={
                isNewPressed ? (
                  <SortIcon className="rotate-180 transition-all" height={12} width={18} />
                ) : (
                  <SortIcon className="transition-all" height={12} width={18} />
                )
              }
              variant="light"
              onClick={() => setIsNewPressed(!isNewPressed)}
            >
              По новизне
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap p-4 pt-0 gap-3 h-[calc(100vh-268px-124px+20px)] w-[calc(100%+32px)] overflow-auto scrollbar-thumb-gray-200 scrollbar-track-white scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {eventsList.map((event) => (
          <EventCard key={event.id} {...event} className="h-64 w-[399px]" radius="sm" />
        ))}
      </div>
      <div className="mt-[10px] ml-auto float-end flex items-center gap-5">
        <Select className="w-20" defaultSelectedKeys={[PER_PAGE_VARIANTS[0].toString()]} selectorIcon={<></>} size="sm">
          {PER_PAGE_VARIANTS.map((perPage) => (
            <SelectItem key={perPage}>{perPage.toString()}</SelectItem>
          ))}
        </Select>
        <Pagination isCompact showControls initialPage={1} total={10} />
      </div>
    </section>
  );
}
