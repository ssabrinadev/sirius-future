import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Home } from '@/shared';

const Status: FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary-purple-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <div className="mb-4">
          <img src={Home} alt="home" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Вы уже авторизованы</h1>
        <p className="text-lg mb-6">
          Пожалуйста, вернитесь на главную страницу, чтобы продолжить
          использование нашего сервиса.
        </p>
        <Button onClick={handleNavigateHome}>
          <img src={Home} alt="home" />
          Вернуться на главную страницу
        </Button>
      </div>
    </div>
  );
};

export default Status;
