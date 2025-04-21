import React, { Suspense } from 'react';
// import { DbProvider } from './services/supabase/data/connect.tsx';
import { createDbClient, SupabaseContext } from './services/supabase/data/client.tsx';
import './types/scss.d.ts';
import './types/vite-env.d.ts';
import './assets/scss/main/main.scss';

const TaskBoard = React.lazy(() => import('./pages/board/controller.tsx'));
const Menu = React.lazy(() => import('./components/sections/menu.tsx'));

const db = createDbClient();

function App() {
  return (
    <SupabaseContext.Provider value={db}>
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <TaskBoard />
      </Suspense>
    </SupabaseContext.Provider>
  );
}

export default App;
