import { RegistrationUI, TRegistrationFormUI } from '@/entities/auth/ui';
import { useRegister } from '../..';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/shared';

export const Registration = () => {
  const [register, { isLoading }]  = useRegister();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values?: Partial<TRegistrationFormUI>) => {
    try {
      const { data } = await register(values);
      if (data) {
        navigate('/');
        setUser(data);
        return;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.dir(error);
    }
  };

  return <RegistrationUI loading={isLoading} onSubmit={handleSubmit} />;
};
