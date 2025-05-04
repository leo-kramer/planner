import { icons } from '../../types/loadicons.ts';
import '../../assets/scss/components/cards/task.scss';

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

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="task">
      <div className="task-header">
        <p>{task.name}</p>
        <button
          className="icon delete-task"
          dangerouslySetInnerHTML={{ __html: icons.delete }}
        ></button>
      </div>
      <ul className="properties">
        {(task.properties ?? []).map(
          property => property.property !== 'status' && <li key={property.id}>{property.value}</li>
        )}
      </ul>
    </div>
  );
};

export default TaskCard;
