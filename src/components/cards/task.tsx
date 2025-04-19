import '../../assets/scss/components/cards/task.scss';

interface Task {
  id: string;
  name: string;
  status: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="task">
      <p>{task.name}</p>
    </div>
  );
};

export default TaskCard;
