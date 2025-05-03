import { useEffect, useState } from 'react';
import { useDb } from '../../services/supabase/data/client.tsx';
import Tasks from './index.tsx';

export interface Task {
  id: number;
  name: string;
  properties: Property[];
}

export interface Property {
  id: number;
  property: string;
  value: string;
}

export interface TasksByStatus {
  status: string;
  tasks: Task[];
}

const TasksController = () => {
  const db = useDb();
  const [data, setData] = useState<TasksByStatus[]>([]);

  useEffect(() => {
    const getTasksByStatus = async () => {
      const { data, error } = await db.rpc('get_tasks_grouped_by_property_value');
      if (error) throw error;
      setData(data);
    };

    getTasksByStatus();
  }, [db]);

  return <Tasks data={data} />;
};

export default TasksController;
