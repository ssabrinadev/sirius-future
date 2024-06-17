import { createBrowserRouter } from 'react-router-dom';
import { privateRoutes } from './private';
import { publicRoutes } from './public';

export const rootRoutes = publicRoutes.concat(privateRoutes);
const router = createBrowserRouter(rootRoutes);

export default router;
