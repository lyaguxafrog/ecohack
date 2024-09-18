'use client';
import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';

import { EmailIcon, PhoneIcon } from '@/components/icons';

export default function UserProfileCard() {
  return (
    <Card className="p-5 w-full">
      <CardHeader className="flex items-center gap-5">
        <Avatar size="lg" />
        <h1 className="text-2xl font-bold">Лукьянов Константин</h1>
      </CardHeader>
      <CardBody className="flex gap-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Телефон</h1>
          <div className="w-3/4">
            <Input startContent={<PhoneIcon />} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Почта</h1>
          <div className="w-3/4">
            <Input startContent={<EmailIcon />} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Дата Рождения</h1>
          <div className="w-3/4">
            <DatePicker />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
