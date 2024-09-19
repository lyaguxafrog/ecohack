import { Image } from '@nextui-org/image';

export default function EventHeader() {
  return (
    <div className="w-full">
      <div className="w-[1000px] m-auto">
        <Image
          className="object-cover"
          height={300}
          src="https://www.autodesk.com/blogs/construction/wp-content/uploads/2020/10/1920x1080-blog_001.jpg"
          width={1000}
        />
        <h1 className="text-4xl text-center font-bold mt-10">Экотон-2023: Коллективное путешествие в природу</h1>
      </div>
    </div>
  );
}
