import React, { Suspense } from 'react';
import { createDbClient, SupabaseContext } from './services/supabase/data/client.tsx';
import { Routes, Route } from 'react-router-dom';
import './types/scss.d.ts';
import './types/vite-env.d.ts';
import './assets/scss/main/main.scss';

const Home = React.lazy(() => import('./pages/home/controller.tsx'));
const TaskBoard = React.lazy(() => import('./pages/board/controller.tsx'));
const Menu = React.lazy(() => import('./components/sections/menu.tsx'));

const db = createDbClient();

function App() {
  return (
    <SupabaseContext.Provider value={db}>
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskBoard />} />
        </Routes>
      </Suspense>
    </SupabaseContext.Provider>
  );
}

export default App;
