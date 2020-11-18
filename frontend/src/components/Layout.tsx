import { FC } from "react";
import LeftSidebar from "./LeftSidebar";
import { graphql, useLazyLoadQuery } from "react-relay/hooks";
import { LayoutQuery } from "__generated__/LayoutQuery.graphql";

import ColumnsList from "./ColumnsList";

const mainQuery = graphql`
  query LayoutQuery($days: [DateTime!]!) {
    ...ColumnsListFragment @arguments(days: $days)
  }
`;

const Layout: FC = ({ children }) => {
  const data = useLazyLoadQuery<LayoutQuery>(mainQuery, {
    days: ["2020-11-20", "2020-11-21"],
  });

  console.log(data);

  return (
    <div className="flex flex-row h-screen w-full max-h-screen">
      <LeftSidebar />
      <div className="w-64 bg-green-500 h-full"></div>
      <div className="w-16 bg-orange-500 h-full flex flex-col space-y-6 pt-10">
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
