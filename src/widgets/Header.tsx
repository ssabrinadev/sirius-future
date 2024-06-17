import { ProfileUi } from '@/entities/profile/ui';
import { Messages, useAuth } from '@/shared';

export const Header = () => {
  const { user } = useAuth();
  return (
    <header className="shadow mb-5 flex justify-between items-center rounded-2xl py-3 px-12">
      <div>
        <h1 className="text-2xl">
          Добро пожаловать, {' '}
          <span className="text-primary-purple-400">{user?.data?.name}!</span>
        </h1>
      </div>
      <div className="flex gap-5">
        <img className="" src={Messages} alt="messages" />
        <ProfileUi />
      </div>
    </header>
  );
};
