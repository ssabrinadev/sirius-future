import { Sidebar } from '@/widgets/Sidebar';
import { useAuth } from '@/shared';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header';

const MainLayout = () => {
  const { isAuth } = useAuth();

  return (
    isAuth ? (
      <main className="flex gap-8 container">
        <Sidebar />
        <div className="flex-1 min-h overflow-auto">
          <Header />
          <Outlet />
        </div>
      </main>
    ) :
    <Navigate to="auth/login" replace />
  );
};

export default MainLayout;
