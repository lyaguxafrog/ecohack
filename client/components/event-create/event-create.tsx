'use client';

import dynamic from 'next/dynamic';

import EventCreateAbout from './about/about';
import EventCreateHeader from './header/header';

export default function EventCreate() {
  const Map = dynamic(() => import('../../components/map'), { ssr: false });

  return (
    <div className="w-[1000px] m-auto">
      <EventCreateHeader />
      <EventCreateAbout />
      <Map center={[55.755853, 37.6177]} className="w-[1000px] mx-auto mt-5" draggable={true} />
    </div>
  );
}
