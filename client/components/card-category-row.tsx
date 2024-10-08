import { useRef, useState } from 'react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import EventCard from './card';
import { NavArrowLeft, NavArrowRight } from './icons';

import { ICard, IEvent } from '@/types';

interface ICardCategoryRowProps {
  title: string;
  content: ICard[];
  className?: string;
}

export const CardCategoryRow = ({ title, content, className }: ICardCategoryRowProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  const buttonPrevElement = useRef<HTMLButtonElement>(null);
  const buttonNextElement = useRef<HTMLButtonElement>(null);

  const CARDS_PER_PAGE = 3;

  const prevButtonClickHandler = () => {
    for (let i = 0; i < CARDS_PER_PAGE - 1; i++) {
      swiperInstance?.slidePrev();
    }
  };
  const nextButtonClickHandler = () => {
    for (let i = 0; i < CARDS_PER_PAGE - 1; i++) {
      swiperInstance?.slideNext();
    }
  };

  return (
    <div className={'flex flex-col ' + className ?? ''}>
      <span className="text-xl font-bold ml-6">{title}</span>
      <div className="flex flex-nowrpap bg-none">
        <button
          ref={buttonPrevElement}
          className="slider-controls-button slider-controls--prev"
          onClick={prevButtonClickHandler}
        >
          <NavArrowLeft />
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: buttonPrevElement.current,
            nextEl: buttonNextElement.current,
            disabledClass: 'invisible',
          }}
          slidesPerView={CARDS_PER_PAGE}
          spaceBetween={14}
          wrapperClass="py-5"
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {content.map((item) => (
            <SwiperSlide key={item.id} className="w-full">
              <EventCard title={item.title} img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={buttonNextElement}
          className="slider-controls-button slider-controls--next"
          onClick={nextButtonClickHandler}
        >
          <NavArrowRight />
        </button>
      </div>
    </div>
  );
};
