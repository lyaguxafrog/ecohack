import EventCreateAbout from './about/about';
import EventCreateHeader from './header/header';

export default function EventCreate() {
  return (
    <div className="w-[1000px] m-auto">
      <EventCreateHeader />
      <EventCreateAbout />
    </div>
  );
}
