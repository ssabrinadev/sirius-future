import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const MainLayout = lazy(() => import('@/app/layouts/ui/MainLayout'));
const HomePage = lazy(() => import('@/pages/home'));
const TestPage = lazy(() => import('@/pages/test'));
const SchedulerPage = lazy(() => import('@/pages/scheduler'));
const NotFoundPage = lazy(() => import('@/pages/not-found'));

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: 'scheduler',
        element: <SchedulerPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
