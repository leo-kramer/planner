import '../../assets/scss/pages/tasks/board.scss';
import { Tasks } from '../../services/firebase/data/tasks.js';
import { Properties } from '../../services/firebase/data/properties.js';
import { PropertyValues } from '../../services/firebase/data/property_values.js';

import TaskCard from '../../components/cards/task.tsx';

interface Task {
  id: string;
  name: string;
  status: string;
}
interface StatusProps {
  status: string;
  tasks: Task[];
}

const Status: React.FC<StatusProps> = ({ status, tasks }) => {
  return (
    <div className="status">
      <h3>{status}</h3>
      {tasks.map(task => {
        return <TaskCard task={task} />;
      })}
    </div>
  );
};

export default function Board() {
  const groupedTasks: Record<string, Task[]> = {};
  const statuses: string[] = [];

  Tasks.forEach((task: Task) => {
    if (!statuses.includes(task.status)) {
      statuses.push(task.status);
    }

    if (!groupedTasks[task.status]) {
      groupedTasks[task.status] = [];
    }
    groupedTasks[task.status].push(task);
  });

  console.log(statuses);
  console.log(groupedTasks);

  return (
    <div id="page" className="board">
      {statuses.map(status => {
        return <Status status={status} tasks={groupedTasks[status]} />;
      })}
    </div>
  );
}
