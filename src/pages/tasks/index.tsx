import React from 'react';
import { Task, TasksByStatus, Property, UpsertTask, GetProperties } from './controller.tsx';
import { useDb } from '../../services/supabase/data/client.tsx';
import TaskCard from '../../components/cards/task.tsx';
import { icons } from '../../types/loadicons.ts';
import '../../assets/scss/pages/tasks/tasks.scss';

interface StatusProps {
  status: string;
  tasks: Task[];
}

interface TasksProps {
  data: TasksByStatus[];
}

const CreateTaskForm = () => {
  const db = useDb();
  const properties: Property[] = GetProperties(db);

  return (
    <form className="create-task" onSubmit={e => UpsertTask(db)(e)}>
      <input type="text" name="name" placeholder="Type a name" data-property="false"></input>
      {properties.map(property => {
        return (
          <input
            key={property.name}
            type={property.type}
            name={property.id.toString()}
            placeholder={`Add a ${property.name}`}
            data-property="true"
          ></input>
        );
      })}
      <button type="submit">Create task</button>
    </form>
  );
};

const Status: React.FC<StatusProps> = ({ status, tasks }) => {
  return (
    <div className="status">
      <div className="status-header">
        <div className="metadata">
          <h3>{status}</h3>
          <div className="total-tasks center">{tasks.length}</div>
        </div>
        <div className="controls">
          <button className="icon" dangerouslySetInnerHTML={{ __html: icons.more_menu }}></button>
          <button className="icon" dangerouslySetInnerHTML={{ __html: icons.add }}></button>
        </div>
      </div>
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
      <button>
        <span className="icon" dangerouslySetInnerHTML={{ __html: icons.add }}></span> New task
      </button>
    </div>
  );
};

const Tasks = ({ data }: TasksProps) => {
  return (
    <div id="page" className="tasks">
      {data.map(status => (
        <Status status={status.status} tasks={status.tasks} />
      ))}
    </div>
  );
};

export default Tasks;
