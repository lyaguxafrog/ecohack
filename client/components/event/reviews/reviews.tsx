'use client';

import { useRef, useState } from 'react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import ReviewsCard from './reviews-card/reviews-card';

import { NavArrowLeft, NavArrowRight } from '@/components/icons';
import { reviewsDataMock } from '@/config/data';

export default function EventReviews() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  const buttonPrevElement = useRef<HTMLButtonElement>(null);
  const buttonNextElement = useRef<HTMLButtonElement>(null);

  let CARDS_PER_PAGE = 0;

  if (reviewsDataMock.length < 4) CARDS_PER_PAGE = reviewsDataMock.length;
  else CARDS_PER_PAGE = 4;

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
    <div className="mt-10">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Отзывы и оценки</h1>
        <NavArrowRight color="black" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-nowrpap">
          <button
            ref={buttonPrevElement}
            className="slider-controls-button slider-controls--prev"
            onClick={prevButtonClickHandler}
          >
            <NavArrowLeft />
          </button>
          <Swiper
            className=""
            modules={[Navigation]}
            navigation={{
              prevEl: buttonPrevElement.current,
              nextEl: buttonNextElement.current,
              disabledClass: 'invisible',
            }}
            slidesPerView={CARDS_PER_PAGE}
            spaceBetween={16}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {reviewsDataMock.map((review) => (
              <SwiperSlide key={review.id} className="w-full">
                <ReviewsCard {...review} />
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
    </div>
  );
}
