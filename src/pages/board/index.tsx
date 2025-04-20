import React from 'react';
import { Task, TasksByStatus } from './controller.tsx';
import TaskCard from '../../components/cards/task.tsx';
import '../../assets/scss/pages/tasks/board.scss';

interface StatusProps {
  status: string;
  tasks: Task[];
}

interface BoardProps {
  data: TasksByStatus[];
}

const CreateTaskForm = () => {
  return (
    <form className="create-task">
      <input type="text" placeholder="Type a name"></input>
      <input type="text" placeholder="Add a status"></input>

      <button type="submit">Create task</button>
    </form>
  );
};

const Status: React.FC<StatusProps> = ({ status, tasks }) => {
  let taskTotalText = 'task';
  if (tasks.length > 1) {
    taskTotalText = 'tasks';
  }

  return (
    <div className="status">
      <div className="status-header">
        <h3>{status}</h3>
        <button>+</button>
      </div>
      <p>
        {tasks.length} {taskTotalText}
      </p>
      <CreateTaskForm />
      <ul>
        {tasks.map(task => {
          return (
            <li>
              <TaskCard task={task} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Board = ({ data }: BoardProps) => {
  return (
    <div id="page" className="board">
      {data.map(status => (
        <Status status={status.status} tasks={status.tasks} />
      ))}
    </div>
  );
};

export default Board;
