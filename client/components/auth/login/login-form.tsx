'use client';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { checkAuth, signIn } from '@/store/api-actions';
import { useAppDispatch, useAppSelector } from '@/types';
import { ICheckAuth } from '@/types/auth-types';

export default function LoginForm() {
  const { register, handleSubmit } = useForm<ICheckAuth>();
  const dispatch = useAppDispatch();
  const navigation = useRouter();
  const [shownPhoneToCall, setShownPhoneToCall] = useState(false);
  const [savedPhone, setSavedPhone] = useState<string>('');
  const phoneToCall = useAppSelector((state) => state.DATA_STATE.phoneToCall);

  const onSubmit = (data: ICheckAuth) => {
    dispatch(signIn({ signInInput: data })).then((reqData) => {
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
      <h1 className="font-bold text-2xl mb-5">Вход</h1>

      <div className="flex flex-col justify-center items-center self-center gap-y-5">
        <Input {...register('phone', { required: true })} label="Номер телефона" placeholder="+79991112233" size="sm" />
        <div className="flex gap-2 items-center ml-auto -mt-3">
          <p className="text-sm text-gray-400">Есть аккаунт? </p>
          <Link className="text-sm" href="register" underline="hover">
            Зарегистрироваться
          </Link>
        </div>
        <Button onClick={handleSubmit(onSubmit)} color="primary" size="lg">
          Войти
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
            <Button color="primary" variant="solid" onClick={showPhoneToCallHandler}>
              Войти
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}
