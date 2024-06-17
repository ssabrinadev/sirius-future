import { TMenuSidebar } from '@/shared/constans/types';


export const sidebarMenuList: TMenuSidebar[] = [
  {
    name: 'Главная',
    path: '/',
    icon: 'home',
  },
  {
    name: 'Расписание',
    path: '/scheduler',
    icon: 'calendar',
  },
  {
    name: 'Оплата',
    path: '/payment',
    icon: 'wallet',
  },
  {
    name: 'Достижения',
    path: '/achievement',
    icon: 'achievements',
  },
  {
    name: 'Тренажеры',
    path: '/exercise-equipment',
    icon: 'puzzle',
  },
  {
    name: 'Библиотека',
    path: '/library',
    icon: 'folder-open',
  },
  {
    name: 'Проверка связи',
    path: '/checking-connection',
    icon: 'headphones',
  },
  {
    name: 'Настройки',
    path: '/settings',
    icon: 'settings',
  },
  {
    name: 'Вопросы',
    path: '/question',
    icon: 'question',
  },
];
