import { useRoutes } from 'react-router-dom';
import { rootRoutes } from '@/app/providers/router';

export const useRoute = () => {
    const routing = useRoutes(rootRoutes);
    return routing;
};
