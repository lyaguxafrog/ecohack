import EventAbout from './about/about';
import EventHeader from './header/header';
import EventReviews from './reviews/reviews';

export default function Event() {
  return (
    <div className="w-[1000px] m-auto">
      <EventHeader />
      <EventAbout />
      <EventReviews />
      {/* <Map center={[51.51, -0.12]} points={[[51.51, -0.09]]} zoom={10} /> */}
    </div>
  );
}
