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
    <div className="flex flex-row h-screen w-full max-h-screen">
      <LeftSidebar />
      <ColumnsList days={data} />
      <div className="w-96 bg-green-500 h-full"></div>
      <div className="w-16 bg-amber-500 h-full flex flex-col space-y-6 pt-10">
        <div className="w-10 h-10 bg-black mx-auto rounded"></div>
        <div className="w-10 h-10 bg-black mx-auto rounded"></div>
        <div className="w-10 h-10 bg-black mx-auto rounded"></div>
        <div className="w-10 h-10 bg-black mx-auto rounded"></div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
