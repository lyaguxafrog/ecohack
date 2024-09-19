'use client';
import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';

import { EmailIcon, PhoneIcon } from '@/components/icons';

export default function UserProfileCard() {
  return (
    <Card className="p-5 w-1/2">
      <CardHeader className="flex items-center gap-5">
        <Avatar size="lg" />
        <h1 className="text-2xl font-bold">Лукьянов Константин</h1>
      </CardHeader>
      <CardBody className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Телефон</h1>
          <div className="w-2/3">
            <Input placeholder="+79997776655" startContent={<PhoneIcon />} type="tel" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Почта</h1>
          <div className="w-2/3">
            <Input placeholder="JohnDoe@mail.ru" startContent={<EmailIcon />} type="email" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">Дата Рождения</h1>
          <div className="w-2/3">
            <DatePicker showMonthAndYearPickers />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
