'use client';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { checkAuth, registerUser } from '@/store/api-actions';
import { RegisterInput, useAppDispatch, useAppSelector } from '@/types';
import { IRegisterForm } from '@/types/auth-types';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { useState } from 'react';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<IRegisterForm>();
  const dispatch = useAppDispatch();
  const navigation = useRouter();
  const phoneToCall = useAppSelector((state) => state.DATA_STATE.phoneToCall);
  const [shownPhoneToCall, setShownPhoneToCall] = useState(false);
  const [savedPhone, setSavedPhone] = useState<string>('');

  const onSubmit = (data: RegisterInput) => {
    dispatch(registerUser({ registerUserInput: data })).then((reqData) => {
      if (reqData.meta.requestStatus === 'fulfilled') {
        setShownPhoneToCall(true);
        console.log(phoneToCall);
        setSavedPhone(data.phone);
      }
    });
  };

  const dataD = {
    phone: savedPhone,
  };

  const showPhoneToCallHandler = () => {
    dispatch(checkAuth({ registerUserInput: dataD })).then((reqData) => {
      if (reqData.meta.requestStatus === 'fulfilled') {
        navigation.push('/');
      } else {
        // TODO: show error message
        console.log(reqData);
      }
    });
  };

  return (
    <form className="w-[60%] px-32">
      <h1 className="font-bold text-2xl mb-5">Регистрация</h1>
      <div className="flex flex-col justify-center items-center self-center gap-y-5">
        <div className="flex gap-2 w-full">
          <Input {...register('firstName', { required: true })} label="Имя" placeholder="Иван" size="sm" />
          <Input {...register('lastName', { required: true })} label="Фамилия" placeholder="Иванов" size="sm" />
        </div>
        <Input {...register('phone', { required: true })} label="Номер телефона" placeholder="79991112233" size="sm" />
        {/* <div className="w-full max-w-xl flex flex-row gap-4">
          <DatePicker showMonthAndYearPickers label="Дата Рождения" />
        </div> */}
        <div className="flex gap-x-2 items-center ml-auto -mt-3">
          <p className="text-sm text-gray-400">Есть аккаунт? </p>
          <Link className="text-sm" href="login" underline="hover">
            Войти
          </Link>
        </div>

        <Button isDisabled={shownPhoneToCall} color="primary" size="lg" onClick={handleSubmit(onSubmit)}>
          Зарегистрироваться
        </Button>
        {shownPhoneToCall && (
          <div className="flex flex-col gap-5 items-center">
            <Card shadow="sm">
              <CardHeader>
                <h1 className="text-xl">Позвоните по данному номеру и вы войдете в систему</h1>
              </CardHeader>
              <CardBody className="text-lg font-semibold text-center justify-center text-green-500">
                {phoneToCall}
              </CardBody>
            </Card>
            <p>Ваш сохраненный номер: {savedPhone}</p>
            <Button variant="solid" color="primary" onClick={showPhoneToCallHandler}>
              Войти
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}
