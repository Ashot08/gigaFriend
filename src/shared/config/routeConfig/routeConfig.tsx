import HomePage from 'pages/HomePage/HomePage';
import { AboutPage } from 'pages/AboutPage';
import { RouteObject } from 'react-router-dom';
import App from 'app/App';

export enum AppRoutes {
  HOME = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
}

export const Routes: RouteObject[] = [
  {
    path: RoutePath[AppRoutes.HOME],
    element: <App/>,
    children: [
      {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage />,
      },
      {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
      }
    ]
  },
];
