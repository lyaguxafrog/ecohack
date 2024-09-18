'use client';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';

export default function LoginForm() {
  return (
    <div className="w-[60%] px-32">
      <h1 className="font-bold text-2xl mb-5">Вход</h1>

      <div className="flex flex-col justify-center items-center self-center gap-y-5">
        <Input label="Номер телефона" placeholder="+79991112233" size="sm" />
        <div className="flex gap-2 items-center ml-auto -mt-3">
          <p className="text-sm text-gray-400">Есть аккаунт? </p>
          <Link className="text-sm" href="register" underline="hover">
            Зарегистрироваться
          </Link>
        </div>
        <Button color="primary" size="lg">
          Войти
        </Button>
      </div>
    </div>
  );
}
