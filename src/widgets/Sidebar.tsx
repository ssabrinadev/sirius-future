import { Button, Gift, Logo, cn, sidebarMenuList } from '@/shared';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="rounded-3xl flex-col bg-primary-purple-100 py-11 pr-11 ">
      <div className="mb-20 flex justify-center">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col flex-1 h-[60%]">
        {sidebarMenuList.map((menu) => (
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              cn('flex gap-2 py-1.5 pl-11 rounded-r-full', {
                'bg-primary-purple-300 text-white': isActive,
              })
            }
          >
            <img src={`/icons/${menu.icon}.svg`} alt={menu.icon} />
            <span>{menu.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="rounded-2xl ml-11 p-4 bg-white relative overflow-hidden">
        <h1 className="whitespace-nowrap mb-2">
          Учитесь бесплатно
        </h1>
        <p className="text-[10px] font-light mb-4">
          Приводите друзей с детьми <br />
          заниматься в Sirius Future <br />
          и получайте подарки!
        </p>
        <Button className="w-auto !px-4 py-2 bg-secondary-beryuzovy text-black">
          Узнать
        </Button>
        <img src={Gift} alt="gift" className="absolute right-0 bottom-0" />
      </div>
    </div>
  );
};
