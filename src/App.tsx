import React, { Suspense } from 'react';
import { AppProvider } from './provider.tsx';
import { Routes, Route } from 'react-router-dom';
import './types/scss.d.ts';
import './types/vite-env.d.ts';
import './assets/scss/main/main.scss';

const Home = React.lazy(() => import('./pages/home/controller.tsx'));
const TaskBoard = React.lazy(() => import('./pages/board/controller.tsx'));
const Menu = React.lazy(() => import('./components/sections/menu.tsx'));

function App() {
  return (
    <AppProvider>
      {/* TODO: Make loading screen component */}
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskBoard />} />
        </Routes>
      </Suspense>
    </AppProvider>
  );
}

export default App;
