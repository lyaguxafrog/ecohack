import { Button } from '@nextui-org/button';

import UserProfileCard from './user-card/user-card';
import UserParty from './user-party/user-party';

export default function Profile() {
  return (
    <div className="flex gap-10 w-full">
      <div className="w-1/3">
        <div className="flex flex-col px-5">
          <h1 className="font-bold text-3xl">Экопортал</h1>
          <h2 className="text-2xl text-green-500">Личный кабинет</h2>
        </div>
        <div className="flex flex-col mt-5 gap-3">
          <Button className="border-green-500" variant="ghost">
            Личные данные
          </Button>
          <Button className="bg-red-600 text-white">Выйти</Button>
        </div>
      </div>
      <UserProfileCard />
      <UserParty />
    </div>
  );
}
