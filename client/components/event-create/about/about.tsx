import { Textarea } from '@nextui-org/input';

export default function EventCreateAbout() {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">О событии</h1>
      <Textarea className="mt-2" placeholder="Введите описание события" />
    </div>
  );
}
