import { useState } from 'react';
import { Arrow, Close, Exit, User, UserSecondary } from '@/shared';

export const ProfileUi = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="flex items-center" onClick={toggleProfile}>
        <img src={User} className="w-10 h-10 cursor-pointer" alt="user" />
        <img
          src={Arrow}
          alt="arrow"
          className={`transition-transform duration-300 cursor-pointer ${
            isProfileOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isProfileOpen ? 'max-h-[262px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="border border-primary-purple-400 w-[280px] h-[280px] rounded-3xl bg-white absolute top-12 right-0 z-20">
          <img
            className="absolute right-2 top-2 cursor-pointer"
            src={Close}
            alt="close"
            onClick={toggleProfile}
          />
          <p className="my-5 mx-5">Смена пользователя</p>
          <div>
            <div className="flex items-center mx-5 bg-primary-purple-100 rounded-xl p-3 cursor-pointer">
              <img src={User} alt="user" className="w-10 h-10 mr-2" />
              <div>
                <p>Михаил</p>
                <p className="text-sm font-thin">Это вы</p>
              </div>
            </div>
            <div className="flex items-center px-3 border-b pb-5 border-gray pt-7 cursor-pointer gap-2 mx-5">
              <img className="h-10 w-10" src={UserSecondary} alt="user-ann" />
              <p>Анна</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 px-10 text-secondary-blue">
            <p className="cursor-pointer active:scale-110 transition">Выход</p>
            <img className="cursor-pointer active:scale-110 transition" src={Exit} alt="exit" />
          </div>
        </div>
      </div>
    </div>
  );
};
