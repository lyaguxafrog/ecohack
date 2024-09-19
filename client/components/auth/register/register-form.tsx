'use client';
import { Button } from '@nextui-org/button';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';

export default function RegisterForm() {
  return (
    <div className="w-[60%] px-32">
      <h1 className="font-bold text-2xl mb-5">Регистрация</h1>
      <div className="flex flex-col justify-center items-center self-center gap-y-5">
        <div className="flex gap-2 w-full">
          <Input label="Имя" placeholder="Иван" size="sm" />
          <Input label="Фамилия" placeholder="Иванов" size="sm" />
        </div>
        <Input label="Номер телефона" placeholder="+79991112233" size="sm" />
        <Input label="Email" placeholder="JohnDoe@mail.ru" size="sm" />
        <div className="w-full max-w-xl flex flex-row gap-4">
          <DatePicker showMonthAndYearPickers label="День Рождения" />
        </div>
        <div className="flex gap-x-2 items-center ml-auto -mt-3">
          <p className="text-sm text-gray-400">Есть аккаунт? </p>
          <Link className="text-sm" href="login" underline="hover">
            Войти
          </Link>
        </div>

        <Button color="primary" size="lg">
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
}
