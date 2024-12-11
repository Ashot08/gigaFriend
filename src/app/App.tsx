import {Route, Routes} from 'react-router-dom';
import { AboutPageLazy } from 'pages/AboutPage/AboutPageLazy';
import { HomePageLazy } from 'pages/HomePage/HomePageLazy';
import { Suspense, useState } from 'react';
import { NavigationLazy } from 'components/Navigation/NavigationLazy';
import './styles/index.scss';
import { classNames } from 'shared/lib/ classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import tom from './tomato-throw.gif';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', theme)}>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div className={classNames('tomato')}>
        <img src={tom} alt=""/>
      </div>

      <Suspense fallback={<div>LoadingNavigation...</div>}>
        <NavigationLazy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div> }>
        <Routes>
        <Route path="/about" element={<AboutPageLazy/>} />
          <Route path="/" element={<HomePageLazy/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
