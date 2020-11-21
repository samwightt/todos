import React from 'react';
import Column from './Column';

const ColumnsContainer = () => {
  return (
    <div className="bg-gray-100 w-full flex-grow flex flex-row overflow-x-scroll overflow-y-scroll">
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default ColumnsContainer;
