import React from 'react';

const RightSidebar = () => {
  return (
    <div className="hidden lg:flex lg:flex-row lg:flex-0">
      <div className="bg-green-500 w-64"></div>
      <div className="bg-orange-500 w-16 flex flex-col space-y-4 items-center pt-4">
        <div className="w-10 h-10 bg-black rounded"></div>
        <div className="w-10 h-10 bg-black rounded"></div>
        <div className="w-10 h-10 bg-black rounded"></div>
        <div className="w-10 h-10 bg-black rounded"></div>
        <div className="w-10 h-10 bg-black rounded"></div>
      </div>
    </div>
  );
};

export default RightSidebar;
