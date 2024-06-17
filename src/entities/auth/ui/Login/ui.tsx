import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Input, Logo, Password } from '@/shared';
import type { TLoginFormUI, TLoginUIProps } from '.';

export const LoginUI: FC<TLoginUIProps> = ({ onSubmit, loading }) => {
  const [login, setLogin] = useState<Partial<TLoginFormUI>>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleRememberMeToggle = () => {
    setLogin((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={Logo} alt="logo" />
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] my-5 text-center">Вход в Sirius Future</p>
      <div className="flex flex-col items-center">
        <Input
          value={login.email}
          name="email"
          onChange={handleUpdate}
          placeholder="E-mail"
          className="mb-5"
        />
        <Password
          value={login.password}
          name="password"
          onChange={handleUpdate}
          placeholder="Пароль"
        />
      </div>
      <div className="flex items-left mr-44 my-2">
        <Checkbox
          label="Запомнить меня"
          isChecked={login.rememberMe}
          toggleCheckbox={handleRememberMeToggle}
        />
      </div>
      <div className="my-3">
        <Button
          onClick={() => onSubmit(login as TLoginFormUI)}
          disabled={loading}
        >
          Войти
        </Button>
      </div>
      <div className="flex gap-20 text-secondary-blue">
        <p>Я забыл пароль</p>
        <p>Войти как тренер</p>
      </div>
      <div className="mt-20">
        <p>Нет аккаунта?</p>
      </div>
      <div className="text-secondary-blue">
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
      <div className="flex gap-2 mt-20">
        <p className="text-borders-purple text-[24px]">RU</p>
        <p className="text-[16px] my-1.5 text-third-grey">EN</p>
      </div>
    </div>
  );
};
