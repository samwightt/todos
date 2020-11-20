import React from 'react';
import type { FC } from 'react';
import LeftSidebar from './LeftSidebar';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import type { LayoutQuery } from '../__generated__/LayoutQuery.graphql';
import { add } from 'date-fns';

import ColumnsList from './ColumnsList';

const mainQuery = graphql`
  query LayoutQuery($days: [DateTime!]!) {
    ...ColumnsListFragment @arguments(days: $days)
  }
`;

const getDefaultDates = () => {
  const arr: Date[] = [];

  for (let i = 0; i < 5; i++) {
    arr.push(
      add(new Date(), {
        days: i,
      }),
    );
  }

  return arr;
};

const days = getDefaultDates().map((item) => item.toISOString());

const Layout: FC = ({ children }) => {
  const data = useLazyLoadQuery<LayoutQuery>(mainQuery, {
    days,
  });

  return (
    <div className="h-screen w-full max-h-screen grid appCols">
      <div className="col-span-3 h-12 bg-black"></div>
      <LeftSidebar />
      <ColumnsList days={data} />
      <div className="hidden lg:flex lg:flex-row">
        <div className="bg-green-500 h-screen w-64"></div>
        <div className="w-16 bg-amber-500 flex-col space-y-6 pt-10 flex-none">
          <div className="w-10 h-10 bg-black mx-auto rounded"></div>
          <div className="w-10 h-10 bg-black mx-auto rounded"></div>
          <div className="w-10 h-10 bg-black mx-auto rounded"></div>
          <div className="w-10 h-10 bg-black mx-auto rounded"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
