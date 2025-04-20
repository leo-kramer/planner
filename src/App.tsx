import React, { Suspense } from 'react';
import { DbProvider } from './services/supabase/data/connect.tsx';
import './types/scss.d.ts';
import './types/vite-env.d.ts';
import './assets/scss/main/main.scss';

const TaskBoard = React.lazy(() => import('./pages/tasks/board.tsx'));
const Menu = React.lazy(() => import('./components/sections/menu.tsx'));

function App() {
  return (
    <DbProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <TaskBoard />
      </Suspense>
    </DbProvider>
  );
}

export default App;
