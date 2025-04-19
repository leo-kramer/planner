import React, { Suspense } from 'react';
import './types/scss.d.ts';
import './assets/scss/main/main.scss';

const TaskBoard = React.lazy(() => import('./pages/tasks/board.tsx'));
const Menu = React.lazy(() => import('./components/sections/menu.tsx'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Menu />
      <TaskBoard />
    </Suspense>
  );
}

export default App;
