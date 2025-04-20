import React from 'react';
import { useDb } from '../../services/supabase/data/client.tsx';
import TaskCard from '../../components/cards/task.tsx';
import '../../assets/scss/pages/tasks/board.scss';

interface Task {
  id: number;
  name: string;
  properties: Property[];
}

interface Property {
  id: number;
  property: string;
  value: string;
}
interface TasksByStatus {
  status: string;
  tasks: Task[];
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
  const db = useDb();
  const [tasks, setTasksByStatus] = React.useState<TasksByStatus[]>([]);

  React.useEffect(() => {
    getTasksByStatus();
  }, []);

  async function getTasksByStatus() {
    const { data, error } = await db.rpc('get_tasks_grouped_by_property_value');
    if (error) throw error;
    setTasksByStatus(data);
  }

  return (
    <div id="page" className="board">
      {tasks.map(status => (
        <Status status={status.status} tasks={status.tasks} />
      ))}
    </div>
  );
}
