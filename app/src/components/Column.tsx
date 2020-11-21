import React from 'react';

import TaskCard from './TaskCard';

const Column = () => {
  return (
    <div className="w-72 h-full flex-none flex flex-col border-r border-gray-300">
      <div className="bg-white py-10 px-6 border-b border-gray-300">
        <h1 className="text-3xl font-bold">Sunday</h1>
        <h2 className="text-xl">September 23, 1999</h2>
      </div>
      <div className="flex-col h-full py-4 flex px-2 overflow-y-scroll">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default Column;
