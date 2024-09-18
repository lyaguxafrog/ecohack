import { Image } from '@nextui-org/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex gap-4">
      <div className="mx-auto flex w-screen h-screen items-center">
        <div className="w-full h-full">
          <Image
            className="w-full h-screen object-cover"
            radius="none"
            src="https://www.autodesk.com/blogs/construction/wp-content/uploads/2020/10/1920x1080-blog_001.jpg"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
