import { Button, Checkbox, Input, Logo, Password } from '@/shared';
import { FC, useState } from 'react';
import { TRegistrationFormUI, TRegistrationFormUIProps } from '.';

export const RegistrationUI: FC<TRegistrationFormUIProps> = ({ onSubmit }) => {
  const [register, setRegister] = useState<Partial<TRegistrationFormUI>>();

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={Logo} alt="logo" />
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] my-5 text-center">
        Регистрация
      </p>
      <div className="flex flex-col items-center">
        <Input
          value={register?.name || ''}
          name="name"
          onChange={handleUpdate}
          placeholder="Имя"
          className="mb-5"
        />
        <Input
          value={register?.surname || ''}
          name="surname"
          onChange={handleUpdate}
          placeholder="Фамилия"
          className="mb-5"
        />
        <Input
          value={register?.email || ''}
          name="email"
          onChange={handleUpdate}
          placeholder="E-mail"
          className="mb-5"
        />
        <Password
          value={register?.password || ''}
          name="password"
          onChange={handleUpdate}
          placeholder="Пароль"
        />
      </div>
      <div className="flex items-left mr-44 my-2">
        <Checkbox label="Запомнить меня" />
      </div>
      <div className="my-3">
        <Button onClick={() => onSubmit(register)}>Зарегистрироваться</Button>
      </div>
      <div className="flex gap-2 mt-20">
        <p className="text-borders-purple text-[24px]">RU</p>
        <p className="text-[16px] my-1.5 text-third-grey">EN</p>
      </div>
    </div>
  );
};
