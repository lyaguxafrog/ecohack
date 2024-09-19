/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';
import { useDisclosure } from '@nextui-org/modal';

import { useState } from 'react';
import CreateOrganize from './create-organize/create-organize';
import UserRewardsCard from './rewards-card/rewards-card';
import UserProfileCard from './user-card/user-card';
import UserParty from './user-party/user-party';

export default function Profile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [userCard, setUserCard] = useState<'Личные данные' | 'Награды'>('Награды');

  return (
    <div className="flex gap-10 w-full">
      <div className="w-1/4">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl">Экопортал</h1>
          <h2 className="text-2xl text-green-500">Личный кабинет</h2>
        </div>
        <div className="flex flex-col mt-5 gap-3 w-max">
          <p
            className="cursor-pointer hover:opacity-70 transition-colors text-lg"
            onClick={() => setUserCard('Личные данные')}
          >
            Личные данные
          </p>
          <p
            className="cursor-pointer hover:opacity-70 transition-colors text-lg"
            onClick={() => setUserCard('Награды')}
          >
            Награды
          </p>
          <p className="cursor-pointer hover:opacity-70 transition-colors text-lg" onClick={onOpen}>
            Создать Организатора
          </p>
          <p className="cursor-pointer hover:opacity-70 transition-colors text-red-500 text-lg">Выйти</p>
        </div>
      </div>
      {userCard === 'Личные данные' && <UserProfileCard />}
      {userCard === 'Награды' && <UserRewardsCard />}

      <UserParty />
      <CreateOrganize isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
