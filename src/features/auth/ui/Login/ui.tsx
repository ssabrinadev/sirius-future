import { LoginUI, TLoginFormUI } from '@/entities/auth/ui/Login';
import { useLogin } from '../..';
import { useAuth } from '@/shared';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [login, { isLoading }] = useLogin();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (value: TLoginFormUI) => {
    try {
      const response = await login(value);
      if (response.data) {
        setUser(response?.data);
        navigate('/');
        return;
      }

    } catch (error) {
      // eslint-disable-next-line no-console
      console.dir(error);
    }
  };

  return <LoginUI loading={isLoading} onSubmit={handleSubmit} />;
};
