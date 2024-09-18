'use client';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';

export default function LoginForm() {
  return (
    <div className="w-full px-32">
      <div className="flex mb-10 justify-between">
        <h1 className="font-bold text-2xl">Вход</h1>
        <Link href="register" underline="hover">
          Зарегистрироваться
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center self-center gap-y-5">
        <Input label="Номер телефона" placeholder="+79991112233" size="sm" />
        <Button color="primary" size="lg">
          Войти
        </Button>
      </div>
    </div>
  );
}
