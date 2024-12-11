import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Routes } from 'shared/config/routeConfig/routeConfig';

const router = createBrowserRouter(Routes)

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={router}/>
  </ThemeProvider>
);
