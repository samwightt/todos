import React from 'react';
import type { FC } from 'react';

import LeftSidebar from './LeftSidebar';
import ColumnsContainer from './ColumnsContainer';
import RightSidebar from './RightSidebar';

const Layout: FC = ({ children }) => {
  return (
    <div className="h-screen w-full max-h-screen flex flex-col bg-gray-100">
      <div className="col-span-3 h-12 bg-black"></div>
      <div className="h-full flex flex-row">
        <LeftSidebar />
        <ColumnsContainer />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
