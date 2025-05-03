interface TasksProps {
  data: string;
}

const Tasks = ({ data }: TasksProps) => {
  return (
    <div id="page" className="home">
      <h1>{data}</h1>
    </div>
  );
};

export default Tasks;
