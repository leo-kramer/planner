import '../../assets/scss/pages/tasks/board.scss';

import Task from '../../components/cards/task.tsx';

export default function Board() {
  return (
    <div id="page" className="board">
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}
