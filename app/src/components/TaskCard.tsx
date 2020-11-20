import { FC, Fragment } from 'react';

interface TaskCardProps {
  name: string;
  tags?: string[];
  description?: string;
  innerRef?: any;
}

const TaskCard: FC<TaskCardProps> = (props) => {
  return (
    <div className="py-3 px-3 shadow-md rounded bg-white" ref={props.innerRef}>
      <h1 className="text-lg font-semibold text-gray-800 leading-tight">
        {props.name}
      </h1>
      {props.description && (
        <p className="text-gray-700 text-sm leading-tight mt-1">
          {props.description}
        </p>
      )}
      {props.tags && (
        <p className="my-2 text-xs text-gray-600">
          #{' '}
          {props.tags.map((tag, index) => (
            <Fragment key={index}>
              <span className="font-bold hover:text-gray-800">{tag}</span>
              {props.tags && index !== props.tags.length - 1 && ', '}
            </Fragment>
          ))}
        </p>
      )}
    </div>
  );
};

export default TaskCard;
