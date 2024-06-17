import { useAuth } from '@/shared/hooks/useAuth';
import { Outlet } from 'react-router-dom';
import Status from '@/entities/status/ui/ui.tsx';

const AuthLayout = () => {
  const { isAuth } = useAuth();

  return <div>{isAuth ? <Status /> : <Outlet />}</div>;
};

export default AuthLayout;
