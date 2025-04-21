interface BoardProps {
  data: string;
}

const Board = ({ data }: BoardProps) => {
  return (
    <div id="page" className="home">
      <h1>{data}</h1>
    </div>
  );
};

export default Board;
