import { useState, FC } from 'react';

interface TaskCreationCardProps {
  date: Date;
}

const TaskCreationCard: FC<TaskCreationCardProps> = (props) => {
  const [text, setText] = useState('');

  return (
    <form
      className="bg-white shadow-md py-3 px-3"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="text-sm"
        type="text"
        placeholder="Create a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskCreationCard;
