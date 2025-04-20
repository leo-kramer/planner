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
  console.log(task);
  console.log(task.properties);

  return (
    <div className="task">
      <p>{task.name}</p>
      <ul className="properties">
        {task.properties.map(
          property => property.property !== 'status' && <li key={property.id}>{property.value}</li>
        )}
      </ul>
    </div>
  );
};

export default TaskCard;
