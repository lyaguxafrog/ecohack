import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody } from '@nextui-org/card';

export default function EventOrganizer() {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Организатор</h1>
      <Card className="w-full p-5 bg-gray-100 mt-5" shadow="none">
        <CardBody className="flex flex-row justify-around items-center w-full">
          <div className="flex flex-col items-center">
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <h1 className="font-bold text-xl mt-2">OOO Moscow</h1>
            <p className="font-light text-sm">+ 4.5</p>
          </div>
          <p className="w-[70%] text-black text-wrap">
            <span className="px-2">
              Организация - это сложная система, состоящая из взаимосвязанных элементов и компонентов, работающих вместе
              для достижения общей цели или задачи. Она представляет собой структурированный подход к управлению
              ресурсами, процессами и людьми в рамках определенной деятельности
            </span>{' '}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
